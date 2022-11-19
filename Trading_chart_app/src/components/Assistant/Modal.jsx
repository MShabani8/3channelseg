import { useGlobalContext } from '../../router/context'
import MiniSelect from '../Select/MiniSelect'
import React, { useState, useRef, useEffect } from 'react'
import { timeframe, DrawId } from '../../FrontData'
import '../../input.css'
import { Puff } from '@agney/react-loading'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import _ from 'lodash'
import { logOut, loginUser } from '../../features/Login'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import NativeSelect from '@mui/material/NativeSelect'
import { setCols } from '../../features/Static'

import Menu from '@mui/material/Menu'

import '../Select/select.css'

const IModal = (props) => {
  const { closeModal } = useGlobalContext()
  const login = useSelector((state) => state.login.value)
  const Static = useSelector((state) => state.Static.value)
  const reRender = useSelector((state) => state.reRender.value)
  const dispatch = useDispatch()
  const [IsLoading, setIsLoading] = useState(true)
  const [Columns, setColumns] = useState(null)
  const AConfigs = useRef({
    columnsConfigs: Static.data.columnsConfigs,
  })
  useEffect(() => {
    axios
      .get('https://api.arzwatch.com/api/v1/StrategyColumn/Columns')
      .then((res) => {
        let Groups = _.groupBy(res.data.data, 'group')
        setColumns(Groups)
        setIsLoading(false)
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
  }, [])

  const Accordion = (props) => {
    const [PCstate, setPCstate] = useState(1)
    const [Dstate, setDstate] = useState(1)
    const [Disable, setDisable] = useState(false)
    const [clicked, setClicked] = useState(false)

    let data = Static.data.columnsConfigs.find(
      (element) => element.strategyColumnId == props.id
    )

    const [checked, setChecked] = useState(data)
    if (!data) {
      data = {
        passedCandleSearch: { max: null, min: null },
        distanceSearch: { max: null, min: null },
      }
    }
    const [Configs, setConfigs] = useState({
      strategyColumnId: props.id,
      passedCandleSearch: { max: null, min: null },
      distanceSearch: { max: null, min: null },
    })
    const [PCvalue, setPCvalue] = useState(data.passedCandleSearch)
    const [Dvalue, setDvalue] = useState(data.distanceSearch)

    const [isPER, setisPER] = useState(false)
    const [isDER, setisDER] = useState(false)
    return (
      <>
        <div className='relative'>
          <div className='accordion-header  transition flex space-x-3 items-center pt-2.5 relative'>
            {login.data.claimType.find(
              (element) => element == props.claimType
            ) ? (
              <input
                type='checkbox'
                className={'form-checkbox h-5 w-5 text-blue-500'}
                checked={checked}
                onChange={() => {
                  if (!checked) {
                    AConfigs.current = {
                      columnsConfigs: [
                        ...AConfigs.current.columnsConfigs,
                        Configs,
                      ],
                    }
                  } else {
                    let data = AConfigs.current
                    data.columnsConfigs = data.columnsConfigs.filter(
                      (item) =>
                        item.strategyColumnId != Configs.strategyColumnId
                    )
                    AConfigs.current = data
                  }
                  setChecked(!checked)
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
                login.data.claimType.find(
                  (element) => element == props.claimType
                )
                  ? 'ml-3 flex align-center w-9/12'
                  : 'ml-3 flex align-center w-9/12 text-gray-500'
              }
            >
              {props.columnName}&nbsp;&nbsp;
            </span>
            {login.data.claimType.find(
              (element) => element == props.claimType
            ) ? (
              <>
                {' '}
                {DrawId[props.draw] == null ||
                (DrawId[props.draw].passcandle == 0 &&
                  DrawId[props.draw].distance == 0) ? (
                  <button className='absolute right-8 cursor-pointer text-blue-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-question-circle'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                      <path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z' />
                    </svg>
                  </button>
                ) : (
                  <span
                    className='absolute right-8 cursor-pointer'
                    onClick={() => {
                      setClicked(!clicked)
                    }}
                  >
                    {clicked === true ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='26'
                        height='26'
                        fill='currentColor'
                        class='bi bi-arrow-up-short'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z'
                        />
                      </svg>
                    ) : (
                      <svg
                        focusable='false'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='h-5 justify-center mx-auto py-auto'
                      >
                        <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
                      </svg>
                    )}
                  </span>
                )}
              </>
            ) : null}
          </div>
          {clicked === true ? (
            <ClickAwayListener
              onClickAway={() => {
                if (isPER || isDER) {
                  console.log('er')
                  if (isPER) {
                    setConfigs({
                      ...Configs,
                      passedCandleSearch: { max: null, min: null },
                      distanceSearch: Dvalue,
                    })
                    setPCvalue({
                      min: null,
                      max: null,
                    })
                  }
                  if (isDER) {
                    setConfigs({
                      ...Configs,
                      passedCandleSearch: PCvalue,
                      distanceSearch: { max: null, min: null },
                    })
                    setDvalue({
                      min: null,
                      max: null,
                    })
                  }
                } else {
                  setConfigs({
                    ...Configs,
                    passedCandleSearch: PCvalue,
                    distanceSearch: Dvalue,
                  })
                  if (checked) {
                    let data = AConfigs.current
                    data.columnsConfigs = data.columnsConfigs.filter(
                      (item) =>
                        item.strategyColumnId != Configs.strategyColumnId
                    )
                    AConfigs.current = data
                    AConfigs.current = {
                      columnsConfigs: [
                        ...AConfigs.current.columnsConfigs,
                        {
                          strategyColumnId: props.id,
                          passedCandleSearch: PCvalue,
                          distanceSearch: Dvalue,
                        },
                      ],
                    }
                  }
                }
                setClicked(!clicked)
              }}
            >
              <Box className='absolute right-8 bg-white overflow-auto max-h-52 pl-2 rounded-lg border float-right align-middle z-30'>
                <div className='grid grid-cols-1 p-2'>
                  {DrawId[props.draw].passcandle == 1 ? (
                    <Box className='grid grid-cols-12 gap-0 items-center mb-3'>
                      <label className='col-span-3 text-gray-900 text-xs'>
                        Passcandle:
                      </label>
                      <FormControl className='col-span-3' variant='standard'>
                        <NativeSelect
                          labelId='demo-simple-select-standard-label'
                          id='demo-simple-select-standard'
                          defaultValue={PCstate}
                          onChange={(e) => {
                            setPCstate(e.target.value)
                            if (e.target.value == 2) {
                              setPCvalue({ ...PCvalue, max: null })
                            } else if (e.target.value == 3) {
                              setPCvalue({ ...PCvalue, min: null })
                            }
                          }}
                          label='Passcandle'
                          sx={{ height: '25px' }}
                        >
                          <option value={1}>Equal</option>
                          <option value={2}>Above</option>
                          <option value={3}>Below</option>
                          <option value={4}>Between</option>
                        </NativeSelect>
                      </FormControl>
                      {PCstate == 4 ? (
                        <>
                          <Box className='flex ml-2 col-span-6 align-center block'>
                            <input
                              class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-full m-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                              id='inline-full-name'
                              type='text'
                              onChange={(e) => {
                                if (
                                  e.target.value < 1 ||
                                  e.target.value > 400 ||
                                  isNaN(e.target.value)
                                ) {
                                  setisPER(true)
                                  setPCvalue({
                                    ...PCvalue,
                                    min: e.target.value,
                                  })
                                } else if (PCvalue.max != null) {
                                  if (
                                    parseInt(e.target.value) >
                                    parseInt(PCvalue.max)
                                  )
                                    setisPER(true)
                                  else {
                                    setisPER(false)
                                  }
                                  setPCvalue({
                                    ...PCvalue,
                                    min: e.target.value,
                                  })
                                } else {
                                  setPCvalue({
                                    ...PCvalue,
                                    min: e.target.value,
                                  })
                                }
                              }}
                              value={PCvalue.min}
                            />
                            <h3 className='my-auto'>-</h3>
                            <input
                              class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-full m-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                              id='inline-full-name'
                              type='text'
                              onChange={(e) => {
                                if (
                                  e.target.value < 1 ||
                                  e.target.value > 400 ||
                                  isNaN(e.target.value)
                                ) {
                                  setisPER(true)
                                  setPCvalue({
                                    ...PCvalue,
                                    max: e.target.value,
                                  })
                                } else if (PCvalue.min != null) {
                                  if (
                                    parseInt(e.target.value) <
                                    parseInt(PCvalue.min)
                                  )
                                    setisPER(true)
                                  else {
                                    console.log('2')
                                    setisPER(false)
                                  }
                                  setPCvalue({
                                    ...PCvalue,
                                    max: e.target.value,
                                  })
                                } else {
                                  setPCvalue({
                                    ...PCvalue,
                                    max: e.target.value,
                                  })
                                }
                              }}
                              value={PCvalue.max}
                            />
                          </Box>
                        </>
                      ) : null}
                      {PCstate == 1 || 2 || 3 ? (
                        <>
                          <Box className='flex ml-2 col-span-6 align-center block'>
                            {PCstate == 1 ? (
                              <input
                                class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-1/2 m-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                                id='inline-full-name'
                                type='text'
                                onChange={(e) => {
                                  if (
                                    e.target.value < 1 ||
                                    e.target.value > 400 ||
                                    isNaN(e.target.value)
                                  ) {
                                    setisPER(true)
                                  } else {
                                    setisPER(false)
                                  }
                                  setPCvalue({
                                    max: e.target.value,
                                    min: e.target.value,
                                  })
                                }}
                                value={PCvalue.max}
                              />
                            ) : null}
                            {PCstate == 2 ? (
                              <input
                                class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-1/2 m-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                                id='inline-full-name'
                                type='text'
                                onChange={(e) => {
                                  if (
                                    e.target.value < 1 ||
                                    e.target.value > 400 ||
                                    isNaN(e.target.value)
                                  ) {
                                    setisPER(true)
                                  } else {
                                    setisPER(false)
                                  }
                                  setPCvalue({
                                    max: null,
                                    min: e.target.value,
                                  })
                                }}
                                value={PCvalue.min}
                              />
                            ) : null}
                            {PCstate == 3 ? (
                              <input
                                class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-1/2 m-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                                id='inline-full-name'
                                type='text'
                                onChange={(e) => {
                                  if (
                                    e.target.value < 1 ||
                                    e.target.value > 400 ||
                                    isNaN(e.target.value)
                                  ) {
                                    setisPER(true)
                                  } else {
                                  }
                                  setPCvalue({
                                    min: null,
                                    max: e.target.value,
                                  })
                                }}
                                value={PCvalue.max}
                              />
                            ) : null}
                          </Box>
                          {isPER ? (
                            <>
                              <Box className='flex col-span-12 align-center block'>
                                <span className='text-red-500 text-xs block'>
                                  invalid input (passcandle must be betwwen 0 to
                                  401)
                                </span>
                              </Box>
                            </>
                          ) : null}
                        </>
                      ) : null}
                    </Box>
                  ) : null}

                  {DrawId[props.draw].distance == 1 ? (
                    <Box className='grid grid-cols-12 gap-0 items-center mb-3'>
                      <label className='col-span-3 text-gray-900 text-xs'>
                        Distance:
                      </label>
                      <FormControl className='col-span-3' variant='standard'>
                        <NativeSelect
                          labelId='demo-simple-select-standard-label'
                          id='demo-simple-select-standard'
                          defaultValue={Dstate}
                          onChange={(e) => {
                            setDstate(e.target.value)
                            if (e.target.value == 2) {
                              setDvalue({ ...Dvalue, max: null })
                            } else if (e.target.value == 3) {
                              setDvalue({ ...Dvalue, min: null })
                            }
                          }}
                          label='Distance'
                          sx={{ height: '25px' }}
                        >
                          <option value={1}>Equal</option>
                          <option value={2}>Above</option>
                          <option value={3}>Below</option>
                          <option value={4}>Between</option>
                        </NativeSelect>
                      </FormControl>
                      {Dstate == 4 ? (
                        <>
                          <Box className='flex ml-2 col-span-6 align-center block'>
                            <input
                              class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-full m-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                              id='inline-full-name'
                              type='text'
                              onChange={(e) => {
                                if (
                                  e.target.value < 1 ||
                                  isNaN(e.target.value)
                                ) {
                                  setisDER(true)
                                  setDvalue({ ...Dvalue, min: e.target.value })
                                } else if (Dvalue.max != null) {
                                  if (
                                    parseInt(e.target.value) >
                                    parseInt(Dvalue.max)
                                  )
                                    setisDER(true)
                                  else {
                                    setisDER(false)
                                  }
                                  setDvalue({
                                    ...Dvalue,
                                    min: e.target.value,
                                  })
                                } else {
                                  setDvalue({ ...Dvalue, min: e.target.value })
                                }
                              }}
                              value={Dvalue.min}
                            />
                            <h3 className='my-auto'>-</h3>
                            <input
                              class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-full m-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                              id='inline-full-name'
                              type='text'
                              onChange={(e) => {
                                if (
                                  e.target.value < 1 ||
                                  isNaN(e.target.value)
                                ) {
                                  setisDER(true)
                                  setDvalue({ ...Dvalue, max: e.target.value })
                                } else if (Dvalue.min != null) {
                                  if (
                                    parseInt(e.target.value) <
                                    parseInt(Dvalue.min)
                                  ) {
                                    setisDER(true)
                                    setDvalue({
                                      ...Dvalue,
                                      max: e.target.value,
                                    })
                                  } else {
                                    console.log('2')
                                    setisDER(false)
                                  }
                                  setDvalue({
                                    ...Dvalue,
                                    max: e.target.value,
                                  })
                                } else {
                                  setDvalue({ ...Dvalue, max: e.target.value })
                                }
                              }}
                              value={Dvalue.max}
                            />
                          </Box>
                        </>
                      ) : null}
                      {Dstate == 1 || 2 || 3 ? (
                        <>
                          <Box className='flex ml-2 col-span-6 align-center block'>
                            {Dstate == 1 ? (
                              <input
                                class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-1/2 m-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                                id='inline-full-name'
                                type='text'
                                onChange={(e) => {
                                  if (
                                    e.target.value < 1 ||
                                    isNaN(e.target.value)
                                  ) {
                                    setisDER(true)
                                  } else {
                                    setisDER(false)
                                  }
                                  setDvalue({
                                    max: e.target.value,
                                    min: e.target.value,
                                  })
                                }}
                                value={Dvalue.max}
                              />
                            ) : null}
                            {Dstate == 2 ? (
                              <input
                                class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-1/2 m-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                                id='inline-full-name'
                                type='text'
                                onChange={(e) => {
                                  if (
                                    e.target.value < 1 ||
                                    isNaN(e.target.value)
                                  ) {
                                    setisDER(true)
                                  } else {
                                    setisDER(false)
                                  }
                                  setDvalue({
                                    max: null,
                                    min: e.target.value,
                                  })
                                }}
                                value={Dvalue.min}
                              />
                            ) : null}
                            {Dstate == 3 ? (
                              <input
                                class='bg-gray-50 appearance-none h-7 border border-gray-400 rounded py-1 px-2 w-1/2 m-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                                id='inline-full-name'
                                type='text'
                                onChange={(e) => {
                                  if (
                                    e.target.value < 1 ||
                                    isNaN(e.target.value)
                                  ) {
                                    setisDER(true)
                                  } else {
                                    setisDER(false)
                                  }
                                  setDvalue({
                                    min: null,
                                    max: e.target.value,
                                  })
                                }}
                                value={Dvalue.max}
                              />
                            ) : null}
                          </Box>
                          {isDER ? (
                            <>
                              <Box className='flex col-span-12 align-center block'>
                                <span className='text-red-500 text-xs block'>
                                  invalid input (distance must be above 0)
                                </span>
                              </Box>
                            </>
                          ) : null}
                        </>
                      ) : null}
                    </Box>
                  ) : null}

                  <div className='w-full h-2'></div>
                  <button className='text-blue-700 underline absolute right-2 bottom-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-question-circle'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                      <path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z' />
                    </svg>
                  </button>
                </div>
              </Box>
            </ClickAwayListener>
          ) : null}
          <span className='ml-8.5 text-xs flex mt-1'>
            position:
            {props.position == null ? (
              <div className='text-gray-400 font-bold'>&nbsp;neutral</div>
            ) : props.position ? (
              <div className='text-green-400 font-bold'>&nbsp;buy</div>
            ) : (
              <div className='text-red-400 font-bold'>&nbsp;sell</div>
            )}
          </span>
          <span className='ml-8.5 text-xs flex my-1'>
            type:
            <div className='font-bold'>&nbsp;{props.type}</div>
          </span>
        </div>
      </>
    )
  }

  if (!IsLoading) {
    return (
      <div className='modal-container shadow-lg border z-50 block'>
        <form
          className='w-full h-full px-8 overflow-auto pb-3 relative'
          id='journal-scroll'
        >
          <div class='sticky pt-3 pb-5 border-b flex w-full bg-white top-0 capitalize z-50'>
            <div class='w-1/4 flex justify-start mt-6'>
              <div class='text-xl font-bold'>Filters</div>
            </div>

            <div class='w-3/4 flex justify-end mt-6'>
              <div className='bg-gray-200 flex mr-4 justify-end items-center border-2 border-gray-200 rounded-md'>
                <button className='searchbox'>
                  <svg
                    className='mx-1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                  >
                    <g fill='none' fill-rule='evenodd' stroke='currentColor'>
                      <circle cx='7.5' cy='7.5' r='6'></circle>
                      <path d='M11.5 11.5L15 15'></path>
                    </g>
                  </svg>
                </button>
                <input
                  className='border-0 h-7 focus:ring-0 bg-gray-200 flex lg:w-60 w-full'
                  type='text'
                  onChange={(event) => {
                    console.log('render')
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
              <button
                class='px-6 py-2 text-white rounded-md leading-5 transition-colors duration-200 transform bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600  hover:shadow-lg focus:outline-none'
                onClick={() => {
                  let data = AConfigs.current.columnsConfigs
                  console.log(AConfigs.current.columnsConfigs)
                  dispatch(setCols({ ...Static.data, columnsConfigs: data }))
                  props.onClose()
                }}
              >
                Save
              </button>
            </div>
          </div>
          <div class='grid'>
            {Columns
              ? Object.keys(Columns).map((key, index) => {
                  return (
                    <>
                      <div className='mb-2 mt-8 text-lg font-bold'>
                        {Object.keys(Columns)[index]}
                      </div>
                      <div>
                        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
                          {Columns[key].map((strategy) => {
                            return (
                              <>
                                <Accordion
                                  columnName={strategy.columnName}
                                  position={strategy.position}
                                  type={strategy.type}
                                  draw={strategy.draw}
                                  id={strategy.id}
                                  claimType={strategy.claimType}
                                />
                              </>
                            )
                          })}
                        </div>
                      </div>
                    </>
                  )
                })
              : null}
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <>
        <div className='modal-container shadow-lg flex justify-center border z-50 block'>
          <div className='h-16 w-16 my-auto'>
            <Puff />
          </div>
        </div>
      </>
    )
  }
}

export default IModal
