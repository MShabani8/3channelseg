import React, { useState, useRef, useEffect, Component } from 'react'
import './../index.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import axios from 'axios'

const SidebarDropdown = ({ item, name }) => {
  const [ospen, setOspen] = useState(false)
  const openIt = () => {
    setOspen(!ospen)
  }
  return (
    <>
      <div className='border-b '>
        <button
          className='w-full flex justify-between items-center py-4 px-5 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'
          onClick={openIt}
        >
          <span className='flex items-center'>
            <span className=' font-medium'>{name}</span>
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
                        'py-3 px-16 block text-sm text-gray-600 hover:bg-blue-500 hover: bg-gray-100'
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

const UserSide = () => {
  const userRole = useSelector((state) => state.userRole.value.data)
  const login = useSelector((state) => state.login.value)
  const dispatch = useDispatch()
  const getData = () => {
    const res = axios
      .get('https://api.arzwatch.com/api/v1/Alert/UserAlerts', {
        headers: {
          Authorization: login.data.access_token,
        },
      })
      .then((res) => {
        const response = res
        console.log(response)
        dispatch(login({ id: response.data.data.id }))
      })
      .catch((error) => {
        console.log('ERROR')
        return Promise.reject({})
      })
  }

  return (
    <div className='bg-gray-200 font-sans w-full relative'>
      <div className=' bg-gray-50 flex justify-center items-center bg-red-100 relative'>
        <div className='h-56 w-72 absolute left-6 flex justify-start items-center'>
          <div className='object-cover h-20 w-20 bg-red-100 rounded-full'></div>
        </div>
        <div className='absolute left-28 top-12 flex flex-col justify-center items-center'>
          <div className='text-white pt-8'>ADMIN</div>
        </div>
        <div className='absolute left-28 top-20 flex flex-col justify-center items-center'>
          <div className='text-gray-700 mx-1 pt-7 font-bold text-sm'>Pro</div>
        </div>
        <div
          className='
          h-52
          mx-4
          w-5/6
          bg-gradient-to-r from-blue-500 to-blue-400
          sm:w-80 sm:mx-0
        '
        >
          <div className='h-1/2 w-full flex justify-between items-baseline px-4 py-5'>
            <div className='text-white'>Porfile</div>
          </div>
          <div
            className='
            bg-white
            h-24
            w-full
            border-b
            flex flex-col
            justify-around
            items-center
          '
          ></div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row absolute w-full top-36'>
        <div className='w-full bg-white'>
          <nav className='w-full mt-7 border-t'>
            <SidebarDropdown className='' name='Profile Settings' />
            <SidebarDropdown name='Sign out' />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default UserSide
