import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import { createPopper } from '@popperjs/core'
import { Assistant } from '../FrontData'
import UserSide from '../components/UserSide'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { logOut, loginUser } from '../features/Login'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { current } from '../features/ToolBox'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(0),
    },
  })
)

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

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
const UserPanel = () => {
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
  return (
    <>
      {' '}
      <div className='relative'>
        <button
          ref={AdotdomNode}
          className='mt-1 flex'
          onClick={() => {
            OpenOnChange(AdotdomNode, AdotdomNode1, setADropdown, ADropdown)
          }}
        >
          <div className='w-9 h-9 rounded-full bg-red-100'></div>
          <span className='my-auto ml-2 font-semibold'>ADMIN</span>
        </button>
        <div
          className={
            (ADropdown ? 'block ' : 'hidden ') +
            ' overflow-hidden h-72 dropdown-content w-56  rounded-xl border align-middle absolute right-0'
          }
          id='journal-scroll'
          ref={AdotdomNode1}
        >
          <UserSide />
        </div>
      </div>
    </>
  )
}

const NavDropdown = ({ item, name }) => {
  const [expanded, setExpanded] = useState(0)
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
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
      <div className='flex flex-wrap sticky'>
        <div>
          <div>
            <div ref={domNode1}>
              <button
                className='mr-10 flex items-center Myhover pb-4 border-b-2 border-white hover:border-blue-500 whitespace-nowrap'
                type='button'
                ref={btnDropdownRef}
                onMouseEnter={openDropdownPopover}
              >
                <Link to='/static?m=crypto'>{name}</Link>
              </button>
            </div>
            <div ref={domNode}>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? 'block ' : 'hidden ') +
                  'z-50 float-left text-base list-none text-left rounded shadow-lg mt-1 bg-white border'
                }
                style={{ minWidth: '12rem' }}
              >
                {item
                  ? item.map((item) => {
                      const { id, inside, text } = item
                      var link = name + '/' + text

                      return (
                        <li key={id} className='border-b'>
                          <div
                            className={
                              'font-normal block w-full whitespace-nowrap bg-transparent bg-white'
                            }
                          >
                            <Accordion
                              expanded={expanded === id}
                              onChange={handleChange(id)}
                            >
                              <AccordionSummary
                                aria-controls='panel1d-content'
                                id='panel1d-header'
                                className={
                                  'flex relative w-full whitespace-nowrap bg-transparent bg-white'
                                }
                              >
                                <span>{text}</span>
                                <span className='py-0.5 ml-1 justify-right absolute right-3'>
                                  <svg
                                    focusable='false'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    className='w-5 h-5 item-center '
                                  >
                                    <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
                                  </svg>
                                </span>
                              </AccordionSummary>

                              {inside
                                ? inside.map((inside) => {
                                    const { url, text } = inside
                                    return (
                                      <>
                                        <Link to={url}>
                                          <AccordionDetails className='bg-gray-50 hover:bg-gray-200'>
                                            <span className='ml-2'>{text}</span>
                                          </AccordionDetails>
                                        </Link>
                                      </>
                                    )
                                  })
                                : null}
                            </Accordion>
                          </div>
                        </li>
                      )
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Navbar = () => {
  const [cookies, setCookie] = useCookies(['AX01', 'AX02'])
  const login = useSelector((state) => state.login.value)
  const dispatch = useDispatch()

  useEffect(() => {
    let access_token = 'Bearer ' + cookies.AX01
    if (cookies.AX01 != null && cookies.AX02 != null) {
      axios
        .get('https://api.arzwatch.com/api/v1/ManageUser/CurrentUser', {
          headers: {
            Authorization: access_token,
          },
        })
        .then((res) => {
          axios
            .get(
              'https://api.arzwatch.com/api/v1/ManageUser/GetCurrentUserHighestClaim',
              {
                headers: {
                  Authorization: access_token,
                },
              }
            )
            .then((res) => {
              console.log(res.data.data.claimType)
              if (res.data.data.claimType == 'Development') {
                dispatch(
                  loginUser({
                    access_token: cookies.AX01,
                    refresh_token: cookies.AX02,
                    token_type: 'refresh_token',
                    expires_in: 299998,
                    userId: res.data.data.id,
                    claimType: ['Pro', 'Free'],
                  })
                )
              } else if (res.data.data.claimType == 'Pro')
                dispatch(
                  loginUser({
                    access_token: cookies.AX01,
                    refresh_token: cookies.AX02,
                    token_type: 'refresh_token',
                    expires_in: 299998,
                    userId: res.data.data.id,
                    claimType: ['Pro', 'Free'],
                  })
                )
              else
                dispatch(
                  loginUser({
                    access_token: cookies.AX01,
                    refresh_token: cookies.AX02,
                    token_type: 'refresh_token',
                    expires_in: 299998,
                    userId: res.data.data.id,
                    claimType: ['Free'],
                  })
                )
            })
            .catch((error) => {
              console.log(error)
              return Promise.reject({})
            })
        })
        .catch((error) => {
          console.log(error.message)
          if (error.message.includes('401')) {
            let access_token = 'Bearer ' + cookies.AX01
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
    } else if (cookies.AX01 == null) {
      let res1 = 'access token expires'
      console.log(res1)
    }
  }, [])

  const [isItLog, setIsItLog] = useState(true)
  const [UserP, setUserP] = useState(false)
  const { openSidebar, useClickOutside, openAside, closeAside, isAsideOpen } =
    useGlobalContext()
  const [searchDropdown, setSearchDropdown, isSidebarOpen] = useState(false)
  const domNode = useRef()
  const AdotdomNode = useRef()
  const AdotdomNode1 = useRef()
  const [ADropdown, setADropdown] = useState(false)

  const ToolBox = useSelector((state) => state.ToolBox.value)

  const SearchOnChange = () => {
    setSearchDropdown(true)
    useClickOutside(() => {
      setSearchDropdown(false)
    }, domNode)
  }
  const ClickUser = () => {
    useClickOutside(() => {
      setUserP(!UserP)
    }, domNode)
    setUserP(!UserP)
  }

  return (
    <nav className=' fixed w-full bg-white bg-fixed border-b-2 z-40 '>
      <div className='lg:grid mx-auto grid-cols-11 gap-4 2xl:pl-6 xl:pl-6 lg:pl-6 pl-5 lg:h-16 h-14 bg-white'>
        <div className='hidden lg:flex items-end col-span-4 '>
          <ul className='flex justify-right m-0 p-0 block text-lg'>
            <li>
              <NavDropdown name='Charts' />
            </li>
            <li>
              <NavDropdown name='Market' />
            </li>
            <li>
              <NavDropdown name='Screeners' />
            </li>
            <li>
              <NavDropdown item={Assistant} name='Assistant' />
            </li>
          </ul>
        </div>
        <div className='lg:justify-center w-100 lg:w-auto flex my-3 lg:col-span-3'>
          <div className='w-4/12 flex items-center'>
            <button onClick={openSidebar}>
              <svg
                className='lg:hidden '
                width='18'
                height='12'
                viewBox='0 0 18 12'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 12h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z'></path>
              </svg>
            </button>
          </div>
          <div className='w-4/12 flex items-center justify-center'>
            <a className='2xl:block flex lg:hidden' href='#'>
              logo
            </a>
          </div>
          <div className='w-4/12 flex lg:hidden items-center justify-end mr-3'>
            <UserPanel />
          </div>
        </div>
        <div className='lg:flex hidden lg:justify-end items-center col-span-4 relative'>
          <UserPanel />
          <div
            className={
              isItLog ? 'myrtl hidden lg:block' : 'hidden myrtl hidden '
            }
          >
            <button
              className='ml-5 flex justify-end py-5 pr-6 pl-5 hover:bg-gray-100'
              onClick={() => {
                // if (!ToolBox.data.isOpen) {
                //   dispatch(
                //     current({
                //       ...ToolBox.data,
                //       isOpen: true,
                //     })
                //   )
                // } else {
                //   dispatch(
                //     current({
                //       ...ToolBox.data,
                //       isOpen: false,
                //     })
                //   )
                // }
              }}
            >
              <svg
                className='w-5 h-5 '
                width='18'
                height='12'
                viewBox='0 0 18 12'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 12h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z'></path>
              </svg>
            </button>
            <div
              className={
                (UserP ? 'block ' : 'hidden ') +
                'block overflow-auto h-72  dropdown-content w-64 rounded-lg border align-middle'
              }
              id='journal-scroll'
              ref={domNode}
            >
              <div className='h-full flex align-middle'></div>
            </div>
          </div>
          <div className={isItLog ? 'hidden' : ''}>
            <button className='whitespace-nowrap mx-3 hidden lg:flex border border-blue-300 hover:border-blue-500 text-blue-800 py-0.5 px-2 rounded'>
              <Link to='/login'>Sign In</Link>
            </button>
          </div>
          <div className={isItLog ? 'hidden' : ''}>
            <button className='whitespace-nowrap hidden lg:flex break-normal bg-blue-600 hover:bg-blue-500 text-white py-1 px-2 rounded'>
              Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
