import { createSlice } from '@reduxjs/toolkit'

export const AlertSlice = createSlice({
  name: 'Alerts',
  initialState: {
    value: {
      data: {
        id: null,
      },
      reRender: false,
      MaxDate: null,
    },
  },
  reducers: {
    getId: (state, action) => {
      state.value.data = action.payload
    },
    trigger: (state, action) => {
      state.value.reRender = action.payload
    },
    setMaxDate: (state, action) => {
      state.value.MaxDate = action.payload
    },
    removeId: (state) => {
      state.value.data = {
        id: null,
      }
    },
  },
})

export const { getId, removeId, trigger, setMaxDate } = AlertSlice.actions

export default AlertSlice.reducer
