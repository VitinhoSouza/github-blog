
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { API_GITHUB } from '../../lib/axios'
import { PostPreview } from './PostPreview/PostPreview'

import * as S from './styles'

interface User {
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
    login: string;
    name: string;
    html_url: string;
}

interface Issue {
    id: number;
    number: number;
    title: string;
    body: string;
    created_at: string;
}

export function Home(){

    const [user, setUser] = useState<User>();
    const [searchQuery, setSearchQuery] = useState('');
    const [issues, setIssues] = useState<Issue[]>([]);

    async function getUser() {
        const response = await API_GITHUB.get("/users/VitinhoSouza");
        setUser(response.data);
    }

    useEffect(() =>{
        getUser();
    }, [])

    async function getIssues(query: string) {
        const response = await API_GITHUB.get(`/search/issues?q=${query}%20repo:VitinhoSouza/github-blog`);
        setIssues(response.data.items);
    }

    useEffect(() => {
        getIssues(searchQuery);
    }, [searchQuery])

    return(
        <S.HomeContainer>
            <S.ProfileContainer>
                <img className="photo" src={user?.avatar_url}/>

                <S.ProfileInfo>
                    <S.TitleContainer>
                        <h3>{user?.name}</h3>
                        <div className="github">
                            <a href={user?.html_url} target="_blank">GITHUB</a> 
                            <ArrowSquareOut weight='bold' size={16}/>
                        </div>
                    </S.TitleContainer>

                    <span className="subtitle">
                        {user?.bio}
                    </span>

                    <S.SocialNetworkContainer>
                        <S.SocialNetwork>
                            <GithubLogo weight='duotone'/>
                            <span>{user?.login}</span>
                        </S.SocialNetwork>

                        <S.SocialNetwork>
                            <Buildings/>
                            <span>{user?.company}</span>
                        </S.SocialNetwork>

                        <S.SocialNetwork>
                            <Users />
                            <span>{user?.followers} seguidores</span>
                        </S.SocialNetwork>
                    </S.SocialNetworkContainer>
                </S.ProfileInfo>
            </S.ProfileContainer> 

            <S.SearchContainer>
                <S.InfoContainer>
                    <h4>Publicações</h4>
                    <span>{issues.length} {issues.length === 1 ? "publicação" : "publicações"}</span>
                </S.InfoContainer>

                <S.Input
                    type="text"
                    placeholder="Buscar conteúdo"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </S.SearchContainer>

            <S.PostsContainer>
                {issues.map(issue => (
                    <PostPreview
                        key={issue.id}
                        number={issue.number}
                        title={issue.title}
                        description={issue.body}
                        publishIn={new Date(issue.created_at)}
                    />
                ))}
                
            </S.PostsContainer>
        </S.HomeContainer>
    )
}