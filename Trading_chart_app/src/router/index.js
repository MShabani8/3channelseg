import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import Home from './home'
import NavBar from './navbar'
import Sidebar from './sidebar'
import LogIn from './login'
import Footer from './footer'
import Settings from './settings'
import Static from './static'
import Multi from './multi'
import { AppProvider } from './context'

const useQuery = () => {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}

function Staticc() {
  let query = useQuery()

  return (
    <div>
      <Static m={query.get('m')} />
    </div>
  )
}
function Multii() {
  let query = useQuery()

  return (
    <div>
      <Multi m={query.get('m')} />
    </div>
  )
}
const ReactRouterSetup = () => {
  return (
    <AppProvider>
      <Sidebar />
      <Router>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route
            path='/static'
            element={
              <>
                <NavBar />
                <Staticc />
              </>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  )
}
export default ReactRouterSetup
