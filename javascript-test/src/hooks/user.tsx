import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { PostProps, UserProps } from '../components/interfaces'
import { api } from '../services/api'

interface UserContextData {
  usersWithPosts: any
}

const UserContext = createContext<UserContextData>({} as UserContextData)

type UserActProviderProps = {
  children: React.ReactNode
}
function UserProvider({ children }: UserActProviderProps): JSX.Element {
  const [usersWithPosts, setUsersWithPost] = useState()

  const handleSendFormData = useCallback(async () => {
    const users: any = []
    const posts: any = []
    await api.get('/users').then(function (response) {
      users.push(...response.data)
    })

    await api.get('/posts').then(function (response) {
      posts.push(...response.data)
    })
    console.log('users: ', users)
    console.log('posts: ', posts)

    setUsersWithPost(
      users.map((user: UserProps) => {
        return {
          ...user,
          posts: posts.filter((post: PostProps) => user.id === post.userId),
        }
      }),
    )
  }, [])

  useEffect(() => {
    handleSendFormData()
  }, [handleSendFormData])

  return (
    <UserContext.Provider
      value={{
        usersWithPosts,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

function useUsers(): UserContextData {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('a error ocurred.')
  }

  return context
}

export { UserProvider, useUsers }
