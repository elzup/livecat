import { createMuiTheme } from '@material-ui/core'
export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiFormLabel: {
      filled: {
        transform: 'translate(0, 1.5px) scale(1) !important',
      },
    },
  },
})
