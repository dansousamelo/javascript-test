import styled from 'styled-components'

export const Container = styled.aside`
  background: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;
  overflow: hidden;
`

export const Cover = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 6px);

  strong {
    margin-top: 1rem;
    color: ${({ theme }) => theme['gray-100']};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-400']};
    line-height: 1.6;
  }
`

export const ProfileStrong = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme['gray-100']};
  line-height: 1.6;
`

export const ProfileSpan = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-400']};
  line-height: 1.6;
`

export const Avatar = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme['gray-800']};
  outline: 2px solid ${({ theme }) => theme['green-500']};
`

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme['gray-600']};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
`

export const FooterLink = styled.a`
  background: transparent;
  color: ${({ theme }) => theme['green-500']};
  border: 2px solid ${({ theme }) => theme['green-500']};
  border-radius: 8px;
  height: 50px;
  padding: 0 1.5rem;
  font-weight: bold;
  display: block;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.35rem;

  transition: color 0.1s, background-color 0.1s;

  :hover {
    background: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};
  }
`
