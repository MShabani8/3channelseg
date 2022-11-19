import { createSlice } from '@reduxjs/toolkit'

export const AlertCondSlice = createSlice({
  name: 'AlertCond',
  initialState: {
    value: {
      data: {},
    },
  },
  reducers: {
    getCond: (state, action) => {
      state.value.data = action.payload
    },
  },
})

export const { getCond } = AlertCondSlice.actions

export default AlertCondSlice.reducer
