import React from 'react'
import ReactDOM from 'react-dom'

import { MuiThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import configureStore from './store'
import theme from './theme'

const { persistor, store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
