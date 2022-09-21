import styled from 'styled-components'

export const Container = styled.article`
  background: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;
  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }
`
export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-400']};
  }

  & + & {
    margin-top: 2rem;
  }
`

export const Content = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme['gray-300']};
  margin-top: 1.5rem;
`

export const Text = styled.p`
  margin-top: 1rem;

  a {
    font-weight: bold;
    color: ${({ theme }) => theme['gray-500']};
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme['green-300']};
    }
  }
`

export const Avatar = styled.div`
  background: ${({ theme }) => theme['gray-100']};
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme['gray-800']};
  outline: 2px solid ${({ theme }) => theme['green-500']};

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme['green-500']};
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid ${({ theme }) => theme['gray-800']};
    outline: 2px solid ${({ theme }) => theme['green-500']};
  }
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    display: block;
    color: ${({ theme }) => theme['gray-100']};
    line-height: 1.6;
  }

  span {
    display: block;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-400']};
    line-height: 1.6;
  }
`
