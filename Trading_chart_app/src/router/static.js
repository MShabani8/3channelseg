import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Puff, Bars } from '@agney/react-loading'
import { useGlobalContext } from './context'
import { Listbox, Transition } from '@headlessui/react'
import { exchangs, timeframe, SignalSort } from '../FrontData'
import Select from '../components/Select/Select'
import IModal from '../components/Assistant/Modal'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { logOut, loginUser } from '../features/Login'
import { current } from '../features/ToolBox'
import NativeSelect from '@mui/material/NativeSelect'
import { setCols } from '../features/Static'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ToolBoxComponent from '../components/ToolBox'
import InfiniteScroll from 'react-infinite-scroll-component'
import Box from '@mui/material/Box'
import { ContextMenuTrigger, ContextMenu } from 'react-contextmenu-lite'
import { setReRender } from '../features/reRenders'
import defaultpng from '../coins/default.png'
import axios from 'axios'
import { TVChartContainer } from '../charts/charts'
import _ from 'lodash'
import Modal from '@mui/material/Modal'

let useClickOutside = (handler) => {
  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode?.current?.contains(event.target) && false) {
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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

const Static = (props) => {
  setTimeout(() => {
    console.clear()
  }, 5000)
  const SignalSearch = useRef('')

  const isInitial = useRef(false)
  const scrollSize = useRef(0)
  useEffect(() => {
    isInitial.current = true
  }, [])
  const login = useSelector((state) => state.login.value)
  const dispatch = useDispatch()
  const [cookies, setCookie] = useCookies(['AX01', 'AX02'])

  const Changer = (props, func) => {
    func(props)
  }

  const FilterItems = (props) => {
    const Static = useSelector((state) => state.Static.value)

    const [checked, setChecked] = useState(
      Static.data.columnsConfigs.find(
        (element) => element.strategyColumnId == props.id
      )
    )

    const Configs = {
      strategyColumnId: props.id,
      passedCandleSearch: { max: null, min: null },
      distanceSearch: { max: null, min: null },
    }

    return (
      <label className=' inline-flex items-center my-1 py-1.5'>
        {login.data.claimType.find((element) => element == props.claimType) ? (
          <input
            type='checkbox'
            className='form-checkbox h-4 w-4 text-blue-500'
            checked={checked}
            onChange={() => {
              setChecked(!checked)
              if (!checked) {
                let data = Static.data.columnsConfigs
                data = [...Static.data.columnsConfigs, Configs]
                dispatch(setCols({ ...Static.data, columnsConfigs: data }))
              } else {
                let data = Static.data.columnsConfigs
                data = data.filter(
                  (item) => item.strategyColumnId != Configs.strategyColumnId
                )
                dispatch(setCols({ ...Static.data, columnsConfigs: data }))
              }
            }}
          />
        ) : (
          <input
            type='checkbox'
            className={'form-checkbox h-5 w-5 text-blue-500 bg-gray-200'}
            checked={false}
          />
        )}

        <span
          className={
            login.data.claimType.find((element) => element == props.claimType)
              ? 'ml-3 flex align-center'
              : 'ml-3 flex align-center text-gray-500'
          }
        >
          {props.columnName}
        </span>
      </label>
    )
  }

  const CBContent = () => {
    const [comboBoxData, setComboBoxData] = useState(null)
    const [AccessUp, setAccessUp] = useState(false)

    const Static = useSelector((state) => state.Static.value)

    useEffect(() => {
      let access_token = 'Bearer ' + cookies.AX01
      axios
        .get(
          'https://api.arzwatch.com/api/v1/StaticStrategySetup/ComboBox?Market=Crypto',
          {
            headers: {
              Authorization: access_token,
            },
          }
        )
        .then((res) => {
          setComboBoxData(res.data.data)
        })
        .catch((error) => {
          return Promise.reject({})
        })
    }, [])
    useEffect(() => {
      if (isInitial.current) {
        isInitial.current = false
      } else {
        setAccessUp(true)
      }
    }, [Static.data])
    const [Id, setId] = useState(null)

    const [SModal, setSModal] = useState(false)
    const [SName, setSName] = useState(null)
    const handleSOpen = () => setSModal(true)
    const handleSClose = () => setSModal(false)
    const [DModal, setDModal] = useState(false)
    const [Delete, setDelete] = useState(null)

    const handleDOpen = () => setDModal(true)
    const handleDClose = () => setDModal(false)
    const CBdomNode1 = useRef()
    const CBdomNode = useRef()
    const [CBDropdown, setCBDropdown] = useState(false)
    if (comboBoxData) {
      return (
        <>
          <Modal
            open={DModal}
            onClose={handleDClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style} className='relative h-32'>
              <h3>Delete this column?</h3>
              <button
                className='px-6 py-2 rounded-md leading-5 transition-colors duration-200 transform  hover:from-blue-600 hover:to-blue-600 border border-blue-400  hover:shadow-lg focus:outline-none absolute left-5 bottom-4 text-sm'
                onClick={() => {
                  handleDClose()
                }}
              >
                Cancel
              </button>
              <button
                className='px-6 py-2 text-white rounded-md border border-red-400 leading-5 transition-colors duration-200 transform bg-gradient-to-r from-red-400 to-red-500 hover:from-red-600 hover:to-red-600  hover:shadow-lg focus:outline-none absolute right-5 bottom-4'
                onClick={() => {
                  let access_token = 'Bearer ' + login.data.access_token
                  axios
                    .delete(
                      'https://api.arzwatch.com/api/v1/StaticStrategySetup',
                      {
                        headers: {
                          Authorization: access_token,
                        },
                        data: { id: Delete },
                      }
                    )
                    .then(() => {
                      axios
                        .get(
                          'https://api.arzwatch.com/api/v1/StaticStrategySetup/ComboBox?Market=Crypto',
                          {
                            headers: {
                              Authorization: access_token,
                            },
                          }
                        )
                        .then((res) => {
                          setComboBoxData(res.data.data)
                        })
                        .catch((error) => {
                          return Promise.reject({})
                        })
                    })
                    .catch((error) => {
                      console.log(error.message)
                      return Promise.reject({})
                    })
                  handleDClose()
                }}
              >
                Delete
              </button>
            </Box>
          </Modal>
          <Modal
            open={SModal}
            onClose={() => {
              handleSClose()
            }}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style} className='relative h-44'>
              <input
                type='text'
                name='name'
                autocomplete='off'
                placeholder='name'
                required
                className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  focus:border-blue-600 border-blue-300'
                onChange={(event) => {
                  setSName(event.target.value)
                }}
              />
              <label
                for='name'
                className='absolute duration-300 top-3 text-gray-400 -z-1 origin-0 '
              ></label>
              <button
                className='px-6 py-2 rounded-md leading-5 transition-colors duration-200 transform  hover:from-blue-600 hover:to-blue-600 border border-blue-400  hover:shadow-lg focus:outline-none absolute left-5 bottom-4 text-sm'
                onClick={() => {
                  handleSClose()
                }}
              >
                Cancel
              </button>
              <button
                className='px-6 py-2 text-white rounded-md border border-blue-400 leading-5 transition-colors duration-200 transform bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600  hover:shadow-lg focus:outline-none absolute right-5 bottom-4'
                onClick={() => {
                  let access_token = 'Bearer ' + login.data.access_token
                  let data = {
                    market: Static.data.market,
                    exchanges: Static.data.exchanges,
                    timeFrame: Static.data.timeFrame,
                    watchListId: null,
                    columnsConfigs: Static.data.columnsConfigs,
                    name: SName,
                  }
                  if (SName != null) {
                    dispatch(setCols({ ...Static.data, name: SName }))
                    axios
                      .post(
                        'https://api.arzwatch.com/api/v1/StaticStrategySetup',
                        data,
                        {
                          headers: {
                            Authorization: access_token,
                          },
                        }
                      )
                      .then(() => {
                        axios
                          .get(
                            'https://api.arzwatch.com/api/v1/StaticStrategySetup/ComboBox?Market=Crypto',
                            {
                              headers: {
                                Authorization: access_token,
                              },
                            }
                          )
                          .then((res) => {
                            setComboBoxData(res.data.data)
                            setId(
                              res.data.data.find(
                                (element) => element.name == SName
                              ).id
                            )
                          })
                          .catch((error) => {
                            return Promise.reject({})
                          })
                      })
                      .catch((error) => {
                        console.log(error.message)
                        return Promise.reject({})
                      })
                  }
                  handleSClose()
                  isInitial.current = true
                  setAccessUp(false)
                }}
              >
                Save
              </button>
            </Box>
          </Modal>
          <span className='block my-auto ml-3'>
            <button
              className='border border-blue-500 bg-gradient-to-r from-gray-100 to-gray-100 hover:from-gray-300 hover:to-gray-300 rounded-xs px-3 py-1.5 shadow text-bold flex'
              ref={CBdomNode}
              onClick={() => {
                OpenOnChange(CBdomNode, CBdomNode1, setCBDropdown, CBDropdown)
              }}
            >
              {Static.data.name}
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

            <Transition
              show={CBDropdown}
              leave='transition duration-150 ease-in'
              leaveFrom='transform opacity-100'
              leaveTo='transform opacity-0'
              id='journal-scroll'
            >
              <div
                className={
                  'block overflow-auto max-h-52 dropdown-content w-48 rounded-lg border align-middle z-50'
                }
                id='journal-scroll'
                ref={CBdomNode1}
              >
                <div className='h-full block align-middle'>
                  <button
                    className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
                    onClick={() => {
                      setCBDropdown(false)
                      axios
                        .get(
                          'https://api.arzwatch.com/api/v1/StrategyColumn/Default?Type=TrendFollowing'
                        )
                        .then((res) => {
                          let data = []
                          res.data.data.map((item) => {
                            data = [
                              ...data,
                              {
                                strategyColumnId: item,
                                passedCandleSearch: { max: null, min: null },
                                distanceSearch: { max: null, min: null },
                              },
                            ]
                          })
                          dispatch(
                            setCols({
                              ...Static.data,
                              columnsConfigs: data,
                              sort: 'Asc',
                              name: 'Trend-Following',
                            })
                          )
                        })
                        .catch((error) => {
                          console.log(error.message)
                          if (error.message.includes('401')) {
                            let access_token =
                              'Bearer ' + login.data.access_token
                            axios
                              .post(
                                'https://api.arzwatch.com/api/v1/Account/RefreshToken',
                                {
                                  access_token: access_token,
                                  refresh_token: login.data.refresh_token,
                                  token_type: login.data.token_type,
                                }
                              )
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
                      isInitial.current = true
                      setAccessUp(false)
                      setId(null)
                    }}
                  >
                    <span className='flex items-center'>
                      <span className='mx-2 font-medium text-sm flex overflow-ellipsis overflow-hidden whitespace-nowrap w-40'>
                        Trend-Following
                      </span>
                    </span>
                  </button>
                  <button
                    className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
                    onClick={() => {
                      setCBDropdown(false)
                      axios
                        .get(
                          'https://api.arzwatch.com/api/v1/StrategyColumn/Default?Type=Oscillators'
                        )
                        .then((res) => {
                          let data = []
                          res.data.data.map((item) => {
                            data = [
                              ...data,
                              {
                                strategyColumnId: item,
                                passedCandleSearch: { max: null, min: null },
                                distanceSearch: { max: null, min: null },
                              },
                            ]
                          })
                          dispatch(
                            setCols({
                              ...Static.data,
                              columnsConfigs: data,
                              sort: 'Asc',
                              name: 'Oscillators',
                            })
                          )
                        })
                        .catch((error) => {
                          console.log(error.message)
                          if (error.message.includes('401')) {
                            let access_token =
                              'Bearer ' + login.data.access_token
                            axios
                              .post(
                                'https://api.arzwatch.com/api/v1/Account/RefreshToken',
                                {
                                  access_token: access_token,
                                  refresh_token: login.data.refresh_token,
                                  token_type: login.data.token_type,
                                }
                              )
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
                      isInitial.current = true
                      setAccessUp(false)
                      setId(null)
                    }}
                  >
                    <span className='flex items-center'>
                      <span className='mx-2 font-medium text-sm flex overflow-ellipsis overflow-hidden whitespace-nowrap w-40'>
                        Oscillators
                      </span>
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setCBDropdown(false)
                      handleSOpen()
                    }}
                    className='w-full flex justify-between items-center border-t border-b py-3 pr-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
                  >
                    <span className='flex items-center'>
                      <span className='mx-2 font-medium flex text-sm overflow-ellipsis overflow-hidden whitespace-nowrap w-42'>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            class='bi bi-download'
                            viewBox='0 0 16 16'
                            className='mr-1.5 ml-1'
                          >
                            <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
                            <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z' />
                          </svg>
                        </span>
                        Save as new column
                      </span>
                    </span>
                  </button>
                  {comboBoxData
                    ? comboBoxData.map((item) => {
                        const { id, name } = item
                        return (
                          <button
                            className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
                            key={id}
                          >
                            <span className='flex items-center relative w-full'>
                              <button
                                className='mx-2 text-sm flex w-3/4 overflow-ellipsis overflow-hidden whitespace-nowrap w-40'
                                onClick={() => {
                                  isInitial.current = true
                                  setAccessUp(false)
                                  let access_token =
                                    'Bearer ' + login.data.access_token
                                  let queryStr = '?Id=' + id
                                  setCBDropdown(false)
                                  axios
                                    .get(
                                      'https://api.arzwatch.com/api/v1/StaticStrategySetup' +
                                        queryStr,
                                      {
                                        headers: {
                                          Authorization: access_token,
                                        },
                                      }
                                    )
                                    .then((res) => {
                                      dispatch(
                                        setCols({
                                          ...res.data.data,
                                          sort: 'Asc',
                                          name: name,
                                        })
                                      )
                                    })
                                    .catch((error) => {
                                      console.log(error.message)
                                      if (error.message.includes('401')) {
                                        let access_token =
                                          'Bearer ' + login.data.access_token
                                        axios
                                          .post(
                                            'https://api.arzwatch.com/api/v1/Account/RefreshToken',
                                            {
                                              access_token: access_token,
                                              refresh_token:
                                                login.data.refresh_token,
                                              token_type: login.data.token_type,
                                            }
                                          )
                                          .then((res) => {
                                            dispatch(
                                              loginUser({
                                                access_token:
                                                  res.data.access_token,
                                                refresh_token:
                                                  res.data.refresh_token,
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
                                  setId(id)
                                }}
                              >
                                {name}
                              </button>
                              <button
                                className='absolute right-2 text-red-600'
                                onClick={() => {
                                  setDelete(id)
                                  handleDOpen()
                                }}
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='16'
                                  height='16'
                                  fill='currentColor'
                                  class='bi bi-trash'
                                  viewBox='0 0 16 16'
                                >
                                  <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                                  <path
                                    fill-rule='evenodd'
                                    d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                                  />
                                </svg>
                              </button>
                            </span>
                          </button>
                        )
                      })
                    : null}
                </div>
              </div>
            </Transition>
          </span>
          <span className='block my-auto ml-3'>
            <button
              className={
                AccessUp
                  ? 'border border-blue-500 bg-gradient-to-r from-gray-100 to-gray-100 hover:from-gray-300 hover:to-gray-300 rounded-lg px-2 py-2 shadow text-bold '
                  : 'border border-gray-500 bg-gradient-to-r from-gray-200 to-gray-200 rounded-lg px-2 py-2 shadow text-bold text-gray-400 cursor-default'
              }
              disabled={!AccessUp}
              onClick={() => {
                let access_token = 'Bearer ' + login.data.access_token
                if (Id != null) {
                  let data = {
                    columnsConfigs: Static.data.columnsConfigs,
                    exchanges: Static.data.exchanges,
                    id: Static.data.id,
                    market: Static.data.market,
                    timeFrame: Static.data.timeFrame,
                    userId: Static.data.userId,
                    name: Static.data.name,
                  }

                  axios
                    .put(
                      'https://api.arzwatch.com/api/v1/StaticStrategySetup',
                      { ...data, id: Id },
                      {
                        headers: {
                          Authorization: access_token,
                        },
                      }
                    )
                    .then(() => {
                      console.log('success')
                      setAccessUp(false)
                    })
                    .catch((error) => {
                      console.log(error.message)
                      return Promise.reject({})
                    })
                } else handleSOpen()
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                class='bi bi-download'
                viewBox='0 0 16 16'
              >
                <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
                <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z' />
              </svg>
            </button>
          </span>
        </>
      )
    } else return <></>
  }

  const FilterDotContent = () => {
    const [FilterDot, setFilterDot] = useState(false)
    const FilterDotTop = useRef()
    const FilterDotTop1 = useRef()
    const [FilterTop, setFilterTop] = useState(false)
    const [Columns, setColumns] = useState(null)

    return (
      <span className='block my-auto ml-3'>
        <button
          className=' border border-blue-500 bg-gradient-to-r from-gray-100 to-gray-100 hover:from-gray-300 hover:to-gray-300 rounded-xs px-1 py-2 shadow text-bold '
          ref={FilterDotTop}
          onClick={() => {
            OpenOnChange(FilterDotTop, FilterDotTop1, setFilterTop, FilterTop)
            if (!FilterDot)
              axios
                .get('https://api.arzwatch.com/api/v1/StrategyColumn/Columns')
                .then((res) => {
                  console.log('success')
                  let Groups = _.groupBy(res.data.data, 'group')
                  setColumns(Groups)
                })
                .catch((error) => {
                  console.log(error.message)
                  if (error.message.includes('401')) {
                    let access_token = 'Bearer ' + login.data.access_token
                    axios
                      .post(
                        'https://api.arzwatch.com/api/v1/Account/RefreshToken',
                        {
                          access_token: access_token,
                          refresh_token: login.data.refresh_token,
                          token_type: login.data.token_type,
                        }
                      )
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
          }}
        >
          <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='h-5 justify-center mx-auto py-auto'
          >
            <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
          </svg>
        </button>
        <Transition
          show={FilterTop}
          leave='transition duration-150 ease-in'
          leaveFrom='transform opacity-100'
          leaveTo='transform opacity-0'
          id='journal-scroll'
        >
          <Box
            className={
              'block z-50 bg-white text-right w-56 shadow-md h-80 rounded-lg border align-middle z-50 dropdown-content'
            }
            ref={FilterDotTop1}
          >
            <div className='bg-white py-2 border-b h-14 sticky top-0'>
              <div className='flex items-center border my-1 border-gray-400 rounded-xl whitespace-nowrap place-self-end mx-2 '>
                <button className='searchbox text-center align-middle whitespace-nowrap'>
                  <svg
                    className=' ml-2 mr-0 mb-1 py-auto whitespace-nowrap'
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 16 16'
                  >
                    <g fill='none' fill-rule='evenodd' stroke='currentColor'>
                      <circle cx='7.5' cy='7.5' r='6'></circle>
                      <path d='M11.5 11.5L15 15'></path>
                    </g>
                  </svg>
                </button>
                <input
                  className='border-0 h-7 focus:ring-0 border-green-200 py-1 w-36 whitespace-nowrap'
                  type='text'
                  placeholder='search Filters'
                  onChange={(event) => {
                    let queryStr = '?Search=' + event.target.value
                    axios
                      .get(
                        'https://api.arzwatch.com/api/v1/StrategyColumn/Columns' +
                          queryStr
                      )
                      .then((res) => {
                        let Groups = _.groupBy(res.data.data, 'group')
                        setColumns(Groups)
                      })
                      .catch((error) => {
                        console.log(error.message)
                        if (error.message.includes('401')) {
                          let access_token = 'Bearer ' + login.data.access_token
                          axios
                            .post(
                              'https://api.arzwatch.com/api/v1/Account/RefreshToken',
                              {
                                access_token: access_token,
                                refresh_token: login.data.refresh_token,
                                token_type: login.data.token_type,
                              }
                            )
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
                  }}
                />
              </div>
            </div>
            <div
              className=' w-full pt-1 h-64 text-left px-3 gap-3 overflow-auto text-gray-600 text-xs font-bold'
              id='journal-scroll'
            >
              <div>
                {Columns
                  ? Object.keys(Columns).map((key, index) => {
                      return (
                        <>
                          <div className='mb-2 mt-1 text-sm font-bold'>
                            {Object.keys(Columns)[index]}
                          </div>
                          {Columns[key].map((strategy) => {
                            return (
                              <>
                                <FilterItems
                                  columnName={strategy.columnName}
                                  id={strategy.id}
                                  claimType={strategy.claimType}
                                />
                              </>
                            )
                          })}
                        </>
                      )
                    })
                  : null}
              </div>
            </div>
          </Box>
        </Transition>
      </span>
    )
  }

  const FilterDotContent2 = () => {
    const Static = useSelector((state) => state.Static.value)
    const AConfigs = useRef({
      columnsConfigs: Static.data.columnsConfigs,
    })

    const [FilterDot, setFilterDot] = useState(false)
    const FilterDotNode = useRef()
    const FilterDotNode1 = useRef()
    const [Columns, setColumns] = useState(null)
    return (
      <>
        <button
          className='w-full h-full'
          ref={FilterDotNode}
          onClick={() => {
            OpenOnChange(FilterDotNode, FilterDotNode1, setFilterDot, FilterDot)
            if (!FilterDot)
              axios
                .get('https://api.arzwatch.com/api/v1/StrategyColumn/Columns')
                .then((res) => {
                  let Groups = _.groupBy(res.data.data, 'group')
                  setColumns(Groups)
                })
                .catch((error) => {
                  console.log(error.message)
                  if (error.message.includes('401')) {
                    let access_token = 'Bearer ' + login.data.access_token
                    axios
                      .post(
                        'https://api.arzwatch.com/api/v1/Account/RefreshToken',
                        {
                          access_token: access_token,
                          refresh_token: login.data.refresh_token,
                          token_type: login.data.token_type,
                        }
                      )
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
          }}
        >
          <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='h-5 justify-center mx-auto py-auto'
          >
            <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
          </svg>
        </button>
        <Transition
          show={FilterDot}
          leave='transition duration-150 ease-in'
          leaveFrom='transform opacity-100'
          leaveTo='transform opacity-0'
          id='journal-scroll'
        >
          <Box
            className={
              'top-0 right-25 block absolute top-12 right-0 z-50 bg-white overflow-auto text-right w-56 shadow-md FilterDotH rounded-lg border align-middle z-50 '
            }
            id='journal-scroll'
            ref={FilterDotNode1}
          >
            <div className='bg-white py-2 border-b h-14 sticky top-0'>
              <div className='flex items-center border my-1 border-gray-400 rounded-xl whitespace-nowrap place-self-end mx-2 '>
                <button className='searchbox text-center align-middle whitespace-nowrap'>
                  <svg
                    className=' ml-2 mr-0 mb-1 py-auto whitespace-nowrap'
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 16 16'
                  >
                    <g fill='none' fill-rule='evenodd' stroke='currentColor'>
                      <circle cx='7.5' cy='7.5' r='6'></circle>
                      <path d='M11.5 11.5L15 15'></path>
                    </g>
                  </svg>
                </button>
                <input
                  className='border-0 h-7 focus:ring-0 border-green-200 py-1 w-36 whitespace-nowrap'
                  type='text'
                  placeholder='search Filters'
                  onChange={(event) => {
                    let queryStr = '?Search=' + event.target.value
                    axios
                      .get(
                        'https://api.arzwatch.com/api/v1/StrategyColumn/Columns' +
                          queryStr
                      )
                      .then((res) => {
                        let Groups = _.groupBy(res.data.data, 'group')
                        setColumns(Groups)
                      })
                      .catch((error) => {
                        console.log(error.message)
                        if (error.message.includes('401')) {
                          let access_token = 'Bearer ' + login.data.access_token
                          axios
                            .post(
                              'https://api.arzwatch.com/api/v1/Account/RefreshToken',
                              {
                                access_token: access_token,
                                refresh_token: login.data.refresh_token,
                                token_type: login.data.token_type,
                              }
                            )
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
                  }}
                />
              </div>
            </div>
            <div
              className=' w-full pt-1 h-64 text-left px-3 gap-3 overflow-auto'
              id='journal-scroll'
            >
              <div>
                {Columns
                  ? Object.keys(Columns).map((key, index) => {
                      return (
                        <>
                          <div className='mb-2 mt-1 text-sm font-bold'>
                            {Object.keys(Columns)[index]}
                          </div>
                          {Columns[key].map((strategy) => {
                            return (
                              <>
                                <FilterItems
                                  columnName={strategy.columnName}
                                  id={strategy.id}
                                  claimType={strategy.claimType}
                                />
                              </>
                            )
                          })}
                        </>
                      )
                    })
                  : null}
              </div>
            </div>
          </Box>
        </Transition>
      </>
    )
  }

  const ExchangeContent = (props) => {
    const Static = useSelector((state) => state.Static.value)
    const AConfigs = useRef({
      columnsConfigs: Static.data.columnsConfigs,
    })
    const ESelected = useRef(Static.data.exchanges)

    const ExchangeBoxNode = useRef()
    const ExchangeBoxNode1 = useRef()
    const [ExchangeBox, setExchangeBox] = useState(false)
    return (
      <div className={props.className}>
        <span className='inline-block w-full rounded-md shadow-sm'>
          <button
            className='rounded-md cursor-default relative w-full border border-blue-500 bg-white pl-2 pr-8 py-1.5 text-left  transition ease-in-out duration-150'
            ref={ExchangeBoxNode}
            onClick={() => {
              OpenOnChange(
                ExchangeBoxNode,
                ExchangeBoxNode1,
                setExchangeBox,
                ExchangeBox
              )
            }}
          >
            <span className='block truncate h-6'>Exchanges</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none'>
              <svg
                className='h-5 w-5 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
                id='journal-scroll'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </button>
        </span>

        <Transition
          show={ExchangeBox}
          leave='transition duration-150 ease-in'
          leaveFrom='transform opacity-100'
          leaveTo='transform opacity-0'
          id='journal-scroll'
        >
          <div
            className={
              'block overflow-auto max-h-52 dropdown-content w-48 rounded-lg border align-middle z-50'
            }
            id='journal-scroll'
            ref={ExchangeBoxNode1}
          >
            <div className='h-full block align-middle'>
              {exchangs.map((item) => {
                const { id, label, value } = item
                if (Static.data.exchanges.find((element) => element == value))
                  return (
                    <button
                      className='w-full flex justify-between items-center border-b py-3 px-2 cursor-pointer bg-blue-600 hover:bg-blue-700 focus:outline-none '
                      key={id}
                      onClick={() => {
                        let data = ESelected.current
                        data = data.filter((item) => item != value)
                        dispatch(setCols({ ...Static.data, exchanges: data }))
                        ESelected.current = data
                      }}
                    >
                      <span className='flex items-center'>
                        <span className='mx-2 text-sm text-white flex overflow-ellipsis overflow-hidden whitespace-nowrap w-40 relative'>
                          {label}
                          <svg
                            className='h-5 w-5 absolute right-0'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            id='journal-scroll'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            />
                          </svg>
                        </span>
                      </span>
                    </button>
                  )
                else
                  return (
                    <button
                      className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none '
                      key={id}
                      onClick={() => {
                        let data = ESelected.current
                        data = [...data, value]
                        dispatch(setCols({ ...Static.data, exchanges: data }))
                        ESelected.current = data
                      }}
                    >
                      <span className='flex items-center'>
                        <span className='mx-2 text-sm flex overflow-ellipsis overflow-hidden whitespace-nowrap w-40 relative'>
                          {label}
                        </span>
                      </span>
                    </button>
                  )
              })}
            </div>
          </div>
        </Transition>
      </div>
    )
  }

  const FilterContent = (props) => {
    const [open, isOpen] = useState(false)
    const { isModalOpen, closeModal, openModal } = useGlobalContext()
    const MyModal = () => {
      return (
        <Modal
          className={'modal-overlay show-modal z-50'}
          open={open}
          onClose={() => isOpen(false)}
        >
          <Box>
            <IModal onClose={() => isOpen(false)} />
          </Box>
        </Modal>
      )
    }

    return (
      <>
        <MyModal />
        <button
          className={props.className}
          onClick={() => {
            isOpen(true)
          }}
        >
          <span className='flex mx-2'>
            <button className='searchbox text-center align-middle'>
              <svg
                focusable='false'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-5 w-5 mr-1 py-auto px-auto '
              >
                <path d='M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z'></path>
                <circle cx='12' cy='12' r='3.5'></circle>
              </svg>
            </button>
            <div className='focus:ring-0 border-green-200 '>Filters</div>
          </span>
        </button>
      </>
    )
  }

  const MiniSelect = () => {
    const Static = useSelector((state) => state.Static.value)
    let data = timeframe[1]
    if (timeframe.find((element) => element.value == Static.data.timeFrame))
      data = timeframe.find((element) => element.value == Static.data.timeFrame)

    return (
      <>
        <Select
          className='w-32'
          options={timeframe}
          selectedOption={data}
          handelChange={(event) => {
            dispatch(setCols({ ...Static.data, timeFrame: event.value }))
          }}
        />
      </>
    )
  }

  const SortSelect = () => {
    const Static = useSelector((state) => state.Static.value)
    let data = SignalSort[1]
    if (SignalSort.find((element) => element.value == Static.data.sort))
      data = SignalSort.find((element) => element.value == Static.data.sort)

    return (
      <>
        <Select
          className='w-32'
          options={SignalSort}
          selectedOption={data}
          handelChange={(event) => {
            dispatch(setCols({ ...Static.data, sort: event.value }))
          }}
        />
      </>
    )
  }

  const Gap = () => {
    const ToolBox = useSelector((state) => state.ToolBox.value)
    if (ToolBox.data.isOpen && ToolBox.data.ToolBox)
      return (
        <>
          <div className='flex'>
            <div className='w-72'></div>
          </div>
        </>
      )
    else if (ToolBox.data.isOpen && !ToolBox.data.ToolBox)
      return (
        <>
          <div className='flex'>
            <div className='w-16'></div>
          </div>
        </>
      )
    else return <></>
  }

  const HeadTable = () => {
    const [selectedSort, setSelectedSort] = useState(null)
    const [ColIdName, setColIdName] = useState(null)
    useEffect(() => {
      setTimeout(() => {
        axios
          .get('https://api.arzwatch.com/api/v1/StrategyColumn/Columns')
          .then((res) => {
            setColIdName(_.groupBy(res.data.data, 'id'))
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
      }, 100)
    }, [])
    const Static = useSelector((state) => state.Static.value)
    if (ColIdName != null)
      return (
        <>
          <thead className='mySticky w-full flex z-10 w-auto h-12'>
            <tr
              className={
                'bg-gray-200 text-gray-600 tablefont flex leading-normal w-full '
              }
            >
              <th
                className={
                  selectedSort == -1 ? 'border-blue-500 border-b-4' : ''
                }
              >
                <div
                  className={
                    'pr-3 pl-6 h-full border border-white text-left w-56 md:w-80 flex py-1'
                  }
                >
                  <span
                    className='flex justify-self-start my-auto text-sm mr-auto'
                    onClick={() => {
                      if (selectedSort == -1) {
                        setSelectedSort(null)
                      } else {
                        setSelectedSort(-1)
                      }
                    }}
                  >
                    Ticker
                  </span>
                  <div className='flex my-auto py-auto items-center bg-gray-100 border border-gray-400 my-2  whitespace-nowrap place-self-end'>
                    <button className='searchbox text-center  align-middle whitespace-nowrap'>
                      <svg
                        className=' ml-2 mr-0 mb-1 py-auto whitespace-nowrap'
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 16 16'
                      >
                        <g
                          fill='none'
                          fill-rule='evenodd'
                          stroke='currentColor'
                        >
                          <circle cx='7.5' cy='7.5' r='6'></circle>
                          <path d='M11.5 11.5L15 15'></path>
                        </g>
                      </svg>
                    </button>
                    <input
                      className='border-0 h-7  focus:ring-0 bg-gray-100 border-green-200 py-1 w-20 md:w-40 whitespace-nowrap'
                      type='text'
                      placeholder='search coins'
                      onChange={(event) => {
                        SignalSearch.current = event.target.value
                        dispatch(setCols({ ...Static.data }))
                      }}
                    />
                  </div>
                </div>
              </th>

              {Static.data
                ? Static.data.columnsConfigs.map((item, index) => {
                    const { strategyColumnId } = item
                    return (
                      <th
                        className={
                          selectedSort == index
                            ? 'flex-grow border-blue-500 border-b-4'
                            : 'flex-grow '
                        }
                        onClick={() => {
                          if (selectedSort == index) {
                            setSelectedSort(null)
                          } else {
                            setSelectedSort(index)
                          }
                        }}
                      >
                        <div
                          className={
                            'w-full border border-white h-full text-center colmn-size'
                          }
                        >
                          <div className='tablefont mx-1 flex items-center text-center px-auto my-auto h-full py-auto '>
                            <div className='mx-auto px-1'>
                              {ColIdName[strategyColumnId][0].columnName}
                            </div>
                          </div>
                        </div>
                      </th>
                    )
                  })
                : null}

              <th className='relative border border-white text-center w-8 '>
                <FilterDotContent2 />
              </th>
            </tr>
            <Gap />
          </thead>
        </>
      )
    else return <></>
  }

  const WidthMaker = () => {
    const Width = useSelector((state) => state.reRender.value)
    class WidthComponent extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          width: Width.data.width,
        }
      }
      handleResizedScreen = () => {
        dispatch(
          setReRender({
            width: document.body.clientWidth,
          })
        )
      }
      componentDidMount() {
        window.addEventListener('resize', this.handleResizedScreen)
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizedScreen)
      }
      render() {
        return (
          <Box
            sx={{ width: Width.data.width + 'px' }}
            className='h-0.5 block'
          ></Box>
        )
      }
    }
    return (
      <>
        <WidthComponent />
      </>
    )
  }

  const Table = () => {
    const Static = useSelector((state) => state.Static.value)
    const [IsLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)
    const [PageNumber, setPageNumber] = useState(1)
    const [Signals, setSignals] = useState(null)
    const [ColIdName, setColIdName] = useState(null)
    const [CurrentDate, setCurrentDate] = useState(null)
    const [open, isOpen] = useState(false)
    const [MySignal, setMySignal] = useState(null)

    const HCModal = () => {
      return (
        <Modal
          className={'modal-overlay show-modal z-50'}
          open={open}
          onClose={() => isOpen(false)}
        >
          <div className='modal-container shadow-lg border z-50 block'>
            <TVChartContainer signal={MySignal} />
          </div>
        </Modal>
      )
    }
    useEffect(() => {
      setHasMore(true)
      setCurrentDate(new Date())
      setIsLoading(true)
      let access_token = 'Bearer ' + login.data.access_token
      let data = Static.data
      setPageNumber(1)

      axios
        .post(
          'https://api.arzwatch.com/api/v1/StrategySignal/Static',
          {
            ...data,
            pageSize: 1500,
            pageNumber: 1,
            search: SignalSearch.current,
          },
          {
            headers: {
              Authorization: access_token,
            },
          }
        )
        .then((res) => {
          if (_.size(res.data.data) != 1500) setHasMore(false)
          let SymbGroups = _.groupBy(res.data.data, 'symbol')
          Object.keys(SymbGroups).map((key, index) => {
            SymbGroups[key] = _.groupBy(SymbGroups[key], 'exchange')
          })
          setSignals(SymbGroups)
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
        })
        .catch((error) => {
          console.log(error.message)
          return Promise.reject({})
        })
    }, [Static.data])
    useEffect(() => {
      setTimeout(() => {
        setCurrentDate(new Date())
        axios
          .get('https://api.arzwatch.com/api/v1/StrategyColumn/Columns')
          .then((res) => {
            setColIdName(_.groupBy(res.data.data, 'id'))
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
      }, 100)
    }, [])
    const loadMore = () => {
      let access_token = 'Bearer ' + login.data.access_token
      let data = Static.data
      if (hasMore) {
        axios
          .post(
            'https://api.arzwatch.com/api/v1/StrategySignal/Static',
            {
              ...data,
              pageSize: 1500,
              pageNumber: PageNumber + 1,
              search: '',
            },
            {
              headers: {
                Authorization: access_token,
              },
            }
          )
          .then((res) => {
            setPageNumber(PageNumber + 1)
            if (_.size(res.data.data) != 1500) setHasMore(false)
            let SymbGroups = _.groupBy(res.data.data, 'symbol')
            Object.keys(SymbGroups).map((key, index) => {
              SymbGroups[key] = _.groupBy(SymbGroups[key], 'exchange')
            })

            setSignals({ ...Signals, ...SymbGroups })
            setIsLoading(false)
          })
          .catch((error) => {
            console.log(error.message)
            return Promise.reject({})
          })
      }
    }

    if (!IsLoading) {
      setTimeout(() => {
        dispatch(
          setReRender({
            width: document.body.clientWidth,
          })
        )
      }, 100)

      return (
        <>
          <HCModal />
          <table className='w-full pl-12'>
            <tbody className='text-gray-600 text-sm font-light'>
              <InfiniteScroll
                dataLength={PageNumber * 1500}
                hasMore={true}
                next={loadMore}
                loader={
                  <div className='flex w-full'>
                    {hasMore ? (
                      <div className='flex flex-wrap pl-4 mywidth lg:flex-nowrap mySticky'>
                        <div className='w-max flex my-auto item-center justify-center'>
                          <div className='h-20 w-20 my-auto mx-auto'>
                            <Puff />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                }
              >
                {Signals
                  ? Object.keys(Signals).map((key, index, item) => {
                      let name = key
                      let data = Signals[key]
                      let imagesSymb = name.split('-')
                      const tryRequire1 = () => {
                        try {
                          return require(`../../node_modules/cryptocurrency-icons/128/color/${imagesSymb[0].toLowerCase()}.png`)
                        } catch (err) {
                          return defaultpng
                        }
                      }
                      const tryRequire2 = () => {
                        try {
                          return require(`../../node_modules/cryptocurrency-icons/128/color/${imagesSymb[1].toLowerCase()}.png`)
                        } catch (err) {
                          return defaultpng
                        }
                      }

                      return Object.keys(Signals[key]).map(
                        (key, index, item) => {
                          return (
                            <>
                              <tr className='border-b border-gray-200 hover:bg-gray-100 flex '>
                                <td className='pl-6 py-3 text-left whitespace-nowrap w-56 md:w-80'>
                                  <div className='flex items-center '>
                                    <span className='w-11 h-9 mr-2 relative'>
                                      <img
                                        className='pair-image-1 rounded-full w-7 h-7 bg-gray-100'
                                        src={tryRequire1()}
                                        alt=''
                                      ></img>
                                      <img
                                        className='pair-image-2 rounded-full w-7 h-7 bg-gray-100'
                                        src={tryRequire2()}
                                        alt=''
                                      ></img>
                                    </span>
                                    <span className='font-medium'>
                                      {name}
                                      <span className='text-xs block text-gray-400'>
                                        {key}
                                      </span>
                                    </span>
                                  </div>
                                </td>
                                {Static.data
                                  ? Static.data.columnsConfigs.map(
                                      (item, index) => {
                                        const { strategyColumnId } = item
                                        if (
                                          data[key].find(
                                            (element) =>
                                              element.strategy_column_id ==
                                              strategyColumnId
                                          )
                                        ) {
                                          let strategyMatch = data[key].filter(
                                            (element) => {
                                              return (
                                                element.strategy_column_id ===
                                                strategyColumnId
                                              )
                                            }
                                          )
                                          let lastDateMatch =
                                            strategyMatch[0].match_time
                                          let isOld = false
                                          let DateDiff =
                                            CurrentDate -
                                            new Date(lastDateMatch)

                                          if (
                                            Static.data.timeFrame ==
                                            'FiveMinutes'
                                          ) {
                                            if (DateDiff - 6 * 60e3 > 0)
                                              isOld = true
                                          } else if (
                                            Static.data.timeFrame ==
                                            'FifteenMinutes'
                                          ) {
                                            if (DateDiff - 18 * 60e3 > 0)
                                              isOld = true
                                          } else if (
                                            Static.data.timeFrame == 'OneHour'
                                          ) {
                                            if (DateDiff - 4 * 3600e3 > 0)
                                              isOld = true
                                          } else if (
                                            Static.data.timeFrame == 'FourHour'
                                          ) {
                                            if (DateDiff - 16 * 3600e3 > 0)
                                              isOld = true
                                          } else {
                                            if (DateDiff - 3 * 86400e3 > 0)
                                              isOld = true
                                          }

                                          if (DateDiff > 86400e3)
                                            DateDiff =
                                              Math.floor(DateDiff / 86400e3) +
                                              ' day(s) ago'
                                          else if (DateDiff > 3600e3)
                                            DateDiff =
                                              Math.floor(DateDiff / 3600e3) +
                                              ' hour(s) ago'
                                          else if (DateDiff > 60e3)
                                            DateDiff =
                                              Math.floor(DateDiff / 60e3) +
                                              ' minute(s) ago'
                                          else
                                            DateDiff =
                                              Math.floor(DateDiff / 1e3) +
                                              ' second(s) ago'

                                          strategyMatch.map((element) => {
                                            if (
                                              element.match_time > lastDateMatch
                                            )
                                              lastDateMatch = element.match_time
                                          })

                                          if (
                                            ColIdName[
                                              strategyMatch[0]
                                                .strategy_column_id
                                            ][0].position == true
                                          ) {
                                            if (!isOld) {
                                              if (strategyMatch.length > 1)
                                                return (
                                                  <>
                                                    <td
                                                      className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                      onClick={() => {
                                                        setMySignal(
                                                          strategyMatch[0]
                                                        )

                                                        isOpen(true)
                                                      }}
                                                    >
                                                      <div className='flex items-center h-full relative'>
                                                        <div className='mx-auto flex item-center w-full absolute'>
                                                          <div className='mx-auto flex'>
                                                            <div className='h-10 flex relative w-8 item-center mx-auto px-auto'>
                                                              <span className='absolute top-0 text-gray-400'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                              <span className='absolute bottom-0 text-green-500'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                            </div>
                                                            <div className='flex item-center ml-1'>
                                                              <p className='my-auto text-left text-xs '>
                                                                <span className='font-extrabold text-green-500'>
                                                                  <div className='flex'>
                                                                    found +
                                                                  </div>
                                                                </span>
                                                                <span className='flex w-20'>
                                                                  <span>
                                                                    {DateDiff}
                                                                  </span>
                                                                </span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </td>
                                                  </>
                                                )
                                              else {
                                                return (
                                                  <>
                                                    <td
                                                      className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                      onClick={() => {
                                                        setMySignal(
                                                          strategyMatch[0]
                                                        )

                                                        isOpen(true)
                                                      }}
                                                    >
                                                      <div className='flex items-center h-full relative'>
                                                        <div className='mx-auto flex item-center w-full absolute'>
                                                          <div className='mx-auto flex'>
                                                            <div className='h-6 flex w-8 item-center mx-auto px-auto'>
                                                              <span className='absolute my-auto text-green-500'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                            </div>
                                                            <div className='flex item-center ml-1'>
                                                              <p className='my-auto text-left text-xs '>
                                                                <span className='font-extrabold text-green-500 '>
                                                                  <div className='flex '>
                                                                    found
                                                                  </div>
                                                                </span>
                                                                <span className='flex w-20'>
                                                                  <span>
                                                                    {DateDiff}
                                                                  </span>
                                                                </span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </td>
                                                  </>
                                                )
                                              }
                                            } else {
                                              return (
                                                <>
                                                  <td
                                                    className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                    onClick={() => {
                                                      setMySignal(
                                                        strategyMatch[0]
                                                      )

                                                      isOpen(true)
                                                    }}
                                                  >
                                                    <div className='flex items-center h-full relative'>
                                                      <div className='mx-auto flex item-center w-full absolute'>
                                                        <div className='mx-auto flex'>
                                                          <div className='h-6 flex w-8 item-center mx-auto px-auto'>
                                                            <span className='absolute my-auto text-gray-400'>
                                                              <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='30'
                                                                height='30'
                                                                fill='currentColor'
                                                                class='bi bi-check-lg'
                                                                viewBox='0 0 16 16'
                                                              >
                                                                <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                              </svg>
                                                            </span>
                                                          </div>
                                                          <div className='flex item-center ml-1'>
                                                            <p className='my-auto text-left text-xs '>
                                                              <span className='font-extrabold text-green-500 '>
                                                                <div className='flex '>
                                                                  found
                                                                </div>
                                                              </span>
                                                              <span className='flex w-20'>
                                                                <span>
                                                                  {DateDiff}
                                                                </span>
                                                              </span>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </>
                                              )
                                            }
                                          } else if (
                                            ColIdName[
                                              strategyMatch[0]
                                                .strategy_column_id
                                            ][0].position == false
                                          ) {
                                            if (!isOld) {
                                              if (strategyMatch.length > 1)
                                                return (
                                                  <>
                                                    <td
                                                      className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                      onClick={() => {
                                                        setMySignal(
                                                          strategyMatch[0]
                                                        )

                                                        isOpen(true)
                                                      }}
                                                    >
                                                      <div className='flex items-center h-full relative'>
                                                        <div className='mx-auto flex item-center w-full absolute'>
                                                          <div className='mx-auto flex'>
                                                            <div className='h-10 flex relative w-8 item-center mx-auto px-auto'>
                                                              <span className='absolute top-0 text-gray-400'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                              <span className='absolute bottom-0 text-red-500'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                            </div>
                                                            <div className='flex item-center ml-1'>
                                                              <p className='my-auto text-left text-xs '>
                                                                <span className='font-extrabold text-red-500'>
                                                                  <div className='flex'>
                                                                    found +
                                                                  </div>
                                                                </span>
                                                                <span className='flex w-20'>
                                                                  <span>
                                                                    {DateDiff}
                                                                  </span>
                                                                </span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </td>
                                                  </>
                                                )
                                              else {
                                                return (
                                                  <>
                                                    <td
                                                      className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                      onClick={() => {
                                                        setMySignal(
                                                          strategyMatch[0]
                                                        )

                                                        isOpen(true)
                                                      }}
                                                    >
                                                      <div className='flex items-center h-full relative'>
                                                        <div className='mx-auto flex item-center w-full absolute'>
                                                          <div className='mx-auto flex'>
                                                            <div className='h-6 flex w-8 item-center mx-auto px-auto'>
                                                              <span className='absolute my-auto text-red-500'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                            </div>
                                                            <div className='flex item-center ml-1'>
                                                              <p className='my-auto text-left text-xs '>
                                                                <span className='font-extrabold text-red-500'>
                                                                  <div className='flex pr-2.5'>
                                                                    found
                                                                  </div>
                                                                </span>
                                                                <span className='flex w-20'>
                                                                  <span>
                                                                    {DateDiff}
                                                                  </span>
                                                                </span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </td>
                                                  </>
                                                )
                                              }
                                            } else {
                                              return (
                                                <>
                                                  <td
                                                    className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                    onClick={() => {
                                                      setMySignal(
                                                        strategyMatch[0]
                                                      )

                                                      isOpen(true)
                                                    }}
                                                  >
                                                    <div className='flex items-center h-full relative'>
                                                      <div className='mx-auto flex item-center w-full absolute'>
                                                        <div className='mx-auto flex'>
                                                          <div className='h-6 flex w-8 item-center mx-auto px-auto'>
                                                            <span className='absolute my-auto text-gray-400'>
                                                              <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='30'
                                                                height='30'
                                                                fill='currentColor'
                                                                class='bi bi-check-lg'
                                                                viewBox='0 0 16 16'
                                                              >
                                                                <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                              </svg>
                                                            </span>
                                                          </div>
                                                          <div className='flex item-center ml-1'>
                                                            <p className='my-auto text-left text-xs '>
                                                              <span className='font-extrabold text-red-500 '>
                                                                <div className='flex '>
                                                                  found
                                                                </div>
                                                              </span>
                                                              <span className='flex w-20'>
                                                                <span>
                                                                  {DateDiff}
                                                                </span>
                                                              </span>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </>
                                              )
                                            }
                                          } else {
                                            if (!isOld) {
                                              if (strategyMatch.length > 1)
                                                return (
                                                  <>
                                                    <td
                                                      className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                      onClick={() => {
                                                        setMySignal(
                                                          strategyMatch[0]
                                                        )

                                                        isOpen(true)
                                                      }}
                                                    >
                                                      <div className='flex items-center h-full relative'>
                                                        <div className='mx-auto flex item-center w-full absolute'>
                                                          <div className='mx-auto flex'>
                                                            <div className='h-10 flex relative w-8 item-center mx-auto px-auto'>
                                                              <span className='absolute top-0 text-gray-400'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                              <span className='absolute bottom-0 text-blue-500'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                            </div>
                                                            <div className='flex item-center ml-1'>
                                                              <p className='my-auto text-left text-xs '>
                                                                <span className='font-extrabold text-blue-500'>
                                                                  <div className='flex'>
                                                                    found +
                                                                  </div>
                                                                </span>
                                                                <span className='flex w-20'>
                                                                  <span>
                                                                    {DateDiff}
                                                                  </span>
                                                                </span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </td>
                                                  </>
                                                )
                                              else {
                                                return (
                                                  <>
                                                    <td
                                                      className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                      onClick={() => {
                                                        setMySignal(
                                                          strategyMatch[0]
                                                        )

                                                        isOpen(true)
                                                      }}
                                                    >
                                                      <div className='flex items-center h-full relative'>
                                                        <div className='mx-auto flex item-center w-full absolute'>
                                                          <div className='mx-auto flex'>
                                                            <div className='h-6 flex w-8 item-center mx-auto px-auto'>
                                                              <span className='absolute my-auto text-blue-500'>
                                                                <svg
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  width='30'
                                                                  height='30'
                                                                  fill='currentColor'
                                                                  class='bi bi-check-lg'
                                                                  viewBox='0 0 16 16'
                                                                >
                                                                  <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                                </svg>
                                                              </span>
                                                            </div>
                                                            <div className='flex item-center ml-1'>
                                                              <p className='my-auto text-left text-xs '>
                                                                <span className='font-extrabold text-blue-500'>
                                                                  <div className='flex pr-2.5'>
                                                                    found
                                                                  </div>
                                                                </span>
                                                                <span className='flex w-20'>
                                                                  <span>
                                                                    {DateDiff}
                                                                  </span>
                                                                </span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </td>
                                                  </>
                                                )
                                              }
                                            } else {
                                              return (
                                                <>
                                                  <td
                                                    className='flex-grow py-1.5 text-center colmn-size cursor-pointer'
                                                    onClick={() => {
                                                      setMySignal(
                                                        strategyMatch[0]
                                                      )

                                                      isOpen(true)
                                                    }}
                                                  >
                                                    <div className='flex items-center h-full relative'>
                                                      <div className='mx-auto flex item-center w-full absolute'>
                                                        <div className='mx-auto flex'>
                                                          <div className='h-6 flex w-8 item-center mx-auto px-auto'>
                                                            <span className='absolute my-auto text-gray-400'>
                                                              <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='30'
                                                                height='30'
                                                                fill='currentColor'
                                                                class='bi bi-check-lg'
                                                                viewBox='0 0 16 16'
                                                              >
                                                                <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                                                              </svg>
                                                            </span>
                                                          </div>
                                                          <div className='flex item-center ml-1'>
                                                            <p className='my-auto text-left text-xs '>
                                                              <span className='font-extrabold text-blue-500 '>
                                                                <div className='flex '>
                                                                  found
                                                                </div>
                                                              </span>
                                                              <span className='flex w-20'>
                                                                <span>
                                                                  {DateDiff}
                                                                </span>
                                                              </span>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </>
                                              )
                                            }
                                          }
                                        } else
                                          return (
                                            <>
                                              <td className='flex-grow py-1.5 text-center colmn-size '></td>
                                            </>
                                          )
                                      }
                                    )
                                  : null}
                                <td className='w-8 text-center'></td>
                                <td>
                                  <Gap />
                                </td>
                              </tr>
                            </>
                          )
                        }
                      )
                    })
                  : null}
              </InfiniteScroll>
            </tbody>
          </table>
        </>
      )
    } else
      return (
        <div className='flex'>
          <div className='flex flex-wrap pl-4 mywidth lg:flex-nowrap mySticky'>
            <div className='w-full flex h-96 my-auto item-center justify-center'>
              <div className='h-20 w-20 my-auto mx-auto'>
                <Puff />
              </div>
            </div>
          </div>
        </div>
      )
  }

  return (
    <div className='flex md:pt-0 pt-2'>
      <div className='inline-block lg:pt-16 pt-16 min-h-screen flex-grow '>
        <div className='flex'>
          <div className='block flex-wrap lg:flex-nowrap mySticky z-20 w-screen w-min lg:w-max'>
            <WidthMaker />

            <div className='flex flex-wrap lg:flex-nowrap mySticky z-20 w-full'>
              <div className='w-full flex-grow lg:w-1/2 flex flex-wrap'>
                <CBContent />
                <FilterDotContent />
                <div className={'inline-block ml-3 my-3 pt-0.5 w-20'}>
                  <SortSelect />
                </div>
                <ExchangeContent
                  className={'inline-block lg:hidden ml-3 pt-0.5 my-3 w-32'}
                />
                <div className={'inline-block lg:hidden ml-3 pt-0.5 my-3 w-32'}>
                  <MiniSelect />
                </div>
                <div className={'inline-block lg:hidden pt-0.5'}>
                  <FilterContent
                    className={
                      'rounded-md bg-gradient-to-r inline-block my-3 ml-3 py-1.5 lg:hidden items-center border border-blue-500 hover:from-gray-600 hover:to-gray-600'
                    }
                  />
                </div>
              </div>
              <div className='justify-right text-right py-3.5 md:justify-end flex-wrap lg:flex-nowrap hidden lg:flex mySticky w-1/2'>
                <ExchangeContent className='lg:inline-block hidden mr-3 w-44' />
                <div className={'lg:inline-block hidden mr-3 w-32'}>
                  <MiniSelect />
                </div>
                <FilterContent
                  className={
                    'rounded-md bg-gradient-to-r mr-2 py-1.5 items-center border border-blue-500 place-self-end hover:from-gray-400 hover:to-gray-400'
                  }
                />
                <Gap />
              </div>
            </div>
          </div>
        </div>
        <pro>
          <HeadTable />
          <Table />
          <Gap />
        </pro>
      </div>
      <ToolBoxComponent />
    </div>
  )
}
export default Static
