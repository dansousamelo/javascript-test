import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme['gray-800']};
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
`
export const Logo = styled.img`
  height: 2rem;
`
