import React from 'react'

export const Assistant = [
  {
    id: 1,
    text: 'Static',
    inside: [
      { url: '/static?m=crypto', text: 'crypto' },
      { url: '/static?m=cryptoIndex', text: 'cryptoIndex' },
    ],
  },
  {
    id: 2,
    text: 'Multi-Timeframe',
    inside: [
      { url: '/multiframe?m=crypto', text: 'crypto' },
      { url: '/multiframe?m=cryptoIndex', text: 'cryptoIndex' },
    ],
  },
]

export const Market = [
  {
    id: 1,
    url: '/something1',
    text: 'something1',
  },
  {
    id: 2,
    url: '/something2',
    text: 'something2',
  },
  {
    id: 3,
    url: '/something3',
    text: 'something3',
  },
  {
    id: 4,
    url: '/something4',
    text: 'something4',
  },
]

export const Screeners = [
  {
    id: 1,
    url: '/something1',
    text: 'something1',
  },
  {
    id: 2,
    url: '/something2',
    text: 'something2',
  },
  {
    id: 3,
    url: '/something3',
    text: 'something3',
  },
  {
    id: 4,
    url: '/something4',
    text: 'something4',
  },
]

export const exchangs = [
  {
    id: '1',
    label: 'BinanceSpot',
    value: 'BinanceSpot',
  },
  {
    id: '2',
    label: 'BinanceUSDFutures',
    value: 'BinanceUSDFutures',
  },
  {
    id: '3',
    label: 'BinanceCoinFutures',
    value: 'BinanceCoinFutures',
  },
  {
    id: '4',
    label: 'CoinExSpot',
    value: 'CoinExSpot',
  },
  {
    id: '5',
    label: 'HitBTC',
    value: 'HitBTC',
  },
  {
    id: '6',
    label: 'ByBitSpot',
    value: 'ByBitSpot',
  },
  {
    id: '7',
    label: 'OKExSpot',
    value: 'OKExSpot',
  },
  {
    id: '8',
    label: 'KucoinSpot',
    value: 'KucoinSpot',
  },
  {
    id: '9',
    label: 'FTX ',
    value: 'FTX ',
  },
]

export const AlertTypes = [
  {
    id: '0',
    label: 'StaticStrategy',
    value: 'StaticStrategy',
  },
  {
    id: '1',
    label: 'DynamicStrategy',
    value: 'DynamicStrategy',
  },
]
export const SignalSort = [
  {
    id: '0',
    label: 'A-Z',
    value: 'Asc',
  },
  {
    id: '1',
    label: 'Z-A',
    value: 'Desc',
  },
]

export const timeframe = [
  {
    id: '1',
    label: '5 min',
    value: 'FiveMinutes',
  },
  {
    id: '2',
    label: '15 min',
    value: 'FifteenMinutes',
  },

  {
    id: '4',
    label: '1 hour',
    value: 'OneHour',
  },

  {
    id: '5',
    label: '4 hours',
    value: 'FourHour',
  },

  {
    id: '6',
    label: '1 day',
    value: 'OneDay',
  },
  {
    id: '10',
    label: '1 week',
    value: 'OneWeek',
  },
  {
    id: '11',
    label: '1 mounth',
    value: 'OneMonth',
  },
]

export const DrawId = {
  null: {
    passcandle: 0,
    distance: 0,
  },
  2: {
    passcandle: 0,
    distance: 0,
  },
  3: {
    passcandle: 1,
    distance: 1,
  },
  5: {
    passcandle: 0,
    distance: 0,
  },
  6: {
    passcandle: 1,
    distance: 1,
  },
  8: {
    passcandle: 0,
    distance: 0,
  },
  9: {
    passcandle: 1,
    distance: 1,
  },
  10: {
    passcandle: 0,
    distance: 1,
  },
  11: {
    passcandle: 0,
    distance: 0,
  },
  13: {
    passcandle: 0,
    distance: 0,
  },
  14: {
    passcandle: 1,
    distance: 1,
  },
  15: {
    passcandle: 0,
    distance: 1,
  },
  16: {
    passcandle: 1,
    distance: 1,
  },
  17: {
    passcandle: 1,
    distance: 1,
  },
  18: {
    passcandle: 1,
    distance: 1,
  },
  19: {
    passcandle: 0,
    distance: 1,
  },
  20: {
    passcandle: 0,
    distance: 1,
  },
  21: {
    passcandle: 0,
    distance: 0,
  },
  22: {
    passcandle: 1,
    distance: 0,
  },
}
