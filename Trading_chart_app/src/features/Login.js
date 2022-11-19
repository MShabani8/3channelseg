import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: {
      data: {
        access_token: '',
        refresh_token: '',
        token_type: '',
        expires_in: null,
        userId: null,
        claimType: [],
      },
    },
  },
  reducers: {
    loginUser: (state, action) => {
      state.value.data = action.payload
    },
    logOut: (state) => {
      state.value.data = {
        access_token: '',
        refresh_token: '',
        token_type: '',
        expires_in: null,
      }
    },
  },
})

export const { loginUser, logOut } = loginSlice.actions

export default loginSlice.reducer
