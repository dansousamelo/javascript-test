import * as S from './styles'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { UserPost } from '../../components/UserPost'
import { useUsers } from '../../hooks/user'
import { PostsProps, UserProps } from '../../components/interfaces'

interface UsersWithPostsProp extends UserProps {
  posts: PostsProps[]
}

export function Home() {
  const { usersWithPosts } = useUsers()

  return (
    <S.Container>
      <Header />

      <S.Wrapper>
        <Sidebar />

        <S.PostsContent>
          {usersWithPosts?.map((user: UsersWithPostsProp) => {
            return (
              <S.WrapperPost key={user.id}>
                <h1>{user.name}</h1>
                {user.posts.map((post: any) => {
                  return (
                    <UserPost
                      key={post.id}
                      author={user.name}
                      content={post.body}
                      website={user.website}
                      title={post.title}
                      companyName={user.company.name}
                      city={user.address.city}
                    />
                  )
                })}
              </S.WrapperPost>
            )
          })}
        </S.PostsContent>
      </S.Wrapper>
    </S.Container>
  )
}
