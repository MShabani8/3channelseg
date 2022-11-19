import { useGlobalContext } from '../router/context'
import React, { useState, useRef, useEffect, Component } from 'react'
import '../index.css'
import { Puff } from '@agney/react-loading'
import axios from 'axios'
import { createPopper } from '@popperjs/core'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Alert from './Assistant/Alert'
import WatchList from './Assistant/WatchList'
import Box from '@mui/material/Box'
import { current } from '../features/ToolBox'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { Transition } from '@headlessui/react'
import {
  AlertToolModal,
  WatchToolModal,
  AddAlertToolModal,
} from './Assistant/ToolModal'

const ToolBox = () => {
  const ToolBox = useSelector((state) => state.ToolBox.value)
  const dispatch = useDispatch()

  const ToolModal = () => {
    const { isTModalOpen, closeTModal, isAddAlerts } = useGlobalContext()
    if (isTModalOpen)
      return (
        <div className={'modal-overlay show-modal  z-50'}>
          <ClickAwayListener
            onClickAway={() => {
              closeTModal()
            }}
          >
            <Box>
              <Box
                className={
                  ToolBox.data.setWich == 'ALERT' && isAddAlerts
                    ? 'Amodal-container'
                    : 'hidden'
                }
              >
                <AddAlertToolModal />
              </Box>
              <Box
                className={
                  ToolBox.data.setWich == 'ALERT' && !isAddAlerts
                    ? 'Amodal-container'
                    : 'hidden'
                }
              >
                <AlertToolModal />
              </Box>
              <Box
                className={
                  ToolBox.data.setWich == 'WATCH' ? 'modal-container' : 'hidden'
                }
              >
                <WatchToolModal />
              </Box>
            </Box>
          </ClickAwayListener>
        </div>
      )
    else return <></>
  }

  return (
    <>
      <Transition
        className='lg:flex hidden'
        show={ToolBox.data.isOpen}
        id='journal-scroll'
      >
        <ToolModal />
        <aside
          className={
            'h-screen flex flex-col items-center bg-white text-gray-700 shadow h-auto fixed justify-right right-0 z-30 bg-white'
          }
        >
          <container className='inline-flex'>
            {ToolBox.data.ToolBox && ToolBox.data.setWich == 'ALERT' ? (
              <div className={'block w-56 bg-red-100 min-h-screen pt-16 '}>
                <Alert />
              </div>
            ) : (
              <></>
            )}
            {ToolBox.data.ToolBox && ToolBox.data.setWich == 'WATCH' ? (
              <div className={'block w-56  min-h-screen pt-16 z-50'}>
                <WatchList />
              </div>
            ) : (
              <></>
            )}
            <nav
              className={
                !ToolBox.data.ToolBox ? 'flex w-16' : 'flex w-16 border'
              }
            >
              <div className='h-16 flex items-center w-full'></div>
              <ul classname='pt-16'>
                <li className='hover:bg-gray-100 pt-16'>
                  <button
                    className='h-16 px-5 flex flex justify-center items-center w-full
					focus:text-orange-500'
                    onClick={() => {
                      if (
                        !ToolBox.data.ToolBox ||
                        (ToolBox.data.ToolBox &&
                          ToolBox.data.setWich != 'ALERT')
                      ) {
                        dispatch(
                          current({
                            ...ToolBox.data,
                            ToolBox: true,
                            setWich: 'ALERT',
                          })
                        )
                      } else {
                        dispatch(
                          current({
                            ...ToolBox.data,
                            ToolBox: false,
                            setWich: null,
                          })
                        )
                      }
                    }}
                  >
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
                      <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
                    </svg>
                  </button>
                </li>
                <li className='hover:bg-gray-100'>
                  <button
                    className='h-16 px-4 flex flex justify-center items-center w-full
					focus:text-orange-500'
                    onClick={() => {
                      if (
                        !ToolBox.data.ToolBox ||
                        (ToolBox.data.ToolBox &&
                          ToolBox.data.setWich != 'WATCH')
                      ) {
                        dispatch(
                          current({
                            ...ToolBox.data,
                            ToolBox: true,
                            setWich: 'WATCH',
                          })
                        )
                      } else {
                        dispatch(
                          current({
                            ...ToolBox.data,
                            ToolBox: false,
                            setWich: null,
                          })
                        )
                      }
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='w-7 h-8'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                      <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </container>
        </aside>
      </Transition>
    </>
  )
}

export default ToolBox
