import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const Dropdown = ({ color, Links }) => {
  //   // dropdown props
  //   const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  //   const btnDropdownRef = React.createRef()
  //   const popoverDropdownRef = React.createRef()
  //   const openDropdownPopover = () => {
  //     createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
  //       placement: 'bottom-start',
  //     })
  //     setDropdownPopoverShow(true)
  //   }
  //   const closeDropdownPopover = () => {
  //     setDropdownPopoverShow(false)
  //   }

  //   return (
  //     <>
  //       <div className='flex flex-wrap'>
  //         <div className='w-full sm:w-6/12 md:w-4/12 px-4'>
  //           <div className='relative inline-flex align-middle w-full'>
  //             <button
  //               type='button'
  //               ref={btnDropdownRef}
  //               onClick={() => {
  //                 dropdownPopoverShow
  //                   ? closeDropdownPopover()
  //                   : openDropdownPopover()
  //               }}
  //             >
  //               fdsfsd
  //             </button>
  //             <div
  //               ref={popoverDropdownRef}
  //               className={
  //                 (dropdownPopoverShow ? 'block ' : 'hidden ') +
  //                 'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white'
  //               }
  //               style={{ minWidth: '12rem' }}
  //             >
  //               <a
  //                 href='#pablo'
  //                 className={
  //                   'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent white '
  //                 }
  //                 onClick={(e) => e.preventDefault()}
  //               >
  //                 Something else here
  //               </a>
  //               <div className='h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25' />
  //               <a
  //                 href='#pablo'
  //                 className={
  //                   'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent white '
  //                 }
  //                 onClick={(e) => e.preventDefault()}
  //               >
  //                 Seprated link
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }

  const useClickOutside = (handler, ref) => {
    const maybeHandler = (event) => {
      if (!ref?.current?.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)

    return () => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isAsideOpen, setIsAsideOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTModalOpen, setIsTModalOpen] = useState(false)
  const [isAddAlerts, setIsAddAlerts] = useState(false)
  const [isLtr, setIsLtr] = useState(false)
  const [ModalRender, setModalRender] = useState(false)

  const SetModalRender = () => {
    setModalRender(true)
  }
  const unSetModalRender = () => {
    setModalRender(false)
  }

  const OAddAlerts = () => {
    setIsAddAlerts(true)
  }
  const CAddAlerts = () => {
    setIsAddAlerts(false)
  }

  const openAside = () => {
    setIsAsideOpen(true)
  }
  const closeAside = () => {
    setIsAsideOpen(false)
  }
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openTModal = () => {
    setIsTModalOpen(true)
  }

  const closeTModal = () => {
    setIsTModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        ModalRender,
        SetModalRender,
        unSetModalRender,
        isSidebarOpen,
        isAsideOpen,
        isModalOpen,
        isTModalOpen,
        isAddAlerts,
        OAddAlerts,
        CAddAlerts,
        openAside,
        closeAside,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        openTModal,
        closeTModal,
        useClickOutside,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
