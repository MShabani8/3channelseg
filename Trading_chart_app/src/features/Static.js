import { createSlice } from '@reduxjs/toolkit'

export const staticSlice = createSlice({
  name: 'static',
  initialState: {
    value: {
      data: {
        name: 'Trend-Following',
        market: 'Crypto',
        exchanges: ['KucoinSpot'],
        timeFrame: 'OneDay',
        sort: 'Asc',
        columnsConfigs: [
          {
            strategyColumnId: 3,
            passedCandleSearch: {
              min: null,
              max: null,
            },
            distanceSearch: {
              min: null,
              max: null,
            },
          },
          {
            strategyColumnId: 4,
            passedCandleSearch: {
              min: null,
              max: null,
            },
            distanceSearch: {
              min: null,
              max: null,
            },
          },
          {
            strategyColumnId: 39,
            passedCandleSearch: {
              min: null,
              max: null,
            },
            distanceSearch: {
              min: null,
              max: null,
            },
          },
          {
            strategyColumnId: 40,
            passedCandleSearch: {
              min: null,
              max: null,
            },
            distanceSearch: {
              min: null,
              max: null,
            },
          },
          {
            strategyColumnId: 83,
            passedCandleSearch: {
              min: null,
              max: null,
            },
            distanceSearch: {
              min: null,
              max: null,
            },
          },
          {
            strategyColumnId: 84,
            passedCandleSearch: {
              min: null,
              max: null,
            },
            distanceSearch: {
              min: null,
              max: null,
            },
          },
        ],
      },
    },
  },
  reducers: {
    setCols: (state, action) => {
      state.value.data = action.payload
    },
  },
})

export const { setCols } = staticSlice.actions

export default staticSlice.reducer
