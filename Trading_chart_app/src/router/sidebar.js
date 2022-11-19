import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Market } from '../FrontData'
import { useGlobalContext } from './context'

let useClickOutside = (handler) => {
  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)

    return () => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  })

  return domNode
}

const SidebarDropdown = ({ item, name }) => {
  const [ospen, setOspen] = useState(false)
  const openIt = () => {
    setOspen(!ospen)
  }
  return (
    <>
      <div className='border-b '>
        <button
          className='w-full flex justify-between items-center py-5 px-6 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'
          onClick={openIt}
        >
          <span className='flex items-center'>
            <span className='mx-2 font-medium'>{name}</span>
          </span>

          <span>
            <svg
              focusable='false'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className={item ? 'w-5 h-5' : 'hidden'}
            >
              <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
            </svg>
          </span>
        </button>
        <div className={ospen ? 'block' : 'hidden'}>
          {item
            ? item.map((item) => {
                const { id, url, text } = item
                var link = url
                console.log(name + link)
                return (
                  <span className='bg-gray-100' key={id}>
                    <a
                      className={
                        'py-3 px-16 block text-sm text-gray-600 hover:bg-blue-500 hover:text-white bg-gray-100'
                      }
                      href={name + link}
                    >
                      {text}
                    </a>
                  </span>
                )
              })
            : null}
        </div>
      </div>
    </>
  )
}

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  let domNode = useClickOutside(() => {
    closeSidebar()
  })

  return (
    <container className={`${isSidebarOpen ? 'sidecontainer z-50' : 'z-50'}`}>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar '}`}
        ref={domNode}
      >
        <div className='h-10'>logo</div>
        <div className='bg-gray-200 font-sans'>
          <div className='flex flex-col sm:flex-row sm:justify-around'>
            <div className='w-full h-screen bg-white'>
              <nav className=''>
                <SidebarDropdown name='Charts' />
                <SidebarDropdown name='Trade' />
                <SidebarDropdown item={Market} name='Market' />
                <SidebarDropdown name='About Us' />
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </container>
  )
}

export default Sidebar
