import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const themeJson = {}
const theme = createMuiTheme(themeJson)

const ThemeManager = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MuiThemeProvider>
)

export default ThemeManager
