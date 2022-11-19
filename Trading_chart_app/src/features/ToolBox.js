import { createSlice } from '@reduxjs/toolkit'

export const ToolBoxSlice = createSlice({
  name: 'ToolBox',
  initialState: {
    value: {
      data: {
        isOpen: false,
        ToolBox: false,
        setWich: null,
      },
    },
  },
  reducers: {
    current: (state, action) => {
      state.value.data = action.payload
    },
  },
})

export const { current } = ToolBoxSlice.actions

export default ToolBoxSlice.reducer
