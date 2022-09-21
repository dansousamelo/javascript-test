import * as S from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <S.Container>
      <S.Logo src={logo} alt="Logo Ignite Feed" />
    </S.Container>
  )
}
