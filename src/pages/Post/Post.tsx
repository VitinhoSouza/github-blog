import { ArrowLeft, ArrowSquareOut, Buildings, Calendar, ChatCircle, GithubLogo, Users } from "phosphor-react";
import { NavLink, useParams } from "react-router-dom"

import * as S from './styles'

export function Post(){

    const {id} = useParams();

    return(
        <S.PostContainer>
            <S.PostInfo>
                <S.ActionsContainer>
                    <NavLink to={"/"} className="back">
                        <ArrowLeft/>
                        <span>VOLTAR</span>
                    </NavLink>
                    <div className="github">
                        <span>VER NO GITHUB</span> 
                        <ArrowSquareOut weight='bold' size={16}/>
                    </div>
                </S.ActionsContainer>

                <h3 className="title">
                    Tristique volutpat pulvinar vel massa, pellentesque egestas.
                </h3>

                <S.SocialNetworkContainer>
                    <S.SocialNetwork>
                        <GithubLogo weight='duotone'/>
                        <span>vitinhosouza</span>
                    </S.SocialNetwork>

                    <S.SocialNetwork>
                        <Calendar weight="fill"/>
                        <span>Há 1 dia</span>
                    </S.SocialNetwork>

                    <S.SocialNetwork>
                        <ChatCircle weight="fill" />
                        <span>5 comentários</span>
                    </S.SocialNetwork>
                </S.SocialNetworkContainer>
            </S.PostInfo> 

            <S.PostContent>
                Conteúdo do Post
            </S.PostContent>
        </S.PostContainer>
    )
}