
import * as S from './styles'

interface PostPreviewProps{
    id: number;
    title: string;
    description: string;
    publishIn: Date;
}

export function PostPreview({id, title, description, publishIn}:PostPreviewProps){

    return(
        <S.PostPreviewContainer to={`/${id}`}>
            <S.TitleAndDate>
                <h3>{title}</h3>
                <span>Há 1 dia</span>
            </S.TitleAndDate>

            <span className="subtitle" title={description}>
                {description.length > 181 ? description.slice(0,181) + '...' : description}
            </span>
        </S.PostPreviewContainer>
    )
}