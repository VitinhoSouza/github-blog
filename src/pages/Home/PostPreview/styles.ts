import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostPreviewContainer = styled(NavLink)`
    text-decoration: none;

    width: 26rem;
    height: 16.25rem;
    padding: 2rem;

    background-color: ${(props) => props.theme['base-post']};
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    >span.subtitle{
        margin-top: 2.5rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 160%;
    }
`

export const TitleAndDate = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    >h3{
        width: 70%;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 160%;
        color: ${(props) => props.theme['base-title']};
    }

    >span{
        width: 20%;
        color: ${(props) => props.theme['base-span']};
        font-size: 0.875rem;
        margin-top: 0.5rem;
        text-align: right;
    }
`