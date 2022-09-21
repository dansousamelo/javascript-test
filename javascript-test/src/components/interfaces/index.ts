export interface CompanyProps {
  bs: string
  catchPhrase: string
  name: string
}

export interface AddressProps {
  city: string
}

export interface UserProps {
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
  address: AddressProps
  company: CompanyProps
}

export interface UsersProps {
  [key: number]: UserProps
}

export interface PostProps {
  body: string
  id: number
  title: string
  userId: number
}

export interface PostsProps {
  [key: number]: PostProps
}
