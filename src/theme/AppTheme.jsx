import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { purpleTheme } from './purpleTheme';

// eslint-disable-next-line react/prop-types
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline />

        { children }
    </ThemeProvider>
  )
}
