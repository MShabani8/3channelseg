import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userRole',
  initialState: {
    value: {
      data: {
        id: 'e8742eeb-832e-ec11-a9af-30e37ae3a485',
        name: 'User',
        normalizedName: 'USER',
        concurrencyStamp: 'a57d4b67-d7f7-4d4e-a627-8d7ac1c37f0e',
      },
      isSuccess: true,
      statusCode: 'Success',
      message: 'Mission accomplished',
    },
  },
  reducers: {
    login: (state, action) => {
      state.value.data = action.payload
    },
  },
})

export const { login } = userSlice.actions

export default userSlice.reducer
