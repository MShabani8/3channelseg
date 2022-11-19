import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/fonts.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
)
