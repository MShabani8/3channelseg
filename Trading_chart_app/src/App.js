import React from 'react'
import Router from './router'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Router />
      </div>
    </LocalizationProvider>
  )
}

export default App
