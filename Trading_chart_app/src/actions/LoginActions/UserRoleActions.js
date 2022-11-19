import axios from 'axios'

export const GET_USERROLE_REQUEST = 'GET_USERROLE_REQUEST'
export const GET_USERROLE_SUCCESS = 'GET_USERROLE_SUCCESS'
export const GET_USERROLE_ERROR = 'GET_USERROLE_ERROR'

const getUserRoleSuccess = (payload) => ({
  type: GET_USERROLE_SUCCESS,
  payload,
})

const getUserRoleError = (payload) => ({
  type: GET_USERROLE_ERROR,
  payload,
})

export const getUserRole = () => (dispatch) => {
  dispatch({ type: GET_USERROLE_REQUEST })
  return axios
    .get('api/Trip/GetTrips')
    .then((res) => {
      const response = res.data
      dispatch(getUserRoleSuccess(response))
    })
    .catch((error) => {
      dispatch(getUserRoleError('Something went wrong'))
      return Promise.reject({})
    })
}
