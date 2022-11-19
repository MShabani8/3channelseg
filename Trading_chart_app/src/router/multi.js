// import React, { useState, useRef, useEffect, useCallback } from 'react'
// import { Motion, spring } from 'react-motion'
// import { useGlobalContext } from './context'
// import { Transition } from '@headlessui/react'
// import { count, timeframe } from '../FrontData'
// import Select from '../components/Select/Select'
// import IModal from '../components/Assistant/Modal'
// import { Table, HeadTable } from '../components/Assistant/Table'
// import Alert from '../components/Assistant/Alert'
// import WatchList from '../components/Assistant/WatchList'
// import { useCookies } from 'react-cookie'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { logOut, loginUser } from '../features/Login'
// import NativeSelect from '@mui/material/NativeSelect'
// import { getCols } from '../features/Static'
// import InputBase from '@mui/material/InputBase'
// import { styled } from '@mui/material/styles'
// import ClickAwayListener from '@mui/core/ClickAwayListener'
// import Box from '@mui/material/Box'
// import axios from 'axios'
// import _ from 'lodash'
// import {
//   AlertToolModal,
//   WatchToolModal,
//   AddAlertToolModal,
// } from '../components/Assistant/ToolModal'
// import Modal from '@mui/material/Modal'

// let useClickOutside = (handler) => {
//   let domNode = useRef()

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (!domNode?.current?.contains(event.target) && false) {
//         handler()
//       }
//     }

//     document.addEventListener('mousedown', maybeHandler)

//     return () => {
//       document.removeEventListener('mousedown', maybeHandler)
//     }
//   })

//   return domNode
// }

// const ButtonClickOutside = (handler, ref1, ref2) => {
//   const maybeHandler = (event) => {
//     if (
//       !(
//         ref1?.current?.contains(event.target) ||
//         ref2?.current?.contains(event.target)
//       )
//     ) {
//       handler()
//     }
//   }

//   document.addEventListener('mousedown', maybeHandler)

//   return () => {
//     document.removeEventListener('mousedown', maybeHandler)
//   }
// }

// const Multi = (props) => {
//   const login = useSelector((state) => state.login.value)
//   const Static = useSelector((state) => state.Static.value)
//   const reRender = useSelector((state) => state.reRender.value)
//   const dispatch = useDispatch()
//   var res1 = ''
//   const [cookies, setCookie] = useCookies(['AX01', 'AX02'])
//   const CBdomNode1 = useRef()
//   const CBdomNode = useRef()
//   const [CBDropdown, setCBDropdown] = useState(false)
//   const [comboBoxData, setComboBoxData] = useState(null)

//   console.log(props.m)

//   useEffect(() => {
//     let access_token = 'Bearer ' + cookies.AX01
//     console.log('cookieset')
//     if (cookies.AX01 != null && cookies.AX02 != null) {
//       axios
//         .get('https://localhost:5001/api/v1/ManageUser/CurrentUser', {
//           headers: {
//             Authorization: access_token,
//           },
//         })
//         .then((res) => {
//           dispatch(
//             loginUser({
//               access_token: cookies.AX01,
//               refresh_token: cookies.AX02,
//               token_type: 'refresh_token',
//               expires_in: 299998,
//               userId: res.data.data.id,
//             })
//           )
//         })
//         .catch((error) => {
//           console.log(error.message)
//           if (error.message.includes('401')) {
//             let access_token = 'Bearer ' + cookies.AX01
//             axios
//               .post('https://localhost:5001/api/v1/Account/RefreshToken', {
//                 access_token: access_token,
//                 refresh_token: login.data.refresh_token,
//                 token_type: login.data.token_type,
//               })
//               .then((res) => {
//                 dispatch(
//                   loginUser({
//                     access_token: res.data.access_token,
//                     refresh_token: res.data.refresh_token,
//                     token_type: res.data.token_type,
//                     expires_in: res.data.expires_in,
//                   })
//                 )
//               })
//               .catch((error) => {
//                 console.log(error.message)
//                 return Promise.reject({})
//               })
//           }
//           return Promise.reject({})
//         })
//     } else if (cookies.AX01 == null) {
//       res1 = 'access token expires'
//       console.log(res1)
//     }
//     axios
//       .get(
//         'https://localhost:5001/api/v1/StaticStrategySetup/ComboBox?Market=Crypto',
//         {
//           headers: {
//             Authorization: access_token,
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res.data.data)
//         setComboBoxData(res.data.data)
//       })
//       .catch((error) => {
//         return Promise.reject({})
//       })
//   }, [])

//   const MyModal = () => {
//     const { isModalOpen, closeModal } = useGlobalContext()

//     return (
//       <Modal
//         className={'modal-overlay show-modal z-50'}
//         open={isModalOpen}
//         onClose={closeModal}
//       >
//         <Box>
//           <IModal />
//         </Box>
//       </Modal>
//     )
//   }
//   const ToolModal = () => {
//     const { isTModalOpen, closeTModal, isAddAlerts } = useGlobalContext()
//     if (isTModalOpen)
//       return (
//         <div className={'modal-overlay show-modal  z-50'}>
//           <ClickAwayListener
//             onClickAway={() => {
//               closeTModal()
//             }}
//           >
//             <Box>
//               <Box
//                 className={
//                   isAlertOpen && isAddAlerts ? 'Amodal-container' : 'hidden'
//                 }
//               >
//                 <AddAlertToolModal />
//               </Box>
//               <Box
//                 className={
//                   isAlertOpen && !isAddAlerts ? 'Amodal-container' : 'hidden'
//                 }
//               >
//                 <AlertToolModal />
//               </Box>
//               <Box className={isWatchOpen ? 'modal-container' : 'hidden'}>
//                 <WatchToolModal />
//               </Box>
//             </Box>
//           </ClickAwayListener>
//         </div>
//       )
//     else return <></>
//   }

//   const FilterDotNode = useRef()
//   const ColorDotNode = useRef()
//   const ColorDotNode1 = useRef()

//   const FilterDotNode1 = useRef()
//   const { openModal, isAsideOpen, SetModalRender } = useGlobalContext()
//   const [isProOpen, setIsProOpen] = useState(true)
//   const [isTProOpen, setIsTProOpen] = useState(false)
//   const [ColorDot, setColorDot] = useState(false)
//   const [isDynamicOpen, setIsDynamicOpen] = useState(false)
//   const [isTDynamicOpen, setIsTDynamicOpen] = useState(false)
//   const [isToolOpen, setIsToolOpen] = useState(false)
//   const [isAlertOpen, setIsAlertOpen] = useState(false)
//   const [isWatchOpen, setIsWatchOpen] = useState(false)
//   const [isSettingOpen, setIsSettingOpen] = useState(false)
//   const [ADropdown, setADropdown] = useState(false)
//   const [FilterDot, setFilterDot] = useState(false)
//   const [Columns, setColumns] = useState(null)
//   const [comboBox, setComboBox] = useState('Trend-Following')

//   const openPro = () => {
//     setIsProOpen(true)
//     setIsDynamicOpen(false)
//   }
//   const openDynamic = () => {
//     setIsProOpen(false)
//     setIsDynamicOpen(true)
//   }
//   const openProModal = () => {
//     setIsTProOpen(true)
//     setIsTDynamicOpen(false)
//     openModal()
//   }
//   const openDModal = () => {
//     setIsTProOpen(false)
//     setIsTDynamicOpen(true)
//     openModal()
//   }

//   const PcountTemp = count.find((ext) => ext.value)
//   const [PcountExtension, setPCountExtension] = useState(PcountTemp)

//   const PtimeframeTemp = timeframe.find((ext) => ext.value)
//   const [PtimeframeExtension, setPTimeframeExtension] = useState(PtimeframeTemp)

//   const DcountTemp = count.find((ext) => ext.value)
//   const [DcountExtension, setDCountExtension] = useState(DcountTemp)

//   const DtimeframeTemp = timeframe.find((ext) => ext.value)
//   const [DtimeframeExtension, setDTimeframeExtension] = useState(DtimeframeTemp)

//   const WcountTemp = count.find((ext) => ext.value)
//   const [WcountExtension, setWCountExtension] = useState(WcountTemp)

//   const WtimeframeTemp = timeframe.find((ext) => ext.value)
//   const [WtimeframeExtension, setWTimeframeExtension] = useState(WtimeframeTemp)

//   const OpenOnChange = (ref1, ref2, func, state) => {
//     func(!state)
//     ButtonClickOutside(
//       () => {
//         func(false)
//       },
//       ref1,
//       ref2
//     )
//   }
//   return (
//     <div className='flex md:pt-0 pt-2'>
//       <div className='inline-block lg:pt-16 pt-16 min-h-screen flex-grow '>
//         <MyModal />

//         <div className='flex h-15 '>
//           <div className='flex flex-wrap mywidth lg:flex-nowrap mySticky z-20'>
//             <div className='w-full flex-grow lg:w-1/2 h-15 flex flex-wrap'>
//               <span className='block my-auto ml-3'>
//                 <button
//                   className='border border-blue-500 bg-gradient-to-r from-gray-100 to-gray-100 hover:from-gray-300 hover:to-gray-300 rounded-xs px-3 py-1.5 shadow text-bold flex'
//                   ref={CBdomNode}
//                   onClick={() => {
//                     OpenOnChange(
//                       CBdomNode,
//                       CBdomNode1,
//                       setCBDropdown,
//                       CBDropdown
//                     )
//                   }}
//                 >
//                   {comboBox}
//                   <span className='py-0.5 ml-1'>
//                     <svg
//                       focusable='false'
//                       xmlns='http://www.w3.org/2000/svg'
//                       viewBox='0 0 24 24'
//                       className='w-5 h-5 item-center '
//                     >
//                       <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
//                     </svg>
//                   </span>
//                 </button>

//                 <div
//                   className={
//                     (CBDropdown ? 'inline-block ' : 'hidden ') +
//                     'block overflow-auto max-h-52 dropdown-content w-48 rounded-lg border align-middle z-50'
//                   }
//                   id='journal-scroll'
//                   ref={CBdomNode1}
//                 >
//                   <div className='h-full block align-middle'>
//                     <button
//                       className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
//                       onClick={() => {
//                         setComboBox('Trend-Following')
//                         setCBDropdown(false)
//                       }}
//                     >
//                       <span className='flex items-center'>
//                         <span className='mx-2 font-medium text-sm font-bold flex overflow-ellipsis overflow-hidden whitespace-nowrap w-40'>
//                           Trend-Following
//                         </span>
//                       </span>
//                     </button>
//                     <button
//                       className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
//                       onClick={() => {
//                         setComboBox('Oscillators')
//                         setCBDropdown(false)
//                       }}
//                     >
//                       <span className='flex items-center'>
//                         <span className='mx-2 font-medium text-sm font-bold flex overflow-ellipsis overflow-hidden whitespace-nowrap w-40'>
//                           Oscillators
//                         </span>
//                       </span>
//                     </button>
//                     <button
//                       onClick={() => {
//                         setCBDropdown(false)
//                       }}
//                       className='w-full flex justify-between items-center border-t border-b py-3 pr-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
//                     >
//                       <span className='flex items-center'>
//                         <span className='mx-2 font-medium flex text-sm font-bold overflow-ellipsis overflow-hidden whitespace-nowrap w-40'>
//                           <span>
//                             <svg
//                               xmlns='http://www.w3.org/2000/svg'
//                               width='20'
//                               height='20'
//                               fill='currentColor'
//                               class='bi bi-arrow-down-square'
//                               viewBox='0 0 16 16'
//                               className='mr-1'
//                             >
//                               <path
//                                 fill-rule='evenodd'
//                                 d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z'
//                               />
//                             </svg>
//                           </span>
//                           Save as new column
//                         </span>
//                       </span>
//                     </button>
//                     {comboBoxData
//                       ? comboBoxData.map((item, index) => {
//                           const { id, name } = item
//                           return (
//                             <button
//                               className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-gray-700 focus:outline-none'
//                               key={id}
//                               onClick={() => {
//                                 setComboBox(name)
//                                 setCBDropdown(false)
//                               }}
//                             >
//                               <span className='flex items-center'>
//                                 <span className='mx-2 text-sm font-bold flex overflow-ellipsis overflow-hidden whitespace-nowrap w-40'>
//                                   {name}
//                                 </span>
//                               </span>
//                             </button>
//                           )
//                         })
//                       : null}
//                   </div>
//                 </div>
//               </span>
//               {isProOpen ? (
//                 <div className={'inline-block lg:hidden ml-3 my-3 w-28'}>
//                   <Select
//                     options={count}
//                     selectedOption={PcountExtension}
//                     handelChange={(event) => {
//                       console.log('parent', event)
//                       setPCountExtension(event)
//                     }}
//                   />
//                 </div>
//               ) : null}
//               {isProOpen ? (
//                 <div className={'inline-block lg:hidden ml-3 my-3 w-28'}>
//                   <Select
//                     options={timeframe}
//                     className='w-36'
//                     selectedOption={PtimeframeExtension}
//                     handelChange={(event) => {
//                       console.log('parent', event)
//                       setPTimeframeExtension(event)
//                     }}
//                   />
//                 </div>
//               ) : null}

//               {isDynamicOpen ? (
//                 <div className={'inline-block lg:hidden ml-3 my-3 w-28'}>
//                   <Select
//                     options={count}
//                     className='w-36'
//                     selectedOption={DcountExtension}
//                     handelChange={(event) => {
//                       console.log('parent', event)
//                       setDCountExtension(event)
//                     }}
//                   />
//                 </div>
//               ) : null}
//               {isDynamicOpen ? (
//                 <div className={'inline-block lg:hidden ml-3 my-3 w-28'}>
//                   <Select
//                     options={timeframe}
//                     className='w-36'
//                     selectedOption={DtimeframeExtension}
//                     handelChange={(event) => {
//                       console.log('parent', event)
//                       setDTimeframeExtension(event)
//                     }}
//                   />
//                 </div>
//               ) : null}

//               <button
//                 className='rounded-md bg-gradient-to-r inline-block my-3 ml-3 py-1.5 lg:hidden items-center border border-blue-500 hover:from-blue-600 hover:to-blue-600'
//                 onClick={() => {
//                   SetModalRender()
//                   openModal()
//                 }}
//               >
//                 <span className='flex mx-2'>
//                   <div className='text-center align-middle'>
//                     <svg
//                       focusable='false'
//                       xmlns='http://www.w3.org/2000/svg'
//                       viewBox='0 0 24 24'
//                       className='h-5 w-5 mr-1 py-auto px-auto '
//                     >
//                       <path d='M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z'></path>
//                       <circle cx='12' cy='12' r='3.5'></circle>
//                     </svg>
//                   </div>
//                   <div className='focus:ring-0 border-green-200'>Filters</div>
//                 </span>
//               </button>
//             </div>
//             <div className='justify-right text-right py-3.5 md:justify-end flex-wrap lg:flex-nowrap hidden lg:flex mySticky w-1/2'>
//               {isProOpen ? (
//                 <div className={'lg:inline-block hidden mr-3 w-28'}>
//                   <Select
//                     className='w-40'
//                     options={count}
//                     selectedOption={PcountExtension}
//                     handelChange={(event) => {
//                       console.log('parent', event)
//                       setPCountExtension(event)
//                     }}
//                   />
//                 </div>
//               ) : null}
//               {isProOpen ? (
//                 <div className={'lg:inline-block hidden mr-3 w-28'}>
//                   <Select
//                     className='w-36'
//                     options={timeframe}
//                     selectedOption={PtimeframeExtension}
//                     handelChange={(event) => {
//                       console.log('parent', event)
//                       setPTimeframeExtension(event)
//                     }}
//                   />
//                 </div>
//               ) : null}
//               {isDynamicOpen ? (
//                 <div className={'lg:inline-block hidden mr-3 w-28'}>
//                   <Select
//                     options={count}
//                     selectedOption={DcountExtension}
//                     handelChange={(event) => {
//                       console.log('parent', event)
//                       setDCountExtension(event)
//                     }}
//                   />
//                 </div>
//               ) : null}
//               {isDynamicOpen ? (
//                 <div className={'lg:inline-block hidden mr-3 w-28'}>
//                   <Select
//                     options={timeframe}
//                     selectedOption={DtimeframeExtension}
//                     handelChange={(event) => {
//                       console.log('parent', event)
//                       setDTimeframeExtension(event)
//                     }}
//                   />
//                 </div>
//               ) : null}

//               <button
//                 className='rounded-md bg-gradient-to-r mr-2 py-1.5 items-center border border-blue-500 place-self-end hover:from-gray-400 hover:to-gray-400 hover: '
//                 onClick={() => {
//                   SetModalRender()
//                   openModal()
//                 }}
//               >
//                 <span className='flex mx-2'>
//                   <button className='searchbox text-center align-middle'>
//                     <svg
//                       focusable='false'
//                       xmlns='http://www.w3.org/2000/svg'
//                       viewBox='0 0 24 24'
//                       className='h-5 w-5 mr-1 py-auto px-auto '
//                     >
//                       <path d='M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z'></path>
//                       <circle cx='12' cy='12' r='3.5'></circle>
//                     </svg>
//                   </button>
//                   <div className='focus:ring-0 border-green-200 '>Filters</div>
//                 </span>
//               </button>

//               <div
//                 className={
//                   ((isSettingOpen || isAlertOpen || isWatchOpen) && isAsideOpen
//                     ? 'w-72 '
//                     : '') +
//                   (isAsideOpen ? 'w-16' : 'w-0') +
//                   ' flex flex-shrink-0'
//                 }
//               ></div>
//             </div>
//           </div>
//         </div>
//         <pro className={isProOpen ? '' : 'hidden'}>
//           <thead className='mySticky flex z-10 w-full'>
//             <tr
//               className={
//                 ((isSettingOpen || isAlertOpen || isWatchOpen) && isAsideOpen
//                   ? 'pr-72 bg-gray-200 text-gray-600 text-xs flex leading-normal w-full'
//                   : ' ') +
//                 (isAsideOpen
//                   ? 'pr-16 bg-gray-200 text-gray-600 text-xs flex leading-normal w-full'
//                   : '') +
//                 'bg-gray-200 text-gray-600 text-xs flex leading-normal w-full'
//               }
//             >
//               <th className='pr-3 pl-6 border border-white text-left w-56 md:w-80 flex '>
//                 <button
//                   onClick={() => {
//                     OpenOnChange(
//                       ColorDotNode,
//                       ColorDotNode1,
//                       setColorDot,
//                       ColorDot
//                     )
//                   }}
//                 >
//                   <svg
//                     viewBox='0 0 100 100'
//                     xmlns='http://www.w3.org/2000/svg'
//                     className='w-3.5 h-5 mx-1 my-3'
//                     ref={ColorDotNode}
//                   >
//                     <circle
//                       cx='50'
//                       cy='50'
//                       r='50'
//                       fill='#2563EB
// '
//                     />
//                   </svg>
//                 </button>
//                 <div
//                   className={
//                     (ColorDot ? 'block ' : 'hidden ') +
//                     'block overflow-auto h-auto dropdown-content w-12 top-9 rounded-lg border align-middle'
//                   }
//                   id='journal-scroll'
//                   ref={ColorDotNode1}
//                 >
//                   <div className='h-full block align-middle'>
//                     <svg
//                       viewBox='0 0 100 100'
//                       xmlns='http://www.w3.org/2000/svg'
//                       className='w-3 h-5 mx-auto my-2 block'
//                     >
//                       <circle
//                         cx='50'
//                         cy='50'
//                         r='50'
//                         fill='#2563EB
// '
//                       />
//                     </svg>
//                     <svg
//                       viewBox='0 0 100 100'
//                       xmlns='http://www.w3.org/2000/svg'
//                       className='w-3 h-5 mx-auto my-2 block'
//                     >
//                       <circle
//                         cx='50'
//                         cy='50'
//                         r='50'
//                         fill='#2563EB
// '
//                       />
//                     </svg>
//                     <svg
//                       viewBox='0 0 100 100'
//                       xmlns='http://www.w3.org/2000/svg'
//                       className='w-3 h-5 mx-auto my-2 block'
//                     >
//                       <circle
//                         cx='50'
//                         cy='50'
//                         r='50'
//                         fill='#2563EB
// '
//                       />
//                     </svg>
//                     <svg
//                       viewBox='0 0 100 100'
//                       xmlns='http://www.w3.org/2000/svg'
//                       className='w-3 h-5 mx-auto my-2 block'
//                     >
//                       <circle
//                         cx='50'
//                         cy='50'
//                         r='50'
//                         fill='#2563EB
// '
//                       />
//                     </svg>
//                     <svg
//                       viewBox='0 0 100 100'
//                       xmlns='http://www.w3.org/2000/svg'
//                       className='w-3 h-5 mx-auto my-2 block'
//                     >
//                       <circle
//                         cx='50'
//                         cy='50'
//                         r='50'
//                         fill='#2563EB
// '
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <span className='flex justify-self-start my-auto text-sm mr-auto'>
//                   Ticker
//                 </span>
//                 <div className='flex items-center bg-gray-100 border border-gray-400 my-2  whitespace-nowrap place-self-end'>
//                   <button className='searchbox text-center  align-middle whitespace-nowrap'>
//                     <svg
//                       className=' ml-2 mr-0 mb-1 py-auto whitespace-nowrap'
//                       xmlns='http://www.w3.org/2000/svg'
//                       width='18'
//                       height='18'
//                       viewBox='0 0 16 16'
//                     >
//                       <g fill='none' fill-rule='evenodd' stroke='currentColor'>
//                         <circle cx='7.5' cy='7.5' r='6'></circle>
//                         <path d='M11.5 11.5L15 15'></path>
//                       </g>
//                     </svg>
//                   </button>
//                   <input
//                     className='border-0 h-7 focus:ring-0 bg-gray-100 border-green-200 py-1 w-20 md:w-40 whitespace-nowrap'
//                     type='text'
//                     placeholder='search coins'
//                   />
//                 </div>
//               </th>
//               <HeadTable />
//               <th className='relative border border-white text-center w-8 hover:bg-red'>
//                 <button
//                   className='w-full h-full'
//                   ref={FilterDotNode}
//                   onClick={() => {
//                     OpenOnChange(
//                       FilterDotNode,
//                       FilterDotNode1,
//                       setFilterDot,
//                       FilterDot
//                     )
//                   }}
//                 >
//                   <svg
//                     focusable='false'
//                     xmlns='http://www.w3.org/2000/svg'
//                     viewBox='0 0 24 24'
//                     className='h-5 justify-center mx-auto py-auto'
//                   >
//                     <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
//                   </svg>
//                 </button>
//                 <Box
//                   className={
//                     (FilterDot
//                       ? 'top-0 right-25 block absolute top-12 right-0 z-50 bg-white'
//                       : 'hidden ') +
//                     ' overflow-auto text-right w-56 shadow-md FilterDotH rounded-lg border align-middle z-50 '
//                   }
//                   id='journal-scroll'
//                   ref={FilterDotNode1}
//                 >
//                   <div className='bg-white py-2 border-b sticky top-0'>
//                     <div className='flex items-center border border-gray-400 rounded-xl whitespace-nowrap place-self-end mx-2 '>
//                       <button className='searchbox text-center align-middle whitespace-nowrap'>
//                         <svg
//                           className=' ml-2 mr-0 mb-1 py-auto whitespace-nowrap'
//                           xmlns='http://www.w3.org/2000/svg'
//                           width='18'
//                           height='18'
//                           viewBox='0 0 16 16'
//                         >
//                           <g
//                             fill='none'
//                             fill-rule='evenodd'
//                             stroke='currentColor'
//                           >
//                             <circle cx='7.5' cy='7.5' r='6'></circle>
//                             <path d='M11.5 11.5L15 15'></path>
//                           </g>
//                         </svg>
//                       </button>
//                       <input
//                         className='border-0 h-7 focus:ring-0 border-green-200 py-1 w-36 whitespace-nowrap'
//                         type='text'
//                         placeholder='search Filters'
//                         onChange={(event) => {
//                           let queryStr = '?Search=' + event.target.value
//                           axios
//                             .get(
//                               'https://localhost:5001/api/v1/StrategyColumn/Columns' +
//                                 queryStr
//                             )
//                             .then((res) => {
//                               let Groups = _.groupBy(res.data.data, 'group')
//                               setColumns(Groups)
//                             })
//                             .catch((error) => {
//                               console.log(error.message)
//                               if (error.message.includes('401')) {
//                                 let access_token =
//                                   'Bearer ' + login.data.access_token
//                                 axios
//                                   .post(
//                                     'https://localhost:5001/api/v1/Account/RefreshToken',
//                                     {
//                                       access_token: access_token,
//                                       refresh_token: login.data.refresh_token,
//                                       token_type: login.data.token_type,
//                                     }
//                                   )
//                                   .then((res) => {
//                                     dispatch(
//                                       loginUser({
//                                         access_token: res.data.access_token,
//                                         refresh_token: res.data.refresh_token,
//                                         token_type: res.data.token_type,
//                                         expires_in: res.data.expires_in,
//                                       })
//                                     )
//                                   })
//                                   .catch((error) => {
//                                     console.log(error.message)
//                                     return Promise.reject({})
//                                   })
//                               }
//                               return Promise.reject({})
//                             })
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <div className=' w-full text-left px-3 gap-3'>
//                     <div>
//                       {Columns
//                         ? Object.keys(Columns).map((key, index) => {
//                             return (
//                               <>
//                                 <div className='my-2 text-sm font-bold'>
//                                   {Object.keys(Columns)[index]}
//                                 </div>
//                                 {Columns[key].map((strategy) => {
//                                   return (
//                                     <>
//                                       <label className=' inline-flex items-center my-1 py-1.5'>
//                                         <input
//                                           type='checkbox'
//                                           className='form-checkbox h-4 w-4 text-blue-500'
//                                         />
//                                         <span className='ml-3'>
//                                           {strategy.columnName}
//                                         </span>
//                                       </label>
//                                     </>
//                                   )
//                                 })}
//                               </>
//                             )
//                           })
//                         : null}
//                     </div>
//                   </div>
//                 </Box>
//               </th>
//             </tr>
//           </thead>
//           <div className=''>
//             <div className=' justify-center font-sans '>
//               <div className='w-full '>
//                 <div
//                   className={
//                     ((isSettingOpen || isAlertOpen || isWatchOpen) &&
//                     isAsideOpen
//                       ? 'pr-72 '
//                       : ' ') +
//                     (isAsideOpen ? 'pr-16' : '') +
//                     ' bg-white shadow rounded '
//                   }
//                 >
//                   <Table />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </pro>
//       </div>
//       <Transition
//         className='lg:flex hidden'
//         show={isAsideOpen}
//         id='journal-scroll'
//       >
//         <ToolModal />
//         <aside
//           className={
//             'h-screen flex flex-col items-center bg-white text-gray-700 shadow h-auto fixed justify-right right-0 z-30 bg-white'
//           }
//         >
//           <container className='inline-flex'>
//             {isToolOpen && isAlertOpen ? (
//               <div className={'block w-56 bg-red-100 min-h-screen pt-16 '}>
//                 <Alert />
//               </div>
//             ) : (
//               <></>
//             )}
//             {isToolOpen && isWatchOpen ? (
//               <div className={'block w-56  min-h-screen pt-16 z-50'}>
//                 <WatchList />
//               </div>
//             ) : (
//               <></>
//             )}
//             <nav className={!isToolOpen ? 'flex w-16' : 'flex w-16 border'}>
//               <div className='h-16 flex items-center w-full'></div>
//               <ul classname='pt-16'>
//                 <li className='hover:bg-gray-100 pt-16'>
//                   <button
//                     className='h-16 px-5 flex flex justify-center items-center w-full
// 					focus:text-orange-500'
//                     onClick={() => {
//                       if (
//                         !isToolOpen ||
//                         (isToolOpen && (isWatchOpen || isSettingOpen))
//                       ) {
//                         setIsToolOpen(true)
//                         setIsAlertOpen(true)
//                         setIsWatchOpen(false)
//                         setIsSettingOpen(false)
//                       } else {
//                         setIsToolOpen(false)
//                         setIsAlertOpen(false)
//                         setIsWatchOpen(false)
//                         setIsSettingOpen(false)
//                       }
//                     }}
//                   >
//                     <svg
//                       className='h-6 w-6'
//                       xmlns='http://www.w3.org/2000/svg'
//                       width='24'
//                       height='24'
//                       viewBox='0 0 24 24'
//                       fill='none'
//                       stroke='currentColor'
//                       stroke-width='2'
//                       stroke-linecap='round'
//                       stroke-linejoin='round'
//                     >
//                       <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
//                       <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
//                     </svg>
//                   </button>
//                 </li>
//                 <li className='hover:bg-gray-100'>
//                   <button
//                     className='h-16 px-4 flex flex justify-center items-center w-full
// 					focus:text-orange-500'
//                     onClick={() => {
//                       if (
//                         !isToolOpen ||
//                         (isToolOpen && (isAlertOpen || isSettingOpen))
//                       ) {
//                         setIsToolOpen(true)
//                         setIsAlertOpen(false)
//                         setIsWatchOpen(true)
//                         setIsSettingOpen(false)
//                       } else {
//                         setIsToolOpen(false)
//                         setIsAlertOpen(false)
//                         setIsWatchOpen(false)
//                         setIsSettingOpen(false)
//                       }
//                     }}
//                   >
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       width='16'
//                       height='16'
//                       fill='currentColor'
//                       className='w-7 h-8'
//                       viewBox='0 0 16 16'
//                     >
//                       <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
//                       <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
//                     </svg>
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </container>
//         </aside>
//       </Transition>
//     </div>
//   )
// }
// export default Multi
