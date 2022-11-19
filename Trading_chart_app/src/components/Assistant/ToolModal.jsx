import { useGlobalContext } from '../../router/context'
import React, { useState, useRef, useEffect } from 'react'
import Select from '../Select/MiniSelect'
import CSelect from '../Select/CSelect'
import { count, timeframe, AlertTypes } from '../../FrontData'
import defaultpng from '../../coins/default.png'
import '../../index.css'
import { Puff } from '@agney/react-loading'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { getId, removeId, trigger } from '../../features/Alert'
import DatePicker from '../Date_Time'
import { useDispatch } from 'react-redux'
import moment from 'moment'

const AlertToolModal = () => {
  const { closeTModal } = useGlobalContext()
  const [AlertType, setAlertType] = useState('')
  const [IsLoading, setIsLoading] = useState(true)
  const [Data, setData] = useState(null)
  const [Cond, setCond] = useState([])
  const [SelectCond, setSelectCond] = useState([{ id: -1, name: '' }])
  const [Error, setError] = useState(null)

  const dispatch = useDispatch()
  const login = useSelector((state) => state.login.value)
  const AlertId = useSelector((state) => state.Alerts.value)
  const AlertCond = useSelector((state) => state.AlertCond.value)
  const [EditedData, setEditedData] = useState({
    alertType: '',
    conditionId: null,
    expiryDate: '',
    name: '',
  })

  useEffect(() => {
    if (AlertId.data.id != null) {
      const query = new URLSearchParams({
        id: AlertId.data.id,
      })
      const url =
        'https://api.arzwatch.com/api/v1/Alert' + '?' + query.toString()
      console.log(url)
      let access_token = 'Bearer ' + login.data.access_token
      axios
        .get(url, {
          headers: {
            Authorization: access_token,
          },
        })
        .then((res) => {
          setEditedData({
            ...EditedData,
            id: AlertId.data.id,
            alertType: res.data.data.alertType,
            conditionId: res.data.data.conditionId,
            expiryDate: res.data.data.expiryDate,
            name: res.data.data.name,
          })
          setData(res.data.data)
          dispatch(removeId())
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error.message)
          return Promise.reject({})
        })
    }
  }, [])

  if (!IsLoading) {
    const CreateDate = Data.createdDate
    const ExpireDate = Data.expiryDate
    console.log(CreateDate)

    //    "id": 0,
    // "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    // "alertType": "StaticStrategy",
    // "conditionId": 0,
    // "createdDate": "2021-11-12T16:01:31.152Z",
    // "expiryDate": "2021-11-12T16:01:31.152Z",
    // "alertActions": "string",
    // "name": "string",
    // "isActive": true,
    // "conditionName": "string"
    return (
      <div className='Amodal-container shadow-lg border z-30 w-full relative'>
        <form className='w-full mx-8 mt-7 relative' id='form' novalidate>
          <p className='text-2xl text-gray-600 mb-3'>Edit Alert</p>
          <div className='relative z-0 w-full mb-5'>
            <input
              type='text'
              name='name'
              placeholder={Data.name}
              required
              className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 border-blue-300'
              onChange={(event) => {
                setEditedData({ ...EditedData, name: event.target.value })
              }}
            />
            <label
              for='name'
              className='absolute duration-300 top-3 text-gray-400 -z-1 origin-0 '
            ></label>
          </div>

          <fieldset className='relative z-50 w-full p-px mb-3'>
            <legend className='text-gray-500 transform scale-75  origin-0'>
              Alert Type
            </legend>
            <Select
              options={AlertTypes}
              selectedOption={AlertType}
              handelChange={(event) => {
                setAlertType(event)
                setEditedData({ ...EditedData, alertType: event.value })
                const query = new URLSearchParams({
                  AlertType: event.value,
                })
                let access_token = 'Bearer ' + login.data.access_token
                const url =
                  'https://api.arzwatch.com/api/v1/Alert/ComboBox' +
                  '?' +
                  query.toString()
                axios
                  .get(url, {
                    headers: {
                      Authorization: access_token,
                    },
                  })
                  .then((res) => {
                    AlertCond.data.data.map((obj) => {
                      res.data.data = res.data.data.filter(
                        (item) => item.id != obj.conditionId
                      )
                    })
                    setCond(res.data.data)
                    setSelectCond([{ id: -1, name: '' }])
                  })
                  .catch((error) => {
                    console.log(error.message)
                    return Promise.reject({})
                  })
              }}
            />
            <div className='pt-6 pb-3'>
              <legend className='text-gray-500 transform scale-75  origin-0'>
                Conditions
              </legend>
              <CSelect
                options={Cond}
                selectedOption={SelectCond}
                handelChange={(event) => {
                  setSelectCond(event)
                  setEditedData({ ...EditedData, conditionId: event.id })
                }}
              />
            </div>
          </fieldset>
          <fieldset className='relative z-40 w-full p-px mb-2'>
            <legend className='text-gray-500 whitespace-nowrap mx-0 transform scale-75 origin-0'>
              Created Time-Date :
            </legend>
            <div className='relative z-40 w-full mb-5 flex mx-0'>
              <div className='block space-x-0'>
                <DatePicker
                  className='mt-1'
                  Value={CreateDate}
                  Disabled={true}
                />
              </div>
              <span className='text-sm text-red-600 hidden' id='error'>
                Date is required
              </span>
            </div>
          </fieldset>
          <fieldset className='relative z-30 w-full p-px'>
            <legend className='text-gray-500 whitespace-nowrap mx-0 transform scale-75 origin-0'>
              Expire Time-Date :
            </legend>
            <div className='relative z-30 w-full mb-5 flex mx-0'>
              <div className='flex space-x-0 '>
                <DatePicker
                  className='mt-2'
                  Value={ExpireDate}
                  Disabled={false}
                  handler={(value) => {
                    setEditedData({ ...EditedData, expiryDate: value })
                  }}
                  MaxDateTime={AlertId.MaxDate}
                  MinDateTime={moment().format()}
                />
              </div>
              <span className='text-sm text-red-600 hidden' id='error'>
                Date is required
              </span>
            </div>
          </fieldset>

          <div className='block mt-2 absolute buttom-0'>
            <div className='flex '>
              <div>
                <label className='inline-flex items-center text-red-400'>
                  {Error}
                </label>
              </div>
            </div>
          </div>
        </form>
        <button
          id='button'
          type='button'
          className='absolute text-white bottom-7 left-8 max-w-md px-4 py-2 mt-3 text-lg  transition-all duration-150 ease-linear rounded-md shadow outline-none bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600 hover:shadow-lg focus:outline-none'
          onClick={() => {
            setError(null)
            let access_token = 'Bearer ' + login.data.access_token
            let body = { id: Data.id }
            console.log(body)
            axios
              .delete('https://api.arzwatch.com/api/v1/Alert', {
                headers: {
                  Authorization: access_token,
                },
                data: body,
              })
              .then(() => {
                console.log('deleted')
                dispatch(trigger(!AlertId.reRender))
                closeTModal()
              })
              .catch((error) => {
                console.log(error.message)
                return Promise.reject({})
              })
          }}
        >
          Remove
        </button>
        <button
          id='button'
          type='button'
          className='absolute text-white bottom-7 right-8 max-w-md px-4 py-2 mt-3 text-lg  transition-all duration-150 ease-linear rounded-md shadow outline-none bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600  hover:shadow-lg focus:outline-none'
          onClick={() => {
            if (true) {
              setError(null)
              let access_token = 'Bearer ' + login.data.access_token
              axios
                .put('https://api.arzwatch.com/api/v1/Alert', EditedData, {
                  headers: {
                    Authorization: access_token,
                  },
                })
                .then(() => {
                  console.log('success')
                  dispatch(trigger(true))
                  closeTModal()
                })
                .catch((error) => {
                  console.log(error.message)
                  return Promise.reject({})
                })
            } else setError('invalid name')
          }}
        >
          Save
        </button>
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

const AddAlertToolModal = () => {
  const { closeTModal } = useGlobalContext()
  const [AlertType, setAlertType] = useState('')
  const [IsLoading, setIsLoading] = useState(true)
  const [Cond, setCond] = useState([])
  const [SelectCond, setSelectCond] = useState([{ id: -1, name: '' }])
  const AlertId = useSelector((state) => state.Alerts.value)
  const dispatch = useDispatch()
  const login = useSelector((state) => state.login.value)
  const AlertCond = useSelector((state) => state.AlertCond.value)
  let createDate = new Date()
  console.log(createDate)
  const [AddData, setAddData] = useState({
    alertType: '',
    conditionId: null,
    expiryDate: AlertId.MaxDate,
    createdDate: createDate.toISOString(),
    name: '',
  })
  const [Error, setError] = useState(null)

  return (
    <>
      <div className='Amodal-container shadow-lg border z-30 w-full relative'>
        <form className='w-full mx-8 mt-7 relative' id='form' novalidate>
          <p className='text-2xl text-gray-600 mb-3'>Add Alert</p>
          <div className='relative z-0 w-full mb-5'>
            <input
              type='text'
              name='name'
              placeholder='name'
              required
              className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 border-blue-300'
              onChange={(event) => {
                setAddData({ ...AddData, name: event.target.value })
              }}
            />
            <label
              for='name'
              className='absolute duration-300 top-3 text-gray-400 -z-1 origin-0 '
            ></label>
          </div>

          <fieldset className='relative z-50 w-full p-px mb-3'>
            <legend className='text-gray-500 transform scale-75  origin-0'>
              Alert Type
            </legend>
            <Select
              options={AlertTypes}
              selectedOption={AlertType}
              handelChange={(event) => {
                setAlertType(event)
                setAddData({ ...AddData, alertType: event.value })
                const query = new URLSearchParams({
                  AlertType: event.value,
                })
                let access_token = 'Bearer ' + login.data.access_token
                const url =
                  'https://api.arzwatch.com/api/v1/Alert/ComboBox' +
                  '?' +
                  query.toString()
                axios
                  .get(url, {
                    headers: {
                      Authorization: access_token,
                    },
                  })
                  .then((res) => {
                    AlertCond.data.data.map((obj) => {
                      res.data.data = res.data.data.filter(
                        (item) => item.id != obj.conditionId
                      )
                    })
                    setCond(res.data.data)
                    setSelectCond([{ id: -1, name: '' }])
                  })
                  .catch((error) => {
                    console.log(error.message)
                    return Promise.reject({})
                  })
              }}
            />
            <div className='pt-6 pb-3'>
              <legend className='text-gray-500 transform scale-75  origin-0'>
                Conditions
              </legend>
              <CSelect
                options={Cond}
                selectedOption={SelectCond}
                handelChange={(event) => {
                  setSelectCond(event)
                  setAddData({ ...AddData, conditionId: event.id })
                }}
              />
            </div>
          </fieldset>
          <fieldset className='relative z-30 w-full p-px'>
            <legend className='text-gray-500 whitespace-nowrap mx-0 transform scale-75 origin-0'>
              Expire Time-Date :
            </legend>
            <div className='relative z-30 w-full mb-5 flex mx-0'>
              <div className='flex space-x-0 '>
                <DatePicker
                  className='mt-2'
                  Value={AlertId.MaxDate}
                  Disabled={false}
                  handler={(value) => {
                    setAddData({ ...AddData, expiryDate: value })
                  }}
                  MaxDateTime={AlertId.MaxDate}
                  MinDateTime={moment().format()}
                />
              </div>
              <span className='text-sm text-red-600 hidden' id='error'>
                Date is required
              </span>
            </div>
          </fieldset>

          <div className='block mt-2 absolute buttom-0'>
            <div className='flex '>
              <div>
                <label className='inline-flex items-center text-red-400'>
                  {Error}
                </label>
              </div>
            </div>
          </div>
        </form>

        <button
          id='button'
          type='button'
          className='absolute text-white bottom-7 right-8 max-w-md px-4 py-2 mt-3 text-lg  transition-all duration-150 ease-linear rounded-md shadow outline-none bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600  hover:shadow-lg focus:outline-none'
          onClick={() => {
            if (AddData.name && AddData.conditionId) {
              setError(null)
              let access_token = 'Bearer ' + login.data.access_token
              axios
                .post('https://api.arzwatch.com/api/v1/Alert', AddData, {
                  headers: {
                    Authorization: access_token,
                  },
                })
                .then(() => {
                  console.log('posted')
                  dispatch(trigger(!AlertId.reRender))
                  closeTModal()
                })
                .catch((error) => {
                  console.log(error.message)
                  return Promise.reject({})
                })
            } else setError('invalid name')
          }}
        >
          Save
        </button>
      </div>
    </>
  )
}

const WatchToolModal = () => {
  const [IsLoading, setIsLoading] = useState(false)

  if (!IsLoading) {
    return (
      <div className='modal-container shadow-lg border z-50 w-full relative'>
        <form className='w-full h-full overflow-auto ' id='journal-scroll'>
          <div className='sticky top-0 w-full mx-auto bg-gray-50 p-10 text-gray-800 overflow-hidden z-40'>
            <div className='relative mt-1'>
              <input
                type='text'
                className='w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors'
                placeholder='Search coins...'
              />
              <button className='block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors'>
                <i className='mdi mdi-magnify'></i>
              </button>
              <button
                id='button'
                type='button'
                className='absolute bottom-7 right-8 max-w-md px-4 py-2 mt-3 text-lg  transition-all duration-150 ease-linear rounded-md shadow outline-none bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-600 hover:to-blue-600  hover:shadow-lg focus:outline-none'
              >
                Save
              </button>
            </div>

            <div className='absolute top-0 left-0 w-full h-2 flex'>
              <div className='h-2 bg-blue-500 flex-1'></div>
              <div className='h-2 bg-red-500 flex-1'></div>
              <div className='h-2 bg-yellow-500 flex-1'></div>
              <div className='h-2 bg-blue-500 flex-1'></div>
              <div className='h-2 bg-green-500 flex-1'></div>
              <div className='h-2 bg-red-500 flex-1'></div>
            </div>
          </div>

          <div className='flex-shrink-0 w-full h-full '>
            <table className='w-full pl-12 table-auto'>
              <tbody className='text-gray-600 text-sm font-light'>
                <tr className='border-b border-gray-200 hover:bg-gray-100 flex relative'>
                  <td className='pl-6 py-3 text-left whitespace-nowrap w-56 md:w-80'>
                    <div className='flex items-center '>
                      <span className='w-11 h-9 mr-2 relative'>
                        <img
                          className='pair-image-1 rounded-full w-7 h-7 bg-gray-100 border border-white'
                          src={defaultpng}
                          alt=''
                        ></img>
                        <img
                          className='pair-image-2 rounded-full w-7 h-7 bg-gray-100'
                          src='https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg'
                          alt=''
                        ></img>
                      </span>
                      <span className='font-medium'>
                        Alternative coin
                        <span className='text-xs block text-gray-400'>
                          Alternative coin
                        </span>
                      </span>
                    </div>
                  </td>
                  <input
                    type='checkbox'
                    className='form-checkbox h-6 w-6 my-4 text-blue-500 absolute right-8'
                  />
                </tr>
              </tbody>
            </table>
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

export { WatchToolModal, AlertToolModal, AddAlertToolModal }
