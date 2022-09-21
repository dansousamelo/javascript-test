import { memo } from 'react'
import * as S from './styles'
import isEqual from 'react-fast-compare'

interface UserPostProps {
  author: string
  content: string
  website: string
  title: string
  companyName: string
  city: string
}

function UserPostComponent({
  author,
  content,
  website,
  title,
  companyName,
  city,
}: UserPostProps) {
  return (
    <S.Container>
      <S.PostHeader>
        <S.Author>
          <S.Avatar>
            <h1>{author[0]}</h1>
          </S.Avatar>
          <S.AuthorInfo>
            <strong>{author}</strong>
            <span>{website}</span>
          </S.AuthorInfo>
        </S.Author>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
          {city}
        </time>
      </S.PostHeader>

      <S.Content>
        <h3>{title}</h3>
        <S.Text>{content}</S.Text>

        <S.Text>
          <a href="#">䷑ {companyName}</a>{' '}
        </S.Text>
      </S.Content>
    </S.Container>
  )
}

export const UserPost = memo(UserPostComponent, (p, n) =>
  isEqual(p.content, n.content),
)
