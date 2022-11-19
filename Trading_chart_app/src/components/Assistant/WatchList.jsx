import { useGlobalContext } from '../../router/context'
import { ContextMenuTrigger, ContextMenu } from 'react-contextmenu-lite'
import React, { useState, useRef } from 'react'
import '../../index.css'
import { Puff } from '@agney/react-loading'

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

const WatchList = () => {
  console.log('active')
  const { openTModal } = useGlobalContext()
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

  const WdomNode1 = useRef()
  const WdomNode = useRef()
  const WdotdomNode = useRef()
  const WdotdomNode1 = useRef()

  const [WatchDropdown, setWatchDropdown] = useState(false)
  const [WDotDropdown, setWDotDropdown] = useState(false)
  const [IsLoading, setIsLoading] = useState(false)
  if (!IsLoading) {
    return (
      <>
        <nav className='w-full myheight flex flex-col'>
          <div className='w-full bg-white   border-b flex justify-between items-center pl-3 text-gray-600 focus:outline-none'>
            <span className=' py-4 block items-center w-1/2'>
              <button
                className=' font-medium flex'
                ref={WdomNode}
                onClick={() => {
                  OpenOnChange(
                    WdomNode,
                    WdomNode1,
                    setWatchDropdown,
                    WatchDropdown
                  )
                }}
              >
                Watchlist
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
                  (WatchDropdown ? 'inline-block ' : 'hidden ') +
                  'block overflow-auto max-h-52 dropdown-content w-44 rounded-lg border align-middle z-50'
                }
                id='journal-scroll'
                ref={WdomNode1}
              >
                <div className='h-full block align-middle'>
                  <button className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'>
                    <span className='flex items-center'>
                      <span className='mx-2 font-medium flex'>
                        {' '}
                        <svg
                          viewBox='0 0 100 100'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-3.5 h-4 mr-2 my-auto'
                        >
                          <circle
                            cx='50'
                            cy='50'
                            r='50'
                            fill='#2563EB
'
                          />
                        </svg>
                        tab3
                      </span>
                    </span>
                  </button>
                  <button className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'>
                    <span className='flex items-center'>
                      <span className='mx-2 font-medium flex'>
                        {' '}
                        <svg
                          viewBox='0 0 100 100'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-3.5 h-4 mr-2 my-auto'
                        >
                          <circle
                            cx='50'
                            cy='50'
                            r='50'
                            fill='#2563EB
'
                          />
                        </svg>
                        tab3
                      </span>
                    </span>
                  </button>
                  <button className='w-full flex justify-between items-center border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'>
                    <span className='flex items-center'>
                      <span className='mx-2 font-medium flex'>
                        <svg
                          viewBox='0 0 100 100'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-3.5 h-4 mr-2 my-auto'
                        >
                          <circle
                            cx='50'
                            cy='50'
                            r='50'
                            fill='#2563EB
'
                          />
                        </svg>
                        tab3
                      </span>
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      openTModal()
                      setWatchDropdown(false)
                    }}
                    className='w-full flex justify-between items-center border-t border-b py-3 px-2 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus:outline-none'
                  >
                    <span className='flex items-center'>
                      <span className='mx-2 font-medium'>Add New Tab</span>
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
                </div>
              </div>
            </span>
            <span className=' block items-center w-1/2 text-right '>
              <div className='flex justify-end w-full relative'>
                <button className='flex w-5 justify-self-end mr-3'>
                  <svg
                    focusable='false'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='h-5 '
                    ref={WdotdomNode}
                    onClick={() => {
                      OpenOnChange(
                        WdotdomNode,
                        WdotdomNode1,
                        setWDotDropdown,
                        WDotDropdown
                      )
                    }}
                  >
                    <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
                  </svg>
                </button>
              </div>
              <div
                className={
                  (WDotDropdown ? 'inline-block ' : 'hidden ') +
                  'right-16 overflow-auto dropdown-content text-right w-32  rounded-lg border align-middle z-50 '
                }
                id='journal-scroll'
                ref={WdotdomNode1}
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
            </span>
          </div>
          <div
            className='overflow-y-auto h-full bg-white TopScrollbar'
            id='journal-scroll'
          >
            <container className='Content'>
              <thead className=' flex z-10 WSticky'>
                <tr className='bg-gray-100 text-gray-600 text-xs flex leading-normal divide-x divide-gray-200 border-b'>
                  <th className='pr-2 pl-2 text-center Wcolmn-size flex '>
                    <span className='flex my-auto text-sm mx-auto'>Symb</span>
                  </th>
                  <th className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                    <div className=''>col1</div>
                  </th>
                  <th className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                    <div className=''>col1</div>
                  </th>
                  <th className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                    <div className=''>col1</div>
                  </th>
                </tr>
              </thead>
              <div className=''>
                <div className=' justify-center font-sans '>
                  <div className='w-full '>
                    <div>
                      <table className='min-w-max w-full pl-12 table-auto'>
                        <tbody className='text-gray-600 text-sm font-light'>
                          <ContextMenu id='Watch' className='shadow-none'>
                            <ul>
                              <li className='px-3 py-3'>
                                <button className='mr-2 hover:border-red'>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-5 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                </button>
                                <button className='mx-2'>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-5'
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED
'
                                    />
                                  </svg>
                                </button>
                                <button className='mx-2'>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-5 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24
'
                                    />
                                  </svg>
                                </button>
                                <button className='mx-2'>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-5'
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#DC2626
'
                                    />
                                  </svg>
                                </button>
                                <button className='ml-2'>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-4 h-5'
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#059669'
                                    />
                                  </svg>
                                </button>
                              </li>
                              <li className='px-3 py-3 hover:bg-gray-100'>
                                <button className=''>Remove from list</button>
                              </li>
                            </ul>
                          </ContextMenu>
                          <ContextMenuTrigger id='Watch'>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#2563EB
'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#7C3AED'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#FBBF24'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#DC2626'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                            <tr className='border-b border-gray-200 hover:bg-gray-100 flex'>
                              <td className='pr-2 pl-2 text-center Wcolmn-size flex '>
                                <span className='flex my-auto text-sm mx-auto '>
                                  <svg
                                    viewBox='0 0 100 100'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-3 h-5 mx-1 '
                                  >
                                    <circle
                                      cx='50'
                                      cy='50'
                                      r='50'
                                      fill='#059669'
                                    />
                                  </svg>
                                  Symb
                                </span>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                              <td className=' px-2 py-1.5 text-right Wcolmn-size w-full'>
                                <div className=''>col1</div>
                              </td>
                            </tr>
                          </ContextMenuTrigger>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </container>
          </div>
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

export default WatchList
