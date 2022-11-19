import { useGlobalContext } from '../../router/context'
import React, { useState, useRef, useEffect, Component } from 'react'
import MiniSelect from '../Select/MiniSelect'
import { count, timeframe } from '../../FrontData'
import '../../index.css'
import { Puff } from '@agney/react-loading'
import axios from 'axios'
import { logOut, loginUser } from '../../features/Login'
import { getId, trigger, setMaxDate } from '../../features/Alert'
import { getCond } from '../../features/AlertConditions'
import { createPopper } from '@popperjs/core'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const ButtonClickOutside = (handler, ref1, ref2) => {
  const maybeHandler = (event) => {
    if (
      !(
        ref1?.current?.contains(event.target) ||
        ref2?.current?.contains(event.target)
      )
    ) {
      handler()
    }
  }

  document.addEventListener('mousedown', maybeHandler)

  return () => {
    document.removeEventListener('mousedown', maybeHandler)
  }
}

const AlertWithHover = ({ item, name }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()
  const domNode = useRef()
  const domNode1 = useRef()
  const opencloseDropdownPopover = (handler, ref, ref2) => {
    const maybeHandler = (event) => {
      if (
        !(
          ref.current.contains(event.target) ||
          ref2.current.contains(event.target)
        )
      ) {
        handler()
      }
    }

    document.addEventListener('mouseover', maybeHandler)

    return () => {
      document.removeEventListener('mouseover', maybeHandler)
    }
  }
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    })
    setDropdownPopoverShow(true)
    opencloseDropdownPopover(
      () => {
        setDropdownPopoverShow(false)
      },
      domNode,
      domNode1
    )
  }

  return (
    <>
      <div className='block ml-12 flex-wrap'>
        <div>
          <div className='block relative'>
            <div ref={domNode1}></div>
            <div ref={domNode} className='flex relative'>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? 'inline-block ' : 'hidden ') +
                  'right-16 overflow-auto dropdown-content text-right w-32  rounded-lg border align-middle z-50 '
                }
              >
                <div className='block justify-end MoreWidth h-56 flex align-middle'>
                  <div className='mt-2'>
                    <div>
                      <label className=' inline-flex items-center py-1'>
                        <input
                          type='checkbox'
                          className='form-checkbox h-4 w-4 text-blue-500'
                        />
                        <span className='ml-3'>Option 1</span>
                      </label>
                    </div>
                    <div>
                      <label className='inline-flex items-center py-1'>
                        <input
                          type='checkbox'
                          className='form-checkbox h-4 w-4 text-blue-500'
                        />
                        <span className='ml-3'>Option 2</span>
                      </label>
                    </div>
                    <div>
                      <label className='inline-flex items-center py-1'>
                        <input
                          type='checkbox'
                          className='form-checkbox h-4 w-4 text-blue-500'
                        />
                        <span className='ml-3'>Option 3</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Alert = () => {
  const login = useSelector((state) => state.login.value)
  const AlertId = useSelector((state) => state.Alerts.value)
  const [Item, setItem] = useState({ data: [] })
  const dispatch = useDispatch()
  useEffect(() => {
    let access_token = 'Bearer ' + login.data.access_token
    console.log(access_token)
    axios
      .get('https://api.arzwatch.com/api/v1/Alert/UserAlerts', {
        headers: {
          Authorization: access_token,
        },
      })
      .then((res) => {
        console.log('success')
        dispatch(
          getCond({
            data: res.data.data,
          })
        )
        setItem(res.data)
      })
      .catch((error) => {
        console.log(error.message)
        if (error.message.includes('401')) {
          let access_token = 'Bearer ' + login.data.access_token
          axios
            .post('https://api.arzwatch.com/api/v1/Account/RefreshToken', {
              access_token: access_token,
              refresh_token: login.data.refresh_token,
              token_type: login.data.token_type,
            })
            .then((res) => {
              dispatch(
                loginUser({
                  access_token: res.data.access_token,
                  refresh_token: res.data.refresh_token,
                  token_type: res.data.token_type,
                  expires_in: res.data.expires_in,
                })
              )
            })
            .catch((error) => {
              console.log(error.message)
              return Promise.reject({})
            })
        }
        return Promise.reject({})
      })
    axios
      .get('https://api.arzwatch.com/api/v1/Alert/MaxExpireDate', {
        headers: {
          Authorization: access_token,
        },
      })
      .then((res) => {
        console.log('maxdate set')
        dispatch(setMaxDate(res.data.data.result))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
        return Promise.reject({})
      })
  }, [AlertId.reRender])

  console.log(AlertId.reRender)

  const { openTModal, OAddAlerts, CAddAlerts } = useGlobalContext()
  const OpenOnChange = (ref1, ref2, func, state) => {
    func(!state)
    ButtonClickOutside(
      () => {
        func(false)
      },
      ref1,
      ref2
    )
  }

  const AdotdomNode = useRef()
  const AdotdomNode1 = useRef()
  const [ADropdown, setADropdown] = useState(false)
  const [IsLoading, setIsLoading] = useState(false)
  const [onChangeData, setOnChangeData] = useState(null)
  console.log(Item)

  if (!IsLoading) {
    return (
      <>
        <nav className='w-full h-1/2 flex flex-col'>
          <div className='w-full bg-white border-b flex justify-between items-center pl-3 text-gray-600 cursor-pointer focus:outline-none'>
            <span className=' py-4 block items-center w-1/2'>
              <button
                className=' font-medium flex'
                ref={AdotdomNode}
                onClick={() => {
                  OpenOnChange(
                    AdotdomNode,
                    AdotdomNode1,
                    setADropdown,
                    ADropdown
                  )
                }}
              >
                Alert
                <span className='py-0.5 ml-1'>
                  <svg
                    focusable='false'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='w-5 h-5 item-center '
                  >
                    <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
                  </svg>
                </span>
              </button>

              <div
                className={
                  (ADropdown ? 'inline-block ' : 'hidden ') +
                  'block overflow-auto max-h-52 dropdown-content w-44 rounded-lg border align-middle z-50'
                }
                id='journal-scroll'
                ref={AdotdomNode1}
              >
                <div className='h-full block align-middle'>
                  <button
                    className='w-full flex justify-between items-center border-t border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'
                    onClick={() => {
                      OAddAlerts()
                      openTModal()
                      setADropdown(false)
                    }}
                  >
                    <span className='flex items-center'>
                      <span className='px-2 font-medium'>Add New Alert</span>
                    </span>

                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-plus'
                        viewBox='0 0 16 16'
                        className='w-6 h-6'
                      >
                        <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
                      </svg>
                    </span>
                  </button>
                  <button
                    className='w-full flex justify-between items-center border-t border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'
                    onClick={() => {
                      let access_token = 'Bearer ' + login.data.access_token
                      axios
                        .delete(
                          'https://api.arzwatch.com/api/v1/Alert/DeleteBulk',
                          {
                            headers: {
                              Authorization: access_token,
                            },
                            data: {},
                          }
                        )
                        .then(() => {
                          console.log('deleted')
                          dispatch(trigger(!AlertId.reRender))

                          setADropdown(false)
                        })
                        .catch((error) => {
                          console.log(error.message)
                          return Promise.reject({})
                        })
                    }}
                  >
                    <span className='flex items-center'>
                      <span className='px-2 font-medium'>
                        Remove all alerts
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </span>
            <span></span>
          </div>
          <div className='overflow-y-auto h-full bg-white' id='journal-scroll'>
            {Item.data
              ? Item.data.map((item, index) => {
                  let newDate = new Date()
                  const {
                    id,
                    alertType,
                    isActive,
                    name,
                    conditionName,
                    expiryDate,
                  } = item
                  return (
                    <span
                      className='w-full relative bg-coolgray-150 border-b bg-white flex justify-between items-center py-3 px-3 text-gray-600  hover:bg-gray-100 hover:text-gray-700 focus:outline-none '
                      key={id}
                    >
                      <span className='flex items-center '>
                        <span className='text-sm font-medium'>
                          <symb className='font-bold mr-2 block verflow-ellipsis overflow-hidden w-42'>
                            {name}{' '}
                          </symb>
                          <div className='overflow-ellipsis overflow-hidden w-52'>
                            {conditionName}
                          </div>
                          <div className='overflow-ellipsis overflow-hidden text-xs w-52'>
                            {alertType}
                          </div>
                          {expiryDate > newDate.getTime ? (
                            <span className='text-xs text-red-500'>
                              {' '}
                              Deactive
                            </span>
                          ) : (
                            <span className='text-xs text-green-500'>
                              {' '}
                              Active
                            </span>
                          )}
                          {!isActive ? (
                            <span className='text-xs text-green-500'>
                              {' '}
                              Active
                            </span>
                          ) : (
                            <span className='text-xs text-red-500'>
                              {' '}
                              Deactive
                            </span>
                          )}
                        </span>

                        <button className='absolute right-2 bottom-2 '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-pencil'
                            viewBox='0 0 16 16'
                            className='h-3 w-3 edit-icon'
                            onClick={() => {
                              dispatch(getId({ id: id }))
                              CAddAlerts()
                              openTModal()
                            }}
                          >
                            <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
                          </svg>
                        </button>
                        <button
                          className='absolute right-2 top-0 close-icon'
                          aria-label='Close'
                          onClick={() => {
                            let access_token =
                              'Bearer ' + login.data.access_token
                            axios
                              .delete('https://api.arzwatch.com/api/v1/Alert', {
                                headers: {
                                  Authorization: access_token,
                                },
                                data: { id: Item.data[index].id },
                              })
                              .then(() => {
                                console.log('deleted')
                                dispatch(trigger(!AlertId.reRender))
                              })
                              .catch((error) => {
                                console.log(error.message)
                                return Promise.reject({})
                              })
                          }}
                        >
                          <span aria-hidden='true' className='text-2xl'>
                            &times;
                          </span>
                        </button>
                      </span>
                      {Item.data[index].isActive ? (
                        <button
                          className='absolute right-8 bottom-1.5  h-4 w-4'
                          onClick={() => {
                            let items = [...Item.data]
                            let item = { ...items[index] }
                            item.isActive = false
                            items[index] = item
                            setItem({ data: items })
                            let access_token =
                              'Bearer ' + login.data.access_token
                            axios
                              .put(
                                'https://api.arzwatch.com/api/v1/Alert/ChangeStatus',
                                {
                                  id: Item.data[index].id,
                                  isActive: item.isActive,
                                },
                                {
                                  headers: {
                                    Authorization: access_token,
                                  },
                                }
                              )
                              .then(() => {
                                console.log('active')
                              })
                              .catch((error) => {
                                console.log(error.message)
                                return Promise.reject({})
                              })
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-play-circle'
                            viewBox='0 0 16 16'
                            className='h-4 w-4 start-icon'
                          >
                            <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                            <path d='M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z' />
                          </svg>
                        </button>
                      ) : (
                        <button
                          className='absolute right-8 bottom-1.5  h-4 w-4'
                          onClick={() => {
                            let items = [...Item.data]
                            let item = { ...items[index] }
                            item.isActive = true
                            items[index] = item
                            setItem({ data: items })
                            let access_token =
                              'Bearer ' + login.data.access_token
                            axios
                              .put(
                                'https://api.arzwatch.com/api/v1/Alert/ChangeStatus',
                                {
                                  id: Item.data[index].id,
                                  isActive: item.isActive,
                                },
                                {
                                  headers: {
                                    Authorization: access_token,
                                  },
                                }
                              )
                              .then(() => {
                                console.log('deactive')
                              })
                              .catch((error) => {
                                console.log(error.message)
                                return Promise.reject({})
                              })
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-pause-circle'
                            viewBox='0 0 16 16'
                          >
                            <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                            <path d='M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z' />
                          </svg>
                        </button>
                      )}
                    </span>
                  )
                })
              : null}

            <AlertWithHover />
          </div>
        </nav>
        <nav className='w-full h-1/2 block'>
          <button className='w-full bg-white border-t flex justify-between items-center py-4 px-3 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'>
            <span className='flex items-center'>
              <span className=' font-medium'>Alert Log</span>
            </span>

            <span>
              <svg
                focusable='false'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-5 h-5'
              >
                <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
              </svg>
            </span>
          </button>
        </nav>
      </>
    )
  } else {
    return (
      <>
        <div className='w-full h-full flex bg-gray-50 item-center justify-center'>
          <div className='h-16 w-16 my-auto'>
            <Puff />
          </div>
        </div>
      </>
    )
  }
}

export default Alert
