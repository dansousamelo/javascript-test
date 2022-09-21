import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;
`

export const PostsContent = styled.main``

export const WrapperPost = styled.div`
  flex: 1;
  h1 {
    margin: 1rem 0;
  }
`
