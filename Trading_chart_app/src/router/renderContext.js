import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [ModalRender, setModalRender] = useState(false)

  const SetModalRender = () => {
    setModalRender(true)
  }
  const unSetModalRender = () => {
    setModalRender(false)
  }

  return (
    <AppContext.Provider
      value={{
        unSetModalRender,
        SetModalRender,
        ModalRender,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useRenderContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
