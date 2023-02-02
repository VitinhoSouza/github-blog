import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from "phosphor-react";
import { NavLink, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { API_GITHUB } from "../../lib/axios";
import * as S from './styles';

interface Post {
    title: string;
    body: string;
    updated_at: string;
    comments: number;
    html_url: string;
    user: {
        login: string;
    }
}

export function Post(){

    const {id} = useParams();
    const [post, setPost] = useState<Post>();

    async function getIssues() {
        const response = await API_GITHUB.get(`repos/VitinhoSouza/github-blog/issues/${id}`);
        setPost(response.data);
    }
    
    useEffect(() => {
        getIssues();
    }, [])
    
    return(
        <S.PostContainer>
            <S.PostInfo>
                <S.ActionsContainer>
                    <NavLink to={"/"} className="back">
                        <ArrowLeft/>
                        <span>VOLTAR</span>
                    </NavLink>
                    <div className="github">
                        <a href={post?.html_url} target="_blank">VER NO GITHUB</a> 
                        <ArrowSquareOut weight='bold' size={16}/>
                    </div>
                </S.ActionsContainer>

                <h3 className="title">
                    {post?.title}
                </h3>

                <S.SocialNetworkContainer>
                    <S.SocialNetwork>
                        <GithubLogo weight='duotone'/>
                        <span>{post?.user.login}</span>
                    </S.SocialNetwork>

                    <S.SocialNetwork>
                        <Calendar weight="fill"/>
                        <span>
                        {formatDistanceToNow(new Date(post?.updated_at || new Date().toDateString()),{
                            addSuffix: true, locale: ptBR
                        })}
                        </span>
                    </S.SocialNetwork>

                    <S.SocialNetwork>
                        <ChatCircle weight="fill" />
                        <span>{post?.comments} {post?.comments === 1 ? "comentário" : "comentários"}</span>
                    </S.SocialNetwork>
                </S.SocialNetworkContainer>
            </S.PostInfo> 

            <S.PostContent>
                <ReactMarkdown>{post?.body || ""}</ReactMarkdown>
            </S.PostContent>
        </S.PostContainer>
    )
}