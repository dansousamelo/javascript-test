import * as S from './styles'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <S.Container>
      <S.Cover src="https://images.unsplash.com/photo-1589451158435-b54cba3929f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <S.Profile>
        <S.Avatar src="https://avatars.githubusercontent.com/u/48137972?v=4" />

        <S.ProfileStrong>Daniel Veras</S.ProfileStrong>
        <S.ProfileSpan>Web Developer</S.ProfileSpan>
      </S.Profile>

      <S.Footer>
        <S.FooterLink href="https://github.com/dansousamelo">
          <PencilLine size={20} />
          Profile
        </S.FooterLink>
      </S.Footer>
    </S.Container>
  )
}
