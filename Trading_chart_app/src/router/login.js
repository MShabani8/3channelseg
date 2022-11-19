import React, { useState, useRef, useEffect, useCallback } from 'react'

import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { logOut, loginUser } from '../features/Login'
import loginback from '../Backgrounds/Login.jpg'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const history = useNavigate()

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(errorMessage);
  //     dispatch(clearState());
  //   }

  //   if (isSuccess) {
  //     dispatch(clearState());
  //     history.push('/');
  //   }
  // }, [isError, isSuccess]);
  const [cookies, setCookie] = useCookies(['AX01', 'AX02'])

  const login = useSelector((state) => state.login.value)
  const dispatch = useDispatch()
  const [isER, setIsER] = useState('')
  const [ForgetState, setForgetState] = useState(1)
  const [isLogin, setIsLogin] = useState(true)
  const [isSignUp, setIsSignUp] = useState(false)
  const [isForget, setIsForget] = useState(false)
  const [isSuccess, setSuccess] = useState(null)

  const Login = () => {
    const [isUser, setIsUser] = useState(null)
    const [isPass, setIsPass] = useState(null)
    let bodyFormData = new FormData()
    bodyFormData.append('grant_type', 'refresh_token')

    return (
      <>
        <div
          className={
            isLogin
              ? 'bg-white min-h-screen md:w-2/5 w-full flex md:justify-left justify-center items-center'
              : 'hidden'
          }
        >
          <div className='w-72'>
            <div>
              <span className='text-sm text-gray-900'>Welcome back</span>
              <h1 className='text-2xl font-bold'>Login to your account</h1>
            </div>
            <div className='my-3'>
              <label className='block text-md mb-2' for='email'>
                Email or Phone
              </label>
              <input
                className='px-4 w-full border-2 py-2 rounded-md text-sm outline-none'
                name='email'
                type='text'
                placeholder='email / phone'
                onChange={(event) => {
                  setIsUser(event.target.value)
                }}
              />
            </div>
            <div className='mt-5'>
              <label className='block text-md mb-2' for='password'>
                Password
              </label>
              <input
                className={
                  'px-4 w-full border-2 py-2 rounded-md text-sm outline-none' +
                  (isUser ? 'border-red-300' : '')
                }
                type='password'
                name='password'
                placeholder='password'
                onChange={(event) => {
                  setIsPass(event.target.value)
                }}
              />
            </div>

            <div className='flex justify-between mt-3'>
              <button
                onClick={() => {
                  setIsLogin(false)
                  setIsForget(true)
                  setIsSignUp(false)
                  setIsER(null)
                }}
                className='text-sm text-blue-700 hover:underline cursor-pointer'
              >
                Forgot password?
              </button>
            </div>
            <div className={'flex justify-between mt-3'}>
              <span className='text-red-500'>{isER}</span>
            </div>
            <div className=''>
              <button
                onClick={() => {
                  bodyFormData.append('userName', isUser)
                  bodyFormData.append('password', isPass)
                  if (isUser && isPass) {
                    axios
                      .post(
                        'https://api.arzwatch.com/api/v1/Account/Login',
                        bodyFormData,
                        {
                          headers: { 'Content-Type': 'multipart/form-data' },
                        }
                      )
                      .then((res) => {
                        const response = res
                        setIsER('')
                        dispatch(
                          loginUser({
                            access_token: response.data.access_token,
                            refresh_token: response.data.refresh_token,
                            token_type: response.data.token_type,
                            expires_in: response.data.expires_in,
                          })
                        )
                        setCookie('AX01', response.data.access_token, {
                          expire: response.data.expires_in,
                          path: '/',
                        })
                        setCookie('AX02', response.data.refresh_token, {
                          path: '/',
                        })
                        history('/static?m=crypto')
                      })
                      .catch((error) => {
                        console.log(error)
                        // console.clear()
                        setIsER('we cant log you in')
                      })
                  } else {
                    if (!isUser && !isPass) {
                      setIsER('Please complete fields')
                    } else if (!isUser) {
                      setIsER('Please enter your username')
                    } else if (!isPass) {
                      setIsER('Please enter your password')
                    }
                  }
                }}
                className='mt-4 mb-3 w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white py-2 rounded-md transition duration-100'
              >
                Login now
              </button>
              <div className='flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100'>
                <img
                  className=' h-5 cursor-pointer'
                  src='https://i.imgur.com/arC60SB.png'
                  alt=''
                />
                <button>Or sign-in with google</button>
              </div>
            </div>

            <p className='mt-8'>
              {' '}
              Dont have an account?{' '}
              <button
                onClick={() => {
                  setIsLogin(false)
                  setIsForget(false)
                  setIsSignUp(true)
                  setIsER(null)
                }}
                className='cursor-pointer text-sm text-blue-600'
              >
                {' '}
                Join us now
              </button>
            </p>
          </div>
        </div>
      </>
    )
  }
  const SignUp = () => {
    return (
      <>
        {' '}
        <div
          className={
            isSignUp
              ? 'bg-white min-h-screen md:w-2/5 w-full flex md:justify-left justify-center items-center relative'
              : 'hidden'
          }
        >
          <div className='w-72'>
            <div>
              <button
                onClick={() => {
                  setIsLogin(true)
                  setIsForget(false)
                  setIsSignUp(false)
                  setIsER(null)
                }}
                className='block mb-10'
              >
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className=' w-10 h-10'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                  />
                </svg>
              </button>
            </div>
            <div className='my-3'>
              <label className='block text-md mb-2' for='email'>
                Email or Phone
              </label>
              <input
                className='px-4 w-full border-2 py-2 rounded-md text-sm outline-none'
                name='email'
                type='text'
                placeholder='email / phone'
                onChange={(event) => {}}
              />
            </div>

            <div className='my-3'>
              <label className='block text-md mb-2' for='email'>
                Username
              </label>
              <input
                className='px-4 w-full border-2 py-2 rounded-md text-sm outline-none'
                name='email'
                type='text'
                placeholder='Username'
                onChange={(event) => {}}
              />
            </div>
            <div className='mt-5'>
              <label className='block text-md mb-2' for='password'>
                Password
              </label>
              <input
                className={
                  'px-4 w-full border-2 py-2 rounded-md text-sm outline-none'
                }
                type='password'
                name='password'
                placeholder='password'
                onChange={(event) => {}}
              />
            </div>
            <div className={'flex justify-between mt-3'}>
              <span className='text-red-500'>{isER}</span>
            </div>
            <div className=''>
              <button className='mt-4 mb-3 w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white py-2 rounded-md transition duration-100'>
                Sign Up
              </button>
              <div className='flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100'>
                <img
                  className=' h-5 cursor-pointer'
                  src='https://i.imgur.com/arC60SB.png'
                  alt=''
                />
                <button>Or sign-up with google</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  const Forget = () => {
    const State1 = () => {
      return (
        <>
          <div className={ForgetState == 1 ? '' : 'hidden'}>
            <div className='my-3'>
              <label className='block text-md mb-2' for='email'>
                Email or Phone
              </label>
              <input
                className='px-4 w-full border-2 py-2 rounded-md text-sm outline-none'
                name='email'
                type='text'
                placeholder='email / phone'
                onChange={(event) => {}}
              />
            </div>
            <div className={'flex justify-between mt-3'}>
              <span className='text-red-500'>{isER}</span>
            </div>
            <div className=''>
              <button className='mt-4 mb-3 w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white py-2 rounded-md transition duration-100'>
                Next
              </button>
            </div>
          </div>
        </>
      )
    }
    const State2 = () => {
      return (
        <>
          <div className={ForgetState == 2 ? '' : 'hidden'}>
            <div className='my-3'>
              <label className='block text-md mb-2' for='email'>
                state2 or Phone
              </label>
              <input
                className='px-4 w-full border-2 py-2 rounded-md text-sm outline-none'
                name='email'
                type='text'
                placeholder='email / phone'
                onChange={(event) => {}}
              />
            </div>
            <div className={'flex justify-between mt-3'}>
              <span className='text-red-500'>{isER}</span>
            </div>
            <div className=''>
              <button className='mt-4 mb-3 w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white py-2 rounded-md transition duration-100'>
                Next
              </button>
            </div>
          </div>
        </>
      )
    }
    const State3 = () => {
      return (
        <>
          {' '}
          <div className={ForgetState == 3 ? '' : 'hidden'}>
            <div className='my-3'>
              <label className='block text-md mb-2' for='email'>
                New Password
              </label>
              <input
                className='px-4 w-full border-2 py-2 rounded-md text-sm outline-none'
                name='email'
                type='text'
                placeholder='email / phone'
                onChange={(event) => {}}
              />
            </div>
            <input
              className='px-4 w-full border-2 py-2 rounded-md text-sm outline-none'
              name='email'
              type='text'
              placeholder='email / phone'
              onChange={(event) => {}}
            />

            <div className={'flex justify-between mt-3'}>
              <span className='text-green-500'>{isSuccess}</span>
            </div>
            <div className=''>
              <button className='mt-4 mb-3 w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white py-2 rounded-md transition duration-100'>
                Next
              </button>
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        {' '}
        <div
          className={
            isForget
              ? 'bg-white min-h-screen md:w-2/5 w-full flex md:justify-left justify-center items-center'
              : 'hidden'
          }
        >
          {' '}
          <div className='w-72'>
            <div>
              <button
                onClick={() => {
                  setIsLogin(true)
                  setIsForget(false)
                  setIsSignUp(false)
                  setIsER(null)
                }}
                className='block mb-10'
              >
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className=' w-10 h-10'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                  />
                </svg>
              </button>
            </div>
            <State1 />
            <State2 />
            <State3 />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='min-h-screen bg-no-repeat bg-cover bg-center'>
        <div className='flex justify-end'>
          <div className='md:w-3/5 w-0 h-screen '>
            <img src={loginback} className='w-full h-full' />
          </div>
          <Login />
          <SignUp />
          <Forget />
        </div>
      </div>
    </>
  )
}

export default LogIn
