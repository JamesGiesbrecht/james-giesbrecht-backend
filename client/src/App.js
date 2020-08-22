import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from './components/Layout/Layout'
import About from './components/About'
import useColorScheme from './hooks/useColorScheme'
import Projects from './components/Projects'

const App = () => {
  /* THEMING AND STYLES START */
  const [colorScheme, toggleColorScheme] = useColorScheme()
  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      type: colorScheme,
    },
  }),
  [colorScheme])

  /* THEMING AND STYLES END */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout
        theme={colorScheme}
        toggleTheme={toggleColorScheme}
      >
        <About />
        <Projects />
      </Layout>
    </ThemeProvider>
  )
}

export default App
