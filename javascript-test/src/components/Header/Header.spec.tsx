import { render } from '@testing-library/react'
import { Header } from '.'

test('Header renders correctly', () => {
  const { debug } = render(<Header />)

  debug()
})
