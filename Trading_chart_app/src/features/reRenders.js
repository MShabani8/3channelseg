import { createSlice } from '@reduxjs/toolkit'

export const reRenderSlice = createSlice({
  name: 'reRender',
  initialState: {
    value: {
      data: {
        width: document.body.clientWidth ,
      },
    },
  },
  reducers: {
    setReRender: (state, action) => {
      state.value.data = action.payload
    },
  },
})

export const { setReRender } = reRenderSlice.actions

export default reRenderSlice.reducer
