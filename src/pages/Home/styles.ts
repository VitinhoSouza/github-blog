import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  /* background-color: red; */
`

export const ProfileContainer = styled.div`
    display: flex;
    gap: 2rem;
    width: 54rem;
    height: 13.25rem;
    margin-top: -5rem;
    padding: 2rem;

    background-color: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    .photo{
        /* background-color: red; */
        min-width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    >span.subtitle{
        color: ${(props) => props.theme['base-text']};
        line-height: 1.5rem;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    h3{
        color: ${(props)=>props.theme['base-title']};
        font-weight: 700;
        font-size: 1.5rem;
    }

    .github{
        color: ${(props)=>props.theme.blue};
        height: 1.5rem;
        font-weight: 700;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        border-bottom: 2px solid transparent;
        transition: border-color 0.5s;

        a{
            text-decoration: none;
            color: ${(props)=>props.theme.blue};
            font-size: 0.75rem;
        }

        &:hover{
            cursor: pointer;
            border-bottom: 2px solid ${(props)=>props.theme.blue}; 
        }
          
    }
`

export const SocialNetworkContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 2rem;
 margin-top: 1rem;
`

export const SocialNetwork = styled.div`
    color: ${(props) => props.theme['base-subtitle']};

    display: flex;
    align-items: center;
    gap:0.5rem;

    svg{
        font-size: 1.2rem;
        color: ${(props) => props.theme['base-label']};
    }
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 54rem;
    margin-top: 3rem;
`

export const InfoContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    >h4{
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 700;
        font-size: 1.125rem;
    }

    >span{
        color: ${(props) => props.theme['base-span']};
        font-size: 0.875rem;
    }
`

export const Input = styled.input`
    margin-top: 1rem;
    padding: 0.7rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};

    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder{
        color: ${(props) => props.theme['base-label']};
    }
`

export const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    width: 54rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
`
