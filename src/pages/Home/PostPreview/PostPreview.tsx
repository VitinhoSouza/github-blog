import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import * as S from './styles'

interface PostPreviewProps{
    number: number;
    title: string;
    description: string;
    publishIn: Date;
}

export function PostPreview({number, title, description, publishIn}:PostPreviewProps){

    return(
        <S.PostPreviewContainer to={`/${number}`}>
            <S.TitleAndDate>
                <h3>{title}</h3>
                <span>
                    {formatDistanceToNow(new Date(publishIn),{
                        addSuffix: true, locale: ptBR
                    })}
                </span>
            </S.TitleAndDate>

            <span className="subtitle" title={description}>
                {description.length > 150 ? description.slice(0,150) + '...' : description}
            </span>
        </S.PostPreviewContainer>
    )
}