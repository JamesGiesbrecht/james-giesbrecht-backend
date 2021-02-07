import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from 'components/Layout/Layout'
import useColorScheme from 'hooks/useColorScheme'
import Home from 'components/Home'
import Login from 'components/Login'
// import ScreenSize from 'components/ScreenSize'

/*
TODO: Add bio, contact section, multiple links for code button
*/

const App = () => {
  /* THEMING AND STYLES START */
  const [colorScheme, toggleColorScheme] = useColorScheme()
  const theme = createMuiTheme({
    palette: {
      type: colorScheme,
    },
    overrides: {
      MuiLink: {
        root: {
          color: colorScheme === 'dark' ? blue[300] : blue[900],
        },
      },
    },
  })
  /* THEMING AND STYLES END */

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <ScreenSize /> */}
        <Layout
          theme={colorScheme}
          toggleTheme={toggleColorScheme}
        >
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect push to="/" />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
