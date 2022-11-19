import React, { useState, useRef, useEffect, useCallback } from 'react'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { logOut, loginUser } from '../features/Login'
import loginback from '../Backgrounds/Login.jpg'
import { useCookies } from 'react-cookie'

const Settings = () => {
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
  const [isUser, setIsUser] = useState(null)
  const [isPass, setIsPass] = useState(null)
  const [isER, setIsER] = useState('')
  let bodyFormData = new FormData()
  bodyFormData.append('grant_type', 'refresh_token')
  bodyFormData.append('userName', isUser)
  bodyFormData.append('password', isPass)

  return (
    <>
      <div className='bg-gray-100 lg:pt-16 pt-20 min-h-screen'>
        <div className='container mx-auto p-5'>
          <div className='md:flex no-wrap md:mx-2 '>
            <div className='w-full md:w-3/12 md:mx-2'>
              <div className='bg-white p-3 border-t-4 border-blue-400 rounded-xl'>
                <div className='my-3 flex justify-center items-center'>
                  <div className='object-cover h-32 w-32 bg-red-100 rounded-full'></div>
                </div>
                <div className='p-2'>
                  <h3 className='text-center text-xl text-gray-900 font-medium leading-8'>
                    Name
                  </h3>

                  <table className='text-xs my-3'>
                    <tbody>
                      <tr>
                        <td className='px-2 py-4 text-gray-500 font-semibold'>
                          Access Type
                        </td>
                        <td className='px-2 py-2'>null</td>
                      </tr>
                      <tr>
                        <td className='px-2 py-4 text-gray-500 font-semibold'>
                          Phone
                        </td>
                        <td className='px-2 py-4'>null</td>
                      </tr>
                      <tr>
                        <td className='px-2 py-4 text-gray-500 font-semibold'>
                          Email
                        </td>
                        <td className='px-2 py-4'>null</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='my-4'></div>
            </div>

            <div className='w-full md:w-9/12 lg:mx-1 mx-auto h-auto'>
              <div className='bg-white p-3 shadow-sm rounded-xl'>
                <div className='flex items-center mx-3 mb-3 space-x-2 font-semibold text-gray-900 leading-8'>
                  <span clas='text-green-500'>
                    <svg
                      className='h-5 '
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </span>
                  <span className='tracking-wide'>About</span>
                </div>
                <div className='text-gray-700'>
                  <div className='grid md:grid-cols-2 text-sm'>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-5 font-semibold'>First Name</div>
                      <div className='px-4 py-5'>
                        <input
                          className='border-0 h-7 focus:ring-0 bg-gray-100 flex w-full rounded-xl'
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-5 font-semibold'>Last Name</div>
                      <div className='px-4 py-5'>
                        {' '}
                        <input
                          className='border-0 h-7 focus:ring-0 bg-gray-100 flex w-full rounded-xl'
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-5 font-semibold'>Gender</div>
                      <div className='px-4 py-5'>
                        {' '}
                        <input
                          className='border-0 h-7 focus:ring-0 bg-gray-100 flex w-full rounded-xl'
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-5 font-semibold'>Contact No.</div>
                      <div className='px-4 py-5'>
                        {' '}
                        <input
                          className='border-0 h-7 focus:ring-0 bg-gray-100 flex w-full rounded-xl'
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-5 font-semibold'>
                        Current Address
                      </div>
                      <div className='px-4 py-5'>
                        {' '}
                        <input
                          className='border-0 h-7 focus:ring-0 bg-gray-100 flex w-full rounded-xl'
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-5 font-semibold'>
                        Permanant Address
                      </div>
                      <div className='px-4 py-5'>
                        <input
                          className='border-0 h-7 focus:ring-0 bg-gray-100 flex w-full rounded-xl'
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-5 font-semibold'>Email.</div>
                      <div className='px-4 py-5'>
                        <a
                          className='text-blue-800'
                          href='mailto:jane@example.com'
                        >
                          <input
                            className='border-0 h-7 focus:ring-0 bg-gray-100 flex w-full rounded-xl'
                            type='text'
                            placeholder='name'
                          />
                        </a>
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div className='px-4 py-5 font-semibold'>Birthday</div>
                      <div className='px-4 py-5'>
                        {' '}
                        <input
                          className='border-0 h-7 focus:ring-0 bg-gray-100 flex w-full rounded-xl'
                          type='text'
                          placeholder='name'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full justify-end'>
                    <button
                      type='button'
                      className={
                        true
                          ? 'text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600 rounded-xs px-3 py-2 shadow text-bold  my-3 mx-3 '
                          : 'text-white rounded-md bg-gradient-to-r from-gray-500 to-gray-500 hover:from-blue-600 hover:to-blue-600 rounded-xs px-3 py-2 shadow text-bold  my-3 mx-3 '
                      }
                    >
                      Save
                    </button>
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

export default Settings
