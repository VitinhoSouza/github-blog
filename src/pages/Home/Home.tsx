
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { PostPreview } from './PostPreview/PostPreview'

import * as S from './styles'

export function Home(){

    return(
        <S.HomeContainer>
            <S.ProfileContainer>
                <div className="photo">
                    Imagem
                </div>

                <S.ProfileInfo>
                    <S.TitleContainer>
                        <h3>Victor Souza</h3>
                        <div className="github">
                            <span>GITHUB</span> 
                            <ArrowSquareOut weight='bold' size={16}/>
                        </div>
                    </S.TitleContainer>

                    <span className="subtitle">
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                        Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                    </span>

                    <S.SocialNetworkContainer>
                        <S.SocialNetwork>
                            <GithubLogo weight='duotone'/>
                            <span>vitinhosouza</span>
                        </S.SocialNetwork>

                        <S.SocialNetwork>
                            <Buildings/>
                            <span>AppNoz</span>
                        </S.SocialNetwork>

                        <S.SocialNetwork>
                            <Users />
                            <span>10 seguidores</span>
                        </S.SocialNetwork>
                    </S.SocialNetworkContainer>
                </S.ProfileInfo>
            </S.ProfileContainer> 

            <S.SearchContainer>
                <S.InfoContainer>
                    <h4>Publicações</h4>
                    <span>6 publicações</span>
                </S.InfoContainer>

                <S.Input
                    type="text"
                    placeholder="Buscar conteúdo"
                />
            </S.SearchContainer>

            <S.PostsContainer>
                <PostPreview
                    id={1}
                    title='JavaScript data types and data structures'
                    description='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
                    publishIn={new Date()}
                />

                <PostPreview
                    id={1}
                    title='JavaScript data types and data structures'
                    description='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
                    publishIn={new Date()}
                />

                <PostPreview
                    id={1}
                    title='JavaScript data types and data structures'
                    description='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
                    publishIn={new Date()}
                />
            </S.PostsContainer>
        </S.HomeContainer>
    )
}