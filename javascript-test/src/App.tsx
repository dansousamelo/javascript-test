import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { AppProvider } from './hooks'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <Home />
      </AppProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
