import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 54rem;
    height: 10.5rem;
    margin-top: -5rem;
    padding: 2rem;

    background-color: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    h3.title{
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
    }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .github, .back{
    text-decoration: none;
    color: ${(props)=>props.theme.blue};
    height: 1.5rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 2px solid transparent;
    transition: border-color 0.5s;

    span{
        font-size: 0.75rem;
    }

    &:hover{
        cursor: pointer;
        border-bottom: 2px solid ${(props)=>props.theme.blue}; 
    }
    
    a{
      text-decoration: none;
      font-size: 0.75rem;
      color: ${(props)=>props.theme.blue};
    }
      
}
`

export const SocialNetworkContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 2rem;
`

export const SocialNetwork = styled.div`
    color: ${(props) => props.theme['base-span']};

    display: flex;
    align-items: center;
    gap:0.5rem;

    svg{
        font-size: 1.2rem;
        color: ${(props) => props.theme['base-label']};
    }
`

export const PostContent = styled.div`
  margin: 2rem 0;
  max-width: 50rem;

  text-align: justify;
  p:first-child {
    font-size: 1.2rem;
  }
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`