import * as React from 'react'
import './index.css'
import $ from 'jquery'
import { widget } from './charting_library'
import axios from 'axios'

function getLanguageFromURL() {
  const regex = new RegExp('[\\?&]lang=([^&#]*)')
  const results = regex.exec(window.location.search)
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export class TVChartContainer extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    containerId: 'tv_chart_container',
    libraryPath: '/charting_library/',
    userId: 'public_user_id',
    fullscreen: false,
    autosize: false,
    studiesOverrides: {},
  }

  tvWidget = null

  componentDidMount() {
    var MyStrategy = null
    var MySignal = this.props.signal

    axios
      .get(
        'https://api.arzwatch.com/api/v1/StrategyColumn/Column?Id=' +
          MySignal.strategy_column_id
      )
      .then((res) => {
        MyStrategy = [res.data.data]

        const PRICE_SCALE = 100000000
        const USER_LANG = 'en'
        const CONTRACT_TYPE = 'PERPETUAL'

        const TV_INTERNALS = [
          '5',
          '15',
          '30',
          '60',
          '120',
          '240',
          '360',
          '720',
          '1440',
          '10080',
          '1d',
          '1w',
        ]
        const bybit_INTERNALS = [
          '5m',
          '15m',
          '30m',
          '1h',
          '2h',
          '4h',
          '6h',
          '12h',
          '1d',
          '1w',
          '1d',
          '1w',
        ]
        const bybit_futures_INTERNALS = [
          '5',
          '15',
          '30',
          '60',
          '120',
          '240',
          '360',
          '720',
          'D',
          'W',
          'D',
          'W',
        ]
        //const coinex_futures_INTERNALS = ['5min', '15min','30min','1hour','2hour','4hour','6hour','12hour','1day','1week','1day','1week'];
        const coinex_futures_INTERNALS = [
          '300',
          '900',
          '1800',
          '3600',
          '7200',
          '14400',
          '21600',
          '43200',
          '86400',
          '604800',
          '86400',
          '604800',
        ]
        const okex_INTERNALS = [
          '300',
          '900',
          '1800',
          '3600',
          '7200',
          '14400',
          '21600',
          '43200',
          '86400',
          '604800',
          '86400',
          '604800',
        ]
        const BINANCE_INTERNALS = [
          '5m',
          '15m',
          '30m',
          '1h',
          '2h',
          '4h',
          '6h',
          '12h',
          '1d',
          '1w',
          '1d',
          '1w',
        ]
        const COINEX_INTERNALS = [
          300, 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400, 604800, 86400,
          604800,
        ]
        const KUCOIN_INTERNALS = [
          '5min',
          '15min',
          '30min',
          '1hour',
          '2hour',
          '4hour',
          '6hour',
          '12hour',
          '1day',
          '1week',
          '1day',
          '1week',
        ]
        const KUCOIN_futures_INTERNALS = [
          '5',
          '15',
          '30',
          '60',
          '120',
          '240',
          '360',
          '720',
          '1440',
          '10080',
          '1440',
          '10080',
        ]
        const DISTANCES = [
          300000, 900000, 1800000, 3600000, 7200000, 14400000, 21600000,
          43200000, 86400000, 604800000, 86400000, 604800000,
        ]

        var multiShape = false
        var SYMBOL
        if (
          MySignal.exchange == 'BinanceSpot' ||
          MySignal.exchange == 'BinanceUSDFutures' ||
          MySignal.exchange == 'BinanceCoinFutures' ||
          MySignal.exchange == 'CoinExSpot' ||
          MySignal.exchange == 'OKExSpot' ||
          MySignal.exchange == 'KucoinSpot'
        ) {
          SYMBOL = MySignal.symbol
        } else SYMBOL = MySignal.symbol.replace('-', '')

        var TIMEFRAME
        if (MySignal.time_frame == 'FiveMinutes') TIMEFRAME = 5
        else if (MySignal.time_frame == 'FifteenMinutes') TIMEFRAME = 15
        else if (MySignal.time_frame == 'OneHour') TIMEFRAME = 60
        else if (MySignal.time_frame == 'FourHour') TIMEFRAME = 240
        else if (MySignal.time_frame == 'OneDay') TIMEFRAME = 1440
        else if (MySignal.time_frame == 'OneWeek') TIMEFRAME = 10080
        else if (MySignal.time_frame == 'OneMonth ') TIMEFRAME = 30240

        const KUCOIN_SYMBOL = MySignal.symbol
        const KUCOIN_futures_SYMBOL = SYMBOL + 'M'
        const bybit_SYMBOL = SYMBOL
        const okex_SYMBOL = MySignal.symbol
        const bybit_futures_SYMBOL = MySignal.symbol
        const coinex_futures_SYMBOL = MySignal.symbol
        const FUTURE_TYPE = ''
        const EXCHANGE = 'kucoin'

        var tv
        var binWsConnnected = false
        var binFutureWsConnnected = false
        var coinexWsConnnected = false
        var okexWsConnnected = false
        var kucoinWsConnnected = false
        var coinexFuturesWsConnnected = false
        var bybitFuturesWsConnnected = false
        var bybitWsConnnected = false
        var kucoinFuturesWsConnnected = false
        // var binWsCurStream = SYMBOL.toLowerCase() + '@kline_' + BINANCE_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)].toLowerCase();
        var coinexFuturesWsCurStream = ''
        var binWsCurStream = ''
        var binFutureWsCurStream = ''
        var coinexWsCurStream = ''
        var kucoinWsCurStream = ''
        var kucoinFuturesWsCurStream = ''
        var bybitFuturesWsCurStream = ''
        var bybitWsCurStream = ''
        var okexWsCurStream = ''
        var wsDataCallback
        var binanceWs
        var binanceFutureWs
        var coinexFuturesWs
        var coinexWs
        var kucoinWs
        var kucoinFuturesWs
        var okexWs
        var bybitWs
        var bybitFuturesWs
        function kucoinWebsocket() {
          var tryConnectAgain

          tryConnectAgain = false
          var ws_ping_timeout = 0
          if (!kucoinWsConnnected) {
            $.ajax({
              method: 'post',
              url: 'https://api.arzwatch.com/api/Kucoin/bullet-public',

              success: function (response) {
                var res = JSON.parse(response).data
                kucoinWs = new WebSocket(
                  `${res.instanceServers[0].endpoint}?token=${res.token}`
                )

                kucoinWs.onopen = function () {
                  console.info('Kucoin WebSocket is start')
                  kucoinWsConnnected = true

                  ws_ping_timeout = setInterval(() => {
                    if (kucoinWs === null) {
                      clearInterval(ws_ping_timeout)
                    } else {
                      kucoinWs.send(
                        JSON.stringify({
                          id: Date.now(),
                          type: 'ping',
                        })
                      )
                    }
                  }, 5000)
                }

                kucoinWs.onping = function (message) {
                  clearTimeout(ws_ping_timeout)
                  ws_ping_timeout = setTimeout(function () {
                    kucoinWs.close()
                  }, 60000)
                }

                kucoinWs.onclose = function () {
                  console.error('Kucoin WebSocket Closed')

                  kucoinWs = null
                  kucoinWsConnnected = false
                }

                kucoinWs.onerror = function (error) {
                  console.error(error)
                }
              },
            })
          }
        }

        function tvDataFeed() {
          this.searchSymbols = function (
            userInput,
            exchange,
            symbolType,
            onResultReadyCallback
          ) {
            console.info('searchSymbols')
          }
          this.resolveSymbol = function (
            symbolName,
            onSymbolResolvedCallback,
            onResolveErrorCallback,
            extension
          ) {
            setTimeout(function () {
              var a = symbolName.split(':')

              const SymbolInfo = {
                name: symbolName,
                ticker: a[0],
                type: 'bitcoin',
                session: '24x7',
                exchange: EXCHANGE.charAt(0).toUpperCase() + EXCHANGE.substr(1),
                // listed_exchange: EXCHANGE.charAt(0).toUpperCase() + EXCHANGE.substr(1),
                timezone: 'Etc/UTC',

                minmov: 1,
                pricescale: PRICE_SCALE,
                minmove2: 0,
                fractional: false,
                has_intraday: true,
                has_daily: true,
                has_weekly_and_monthly: true,
              }

              onSymbolResolvedCallback(SymbolInfo)
            }, 0)
          }
          this.getBars = function (
            symbolInfo,
            resolution,
            time,
            onHistoryCallback,
            onErrorCallback
          ) {
            var _r =
              typeof resolution === 'string'
                ? resolution.toLowerCase()
                : resolution
            var index = TV_INTERNALS.indexOf(_r)

            if (index > -1) {
              if (EXCHANGE == 'binance') {
                var binInter = BINANCE_INTERNALS[index]
                var a = `${symbolInfo.ticker.toUpperCase()}@kline_${binInter}`
                var params = {
                  symbol: symbolInfo.ticker.toUpperCase(),
                  interval: binInter,
                  startTime: time.from * 1000,
                  endTime: time.to * 1000,
                }
                getHistoryFromBn(params, onHistoryCallback)
              } else if (EXCHANGE == 'coinex') {
                var coinexInter = COINEX_INTERNALS[index]
                var a = `${symbolInfo.ticker.toUpperCase()}@kline_${coinexInter}`
                var params = {
                  symbol: symbolInfo.ticker.toUpperCase(),
                  interval: coinexInter,
                  startTime: time.from * 1000,
                  endTime: time.to * 1000,
                }
                getHistoryFromCoinex(params, onHistoryCallback)
              } else if (EXCHANGE == 'binance-futures') {
                var binInter = BINANCE_INTERNALS[index]
                var a = `${symbolInfo.ticker.toUpperCase()}@kline_${binInter}`
                var params = {
                  symbol: symbolInfo.ticker.toUpperCase(),
                  interval: binInter,
                  startTime: time.from * 1000,
                  endTime: time.to * 1000,
                }
                getHistoryFromBinanceFuture(params, onHistoryCallback)
              } else if (EXCHANGE == 'kucoin') {
                var kucoinInter = KUCOIN_INTERNALS[index]
                var a = `${KUCOIN_SYMBOL}-${kucoinInter}`
                var params = {
                  symbol: KUCOIN_SYMBOL,
                  interval: kucoinInter,
                  startTime: time.from * 1000,
                  endTime: time.to * 1000,
                }
                getHistoryFromKucoin(params, onHistoryCallback)
              }
              //  else if (EXCHANGE == 'kucoin-futures') {
              //   var kucoinInter = KUCOIN_futures_INTERNALS[index]
              //   var a = `${KUCOIN_futures_SYMBOL}-${kucoinInter}`
              //   var params = {
              //     symbol: KUCOIN_futures_SYMBOL,
              //     interval: kucoinInter,
              //     startTime: time.from * 1000,
              //     endTime: time.to * 1000,
              //   }

              //   getHistoryFromKucoinFutures(params, onHistoryCallback)
              // }
              else if (EXCHANGE == 'bybit') {
                var bybitInter = bybit_INTERNALS[index]
                var a = `${bybit_SYMBOL}-${bybitInter}`
                var params = {
                  symbol: bybit_SYMBOL,
                  interval: bybitInter,
                  startTime: time.from * 1000,
                  endTime: time.to * 1000,
                }
                getHistoryFromBybit(params, onHistoryCallback)
              }
              // else if (EXCHANGE == 'bybit-futures') {
              //   var bybitFuturesInter = bybit_futures_INTERNALS[index]
              //   var a = `${bybit_futures_SYMBOL}-${bybitFuturesInter}`
              //   var params = {
              //     symbol: bybit_futures_SYMBOL,
              //     interval: bybitFuturesInter,
              //     startTime: time.from,
              //     endTime: time.to,
              //   }

              //   getHistoryFromBybitFutures(params, onHistoryCallback)
              // }
              else if (EXCHANGE == 'okex') {
                var okexInter = okex_INTERNALS[index]
                var a = `${okex_SYMBOL}-${okexInter}`
                var params = {
                  symbol: okex_SYMBOL,
                  interval: okexInter,
                  startTime: time.from * 1000,
                  endTime: time.to * 1000,
                }
                getHistoryFromOkex(params, onHistoryCallback)
              }
              // else if (EXCHANGE == 'coinex-futures') {
              //   var coinexFuturesInter = coinex_futures_INTERNALS[index]
              //   var a = `${coinex_futures_SYMBOL}-${coinexFuturesInter}`
              //   var params = {
              //     symbol: coinex_futures_SYMBOL,
              //     interval: coinexFuturesInter,
              //     startTime: time.from,
              //     endTime: time.to,
              //   }
              //   getHistoryFromCoinexFutures(params, onHistoryCallback)
              // }
            }
          }
          this.subscribeBars = function (
            symbolInfo,
            resolution,
            onRealtimeCallback,
            subscriberUID,
            onResetCacheNeededCallback
          ) {
            function rest() {
              if (EXCHANGE == 'binance') {
                if (!binWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var binInter = BINANCE_INTERNALS[index]
                var a = `${symbolInfo.ticker.toLowerCase()}@kline_${binInter}`

                if (a != binWsCurStream) {
                  binanceWs.send(
                    JSON.stringify({
                      method: 'UNSUBSCRIBE',
                      params: [binWsCurStream],
                      id: 1,
                    })
                  )

                  binWsCurStream = a

                  binanceWs.send(
                    JSON.stringify({
                      method: 'SUBSCRIBE',
                      params: [a],
                      id: 1,
                    })
                  )
                }
                wsDataCallback = onRealtimeCallback
              } else if (EXCHANGE == 'coinex') {
                if (!coinexWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var coinexInter = COINEX_INTERNALS[index]
                var a = `${SYMBOL},${
                  COINEX_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)]
                }`

                if (a != coinexWsCurStream) {
                  coinexWs.send(
                    JSON.stringify({
                      method: 'kline.unsubscribe',
                      params: [coinexWsCurStream],
                      id: 3,
                    })
                  )

                  binWsCurStream = a

                  coinexWs.send(
                    JSON.stringify({
                      method: 'kline.subscribe',
                      params: [a],
                      id: 1,
                    })
                  )
                }

                wsDataCallback = onRealtimeCallback
              } else if (EXCHANGE == 'binance-futures') {
                if (!binFutureWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var binInter = BINANCE_INTERNALS[index]
                var a = `${symbolInfo.ticker.toLowerCase()}_perpetual@continuousKline_${binInter}`

                if (a != binFutureWsCurStream) {
                  binanceFutureWs.send(
                    JSON.stringify({
                      method: 'UNSUBSCRIBE',
                      params: [binFutureWsCurStream],
                      id: 1,
                    })
                  )

                  binFutureWsCurStream = a

                  binanceFutureWs.send(
                    JSON.stringify({
                      method: 'SUBSCRIBE',
                      params: [a],
                      id: 1,
                    })
                  )
                }
                wsDataCallback = onRealtimeCallback
              } else if (EXCHANGE == 'kucoin') {
                if (!kucoinWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var kucoinInter = KUCOIN_INTERNALS[index]
                var a = `${KUCOIN_SYMBOL}_${kucoinInter}`

                if (a != kucoinWsCurStream) {
                  kucoinWs.send(
                    JSON.stringify({
                      id: Date.now(),
                      type: 'unsubscribe',
                      topic: '/market/candles:' + kucoinWsCurStream,
                      response: true,
                    })
                  )

                  kucoinWsCurStream = a

                  kucoinWs.send(
                    JSON.stringify({
                      id: Date.now(),
                      type: 'subscribe',
                      topic: '/market/candles:' + kucoinWsCurStream,
                      response: true,
                    })
                  )
                }
                wsDataCallback = onRealtimeCallback
              } else if (EXCHANGE == 'kucoin-futures') {
                if (!kucoinFuturesWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var kucoinInter = KUCOIN_futures_INTERNALS[index]
                var a = `${KUCOIN_futures_SYMBOL}_${kucoinInter}`

                if (a != kucoinFuturesWsCurStream) {
                  if (kucoinFuturesWsCurStream) {
                    kucoinFuturesWs.send(
                      JSON.stringify({
                        id: Date.now(),
                        type: 'unsubscribe',
                        topic:
                          '/contractMarket/candle:' + kucoinFuturesWsCurStream,
                        response: true,
                      })
                    )
                  }

                  kucoinFuturesWsCurStream = a

                  kucoinFuturesWs.send(
                    JSON.stringify({
                      id: Date.now(),
                      type: 'subscribe',
                      topic:
                        '/contractMarket/candle:' + kucoinFuturesWsCurStream,
                      response: true,
                    })
                  )
                }
                wsDataCallback = onRealtimeCallback
              } else if (EXCHANGE == 'bybit') {
                if (!bybitWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var bybitInter = bybit_INTERNALS[index]
                var a = `${bybit_SYMBOL}_${bybitInter}`

                if (a != bybitWsCurStream) {
                  var b = bybitWsCurStream.split('_')
                  bybitWs.send(
                    JSON.stringify({
                      topic: 'kline',
                      event: 'cancel',
                      params: {
                        symbol: b[0],
                        klineType: b[1],
                        binary: false,
                      },
                    })
                  )

                  bybitWsCurStream = a

                  bybitWs.send(
                    JSON.stringify({
                      topic: 'kline',
                      event: 'sub',
                      params: {
                        symbol: bybit_SYMBOL,
                        klineType: bybitInter,
                        binary: false,
                      },
                    })
                  )
                }
                wsDataCallback = onRealtimeCallback
              } else if (EXCHANGE == 'bybit-futures') {
                if (!bybitFuturesWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var bybitFutureInter = bybit_futures_INTERNALS[index]
                var a = `${bybit_futures_SYMBOL}_${bybitFutureInter}`

                if (a != bybitFuturesWsCurStream) {
                  var b = bybitWsCurStream.split('_')
                  bybitFuturesWs.send(
                    JSON.stringify({
                      op: 'unsubscribe',
                      args: ['candle.' + b[1] + '.' + b[0]],
                    })
                  )

                  bybitFuturesWsCurStream = a

                  bybitFuturesWs.send(
                    JSON.stringify({
                      op: 'subscribe',
                      args: [
                        'candle.' +
                          bybitFutureInter +
                          '.' +
                          bybit_futures_SYMBOL,
                      ],
                    })
                  )
                }
                wsDataCallback = onRealtimeCallback
              } else if (EXCHANGE == 'okex') {
                if (!okexWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var okexInter = okex_INTERNALS[index]
                var a = `${okex_SYMBOL}_${okexInter}`

                if (a != okexWsCurStream) {
                  var b = bybitWsCurStream.split('_')
                  okexWs.send(
                    JSON.stringify({
                      op: 'unsubscribe',
                      args: ['spot/candle' + b[1] + 's:' + b[0]],
                    })
                  )

                  okexWsCurStream = a

                  okexWs.send(
                    JSON.stringify({
                      op: 'subscribe',
                      args: ['spot/candle' + okexInter + 's:' + okex_SYMBOL],
                    })
                  )
                }
                wsDataCallback = onRealtimeCallback
              } else if (EXCHANGE == 'coinex-futures') {
                if (!coinexFuturesWsConnnected) {
                  return setTimeout(rest, 1000)
                }

                var coinex_futuresInter = coinex_futures_INTERNALS[index]
                var a = `${coinex_futures_SYMBOL}_${coinex_futuresInter}`

                if (a != coinexFuturesWsCurStream) {
                  var b = coinexFuturesWsCurStream.split('_')
                  coinexFuturesWs.send(
                    JSON.stringify({
                      method: 'kline.unsubscribe',
                      params: [b[0], parseInt(b[1])],
                      id: Date.now(),
                    })
                  )

                  coinexFuturesWsCurStream = a

                  coinexFuturesWs.send(
                    JSON.stringify({
                      method: 'kline.subscribe',
                      params: [
                        coinex_futures_SYMBOL,
                        parseInt(coinex_futuresInter),
                      ],
                      id: Date.now(),
                    })
                  )
                }
                wsDataCallback = onRealtimeCallback
              }
            }

            var index = TV_INTERNALS.indexOf(resolution)
            if (index > -1) {
              rest()
            }

            removeAllShapes(tv)

            if (resolution == TIMEFRAME) {
              drawDescriptions(tvWidget, MySignal)
            }
          }

          this.unsubscribeBars = function (subscriberUID) {
            console.info('unsubscribeBars')

            removeAllShapes(tv)
          }
          this.getMarks = function (
            symbolInfo,
            from,
            to,
            onDataCallback,
            resolution
          ) {
            console.info('getMarks')
          }
          this.getTimescaleMarks = function (
            symbolInfo,
            from,
            to,
            onDataCallback,
            resolution
          ) {
            console.info('getTimescaleMarks')
          }
          this.getServerTime = function (callback) {
            if (EXCHANGE == 'coinex' || EXCHANGE == 'coinex-futures') {
              getTimeFromCoinex(callback)
            } else if (EXCHANGE == 'binance' || EXCHANGE == 'binance-futures') {
              getTimeFromBn(callback)
            } else if (EXCHANGE == 'kucoin' || EXCHANGE == 'kucoin-futures') {
              getTimeFromKcoin(callback)
            } else if (EXCHANGE == 'bybit' || EXCHANGE == 'bybit-futures') {
              getTimeFromBybit(callback)
            } else if (EXCHANGE == 'okex') {
              getTimeFromOkex(callback)
            }
          }
          this.onReady = function (callback) {
            setTimeout(function () {
              const configurationData = {
                /*
								supports_search:false,
								supports_group_request:false,
								exchanges: [],
								symbols_types :[],
								*/
                supported_resolutions: [
                  '5',
                  '15',
                  '30',
                  '60',
                  '120',
                  '240',
                  '360',
                  '720',
                  '1D',
                  '1W',
                ],
                currency_codes: ['USD'],
                /*
								supports_marks:false,
								supports_timescale_marks:false,
								*/
                supports_time: true,
              }

              callback(configurationData)
            }, 0)
          }
        }

        function getTimeFromBn(callback) {
          $.ajax({
            url: 'https://data.arzdigital.com/bnapi01/api/v3/time',
            //url:'https://bnapi01.arzdigital.com/api/v3/time',
            success: function (time) {
              time = Math.floor(time.serverTime / 1000)

              callback(time)
            },
            error: function () {
              setTimeout(function () {
                getTimeFromBn(callback)
              }, 5000)
            },
          })
        }
        function getTimeFromKcoin(callback) {
          // getTimeFromBn(callback);return;
          $.ajax({
            url: 'https://api.arzwatch.com/api/Kucoin/ServerTime',
            success: function (time) {
              time = Math.floor(JSON.parse(time).data / 1000)

              callback(time)
            },
            error: function () {
              setTimeout(function () {
                getTimeFromKcoin(callback)
              }, 5000)
            },
          })
        }
        function getTimeFromCoinex(callback) {
          var time = false

          if (coinexWsConnnected && typeof coinexWs !== 'undefined') {
            coinexWs.send('{"id":12,"method":"server.time","params":[]}')

            coinexWs.onTimeMessage = function (message) {
              try {
                if (typeof message === 'string') {
                  message = JSON.parse(message)
                }

                if (
                  message.result &&
                  message.error == null &&
                  time === false &&
                  message.id == 12
                ) {
                  time = true
                  if (typeof callback === 'function') callback(message.result)
                }
              } catch (err) {
                console.error(err)
              }
            }
          } else {
            setTimeout(function () {
              getTimeFromCoinex(callback)
            }, 1000)
          }
        }
        function getTimeFromBybit(callback) {
          var time = false
          var url = 'https://api.bybit.com' + '/spot/v1/time'

          $.ajax({
            url,
            dataType: 'json',
            success: function (a) {
              time = Math.floor(a.result.serverTime / 1000)

              callback(time)
            },
            error: function () {
              setTimeout(function () {
                getTimeFromBybit(callback)
              }, 5000)
            },
          })
        }

        function getTimeFromOkex(callback) {
          var time = false
          $.ajax({
            url: 'https://data.arzdigital.com/okapi/general/v3/time',
            dataType: 'json',
            success: function (a) {
              time = Math.floor(a.epoch)

              callback(time)
            },
            error: function () {
              setTimeout(function () {
                getTimeFromOkex(callback)
              }, 5000)
            },
          })
        }

        function getHistoryFromBn(params, callback) {
          var url = `https://data.arzdigital.com/bnapi01/api/v3/klines?symbol=${params.symbol}&interval=${params.interval}&startTime=${params.startTime}&limit=1000&endTime=${params.endTime}`

          $.ajax({
            url,
            dataType: 'json',
            success: function (data) {
              if (params.prevHis) {
                params.prevHis = params.prevHis.concat(data)
              } else params.prevHis = data

              var doRest = true

              if (data.length) {
                var lastTime = data[data.length - 1][0]
                if (lastTime < params.endTime) {
                  var diff = params.endTime - lastTime
                  var index = BINANCE_INTERNALS.indexOf(params.interval)
                  if (diff > DISTANCES[index]) {
                    doRest = false

                    params.startTime = lastTime + 1000

                    getHistoryFromBn(params, callback)
                  }
                }
              }
              if (doRest) {
                var bars = []
                for (const a of params.prevHis) {
                  var bar = {
                    time: parseInt(a[0]),
                    open: parseFloat(a[1]),
                    high: parseFloat(a[2]),
                    low: parseFloat(a[3]),
                    close: parseFloat(a[4]),
                    volume: parseFloat(a[5]),
                  }
                  bars.push(bar)
                }
                if (
                  bars.length &&
                  bars[bars.length - 1].time <= params.endTime
                ) {
                  callback(bars, { nextTime: 1 })
                } else {
                  callback([], { noData: true })
                }
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              if (textStatus != 'abort') {
                setTimeout(function () {
                  getHistoryFromBn(params, callback)
                }, 5000)
              }
            },
          })
        }
        function getHistoryFromBinanceFuture(params, callback) {
          var url = ''

          if (FUTURE_TYPE == 'usd-m') {
            url = `https://data.arzdigital.com/bnfapi/v1/continuousKlines?contractType=${CONTRACT_TYPE}&pair=${params.symbol}&interval=${params.interval}&startTime=${params.startTime}&limit=1000&endTime=${params.endTime}`
          } else {
            url = `https://data.arzdigital.com/bndapi/v1/continuousKlines?contractType=${CONTRACT_TYPE}&pair=${params.symbol}&interval=${params.interval}&startTime=${params.startTime}&limit=1000&endTime=${params.endTime}`
          }

          $.ajax({
            url,
            dataType: 'json',
            success: function (data) {
              if (params.prevHis) {
                params.prevHis = params.prevHis.concat(data)
              } else params.prevHis = data

              var doRest = true

              if (data.length) {
                var lastTime = data[data.length - 1][0]
                if (lastTime < params.endTime) {
                  var diff = params.endTime - lastTime
                  var index = BINANCE_INTERNALS.indexOf(params.interval)
                  if (diff > DISTANCES[index]) {
                    doRest = false

                    params.startTime = lastTime + 1000

                    getHistoryFromBinanceFuture(params, callback)
                  }
                }
              }
              if (doRest) {
                var bars = []
                for (const a of params.prevHis) {
                  var bar = {
                    time: parseInt(a[0]),
                    open: parseFloat(a[1]),
                    high: parseFloat(a[2]),
                    low: parseFloat(a[3]),
                    close: parseFloat(a[4]),
                    volume: parseFloat(a[5]),
                  }
                  bars.push(bar)
                }
                if (
                  bars.length &&
                  bars[bars.length - 1].time <= params.endTime
                ) {
                  callback(bars, { nextTime: 1 })
                } else {
                  callback([], { noData: true })
                }
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              if (textStatus != 'abort') {
                setTimeout(function () {
                  getHistoryFromBinanceFuture(params, callback)
                }, 5000)
              }
            },
          })
        }
        function getHistoryFromCoinex(params, callback) {
          var url = `https://data.arzdigital.com/cnxapi/kline?market=${
            params.symbol
          }&interval=${params.interval}&start_time=${parseInt(
            params.startTime / 1000
          )}&limit=1000&end_time=${parseInt(params.endTime / 1000)}`

          $.ajax({
            url,
            dataType: 'json',
            success: function (data) {
              if (data.code == 0 && data.data.length) {
                if (params.prevHis) {
                  params.prevHis = params.prevHis.concat(data.data)
                } else params.prevHis = data.data

                var doRest = true

                if (data.length) {
                  var lastTime = data[data.length - 1][0]
                  if (lastTime < params.endTime) {
                    var diff = params.endTime - lastTime
                    var index = COINEX_INTERNALS.indexOf(params.interval)
                    if (diff > DISTANCES[index]) {
                      doRest = false

                      params.startTime = lastTime + 1000

                      getHistoryFromCoinex(params, callback)
                    }
                  }
                }
                if (doRest) {
                  var bars = []
                  for (const a of params.prevHis) {
                    var bar = {
                      time: parseInt(a[0]) * 1000,
                      open: parseFloat(a[1]),
                      close: parseFloat(a[2]),
                      high: parseFloat(a[3]),
                      low: parseFloat(a[4]),
                      volume: parseFloat(a[5]),
                    }
                    bars.push(bar)
                  }
                  if (
                    bars.length &&
                    bars[bars.length - 1].time <= params.endTime * 1000
                  ) {
                    callback(bars, { nextTime: 1 })
                  } else {
                    callback([], { noData: true })
                  }
                }
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              if (textStatus != 'abort') {
                setTimeout(function () {
                  getHistoryFromCoinex(params, callback)
                }, 5000)
              }
            },
          })
        }
        function getHistoryFromKucoin(params, callback) {
          var url = `https://api.arzwatch.com/api/Kucoin/KlineSpot?timeFrame
=${params.interval}&symbol=${params.symbol}&startTime=${Math.floor(
            params.startTime / 1000
          )}&endTime=${Math.floor(params.endTime / 1000)}`

          $.ajax({
            url,
            dataType: 'json',
            success: function (response) {
              var data = JSON.parse(response).data.reverse()

              if (params.prevHis) {
                params.prevHis = params.prevHis.concat(data)
              } else params.prevHis = data

              var doRest = true

              if (data.length) {
                var lastTime = data[data.length - 1][0]
                if (lastTime < params.endTime) {
                  var diff = params.endTime - lastTime
                  var index = KUCOIN_INTERNALS.indexOf(params.interval)
                  if (diff > DISTANCES[index]) {
                    doRest = false

                    params.startTime = lastTime + 1000

                    getHistoryFromKucoin(params, callback)
                  }
                }
              }
              if (doRest) {
                var bars = []
                for (const a of params.prevHis) {
                  var bar = {
                    time: parseInt(a[0]) * 1000,
                    open: parseFloat(a[1]),
                    close: parseFloat(a[2]),
                    high: parseFloat(a[3]),
                    low: parseFloat(a[4]),
                    volume: parseFloat(a[5]),
                  }
                  bars.push(bar)
                }
                if (
                  bars.length &&
                  bars[bars.length - 1].time <= params.endTime * 1000
                ) {
                  callback(bars, { nextTime: 1 })
                  kucoinWebsocket()
                } else {
                  callback([], { noData: true })
                }
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              if (textStatus != 'abort') {
                setTimeout(function () {
                  getHistoryFromKucoin(params, callback)
                }, 5000)
              }
            },
          })
        }

        // function getHistoryFromKucoinFutures(params, callback) {
        //   var url = `https://data.arzdigital.com/kcfapi/api/v1/kline/query?granularity=${params.interval}&symbol=${params.symbol}&from=${params.startTime}&to=${params.endTime}`

        //   $.ajax({
        //     url,
        //     dataType: 'json',
        //     success: function (response) {
        //       var data = response.data

        //       if (params.prevHis) {
        //         params.prevHis = params.prevHis.concat(data)
        //       } else params.prevHis = data

        //       var doRest = true

        //       if (data.length) {
        //         var eTime = data[data.length - 1][0]

        //         if (eTime < params.endTime) {
        //           var diff = params.endTime - eTime
        //           var index = KUCOIN_futures_INTERNALS.indexOf(params.interval)
        //           if (diff > DISTANCES[index]) {
        //             doRest = false

        //             params.startTime = eTime + 1000

        //             getHistoryFromKucoinFutures(params, callback)
        //           }
        //         }
        //       }
        //       if (doRest) {
        //         var bars = []
        //         for (const a of params.prevHis) {
        //           var bar = {
        //             time: parseInt(a[0]),
        //             open: parseFloat(a[1]),
        //             close: parseFloat(a[4]),
        //             high: parseFloat(a[2]),
        //             low: parseFloat(a[3]),
        //             volume: parseFloat(a[5]),
        //           }

        //           bars.push(bar)
        //         }

        //         if (bars.length && bars[bars.length - 1].time <= params.endTime) {
        //           callback(bars, { nextTime: 1 })
        //         } else {
        //           callback([], { noData: true })
        //         }
        //       }
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //       if (textStatus != 'abort') {
        //         setTimeout(function () {
        //           getHistoryFromKucoinFutures(params, callback)
        //         }, 5000)
        //       }
        //     },
        //   })
        // }

        function getHistoryFromBybit(params, callback) {
          var url =
            'bybit.php?url=' +
            encodeURIComponent(
              `spot/quote/v1/kline?symbol=${params.symbol}&interval=${params.interval}&limit=10000&startTime=${params.startTime}&endTime=${params.endTime}`
            )

          $.ajax({
            url,
            dataType: 'json',
            success: function (response) {
              var data = response.result

              if (params.prevHis) {
                params.prevHis = params.prevHis.concat(data)
              } else params.prevHis = data

              var doRest = true

              if (data.length) {
                var lastTime = data[data.length - 1][0]
                if (lastTime < params.endTime) {
                  var diff = params.endTime - lastTime
                  var index = bybit_INTERNALS.indexOf(params.interval)
                  if (diff > DISTANCES[index]) {
                    doRest = false

                    params.startTime = lastTime + 1000

                    getHistoryFromBybit(params, callback)
                  }
                }
              }
              if (doRest) {
                var bars = []
                for (const a of params.prevHis) {
                  if (a) {
                    var bar = {
                      time: parseInt(a[0]),
                      open: parseFloat(a[1]),
                      close: parseFloat(a[4]),
                      high: parseFloat(a[2]),
                      low: parseFloat(a[3]),
                      volume: parseFloat(a[5]),
                    }
                    bars.push(bar)
                  }
                }

                if (
                  bars.length &&
                  bars[bars.length - 1].time <= params.endTime
                ) {
                  callback(bars, { nextTime: 1 })
                } else {
                  callback([], { noData: true })
                }
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              if (textStatus != 'abort') {
                setTimeout(function () {
                  getHistoryFromBybit(params, callback)
                }, 5000)
              }
            },
          })
        }

        // function getHistoryFromBybitFutures(params, callback) {
        //   var url = `https://data.arzdigital.com/bbapi/public/linear/kline?symbol=${params.symbol}&interval=${params.interval}&limit=200&from=${params.startTime}&to=${params.endTime}`

        //   $.ajax({
        //     url,
        //     dataType: 'json',
        //     success: function (response) {
        //       var data = response.result

        //       if (params.prevHis) {
        //         params.prevHis = params.prevHis.concat(data)
        //       } else params.prevHis = data

        //       var doRest = true

        //       if (data.length) {
        //         var lastTime = data[data.length - 1].start_at

        //         if (lastTime < params.endTime) {
        //           var diff = params.endTime - lastTime
        //           var index = bybit_futures_INTERNALS.indexOf(params.interval)

        //           if (diff > DISTANCES[index] / 1000) {
        //             doRest = false

        //             params.startTime = lastTime + 1

        //             getHistoryFromBybitFutures(params, callback)
        //           }
        //         }
        //       }

        //       if (doRest) {
        //         var bars = []
        //         for (const a of params.prevHis) {
        //           if (a) {
        //             var bar = {
        //               time: parseInt(a.start_at) * 1000,
        //               open: parseFloat(a.open),
        //               close: parseFloat(a.close),
        //               high: parseFloat(a.high),
        //               low: parseFloat(a.low),
        //               volume: parseFloat(a.volume),
        //             }
        //             bars.push(bar)
        //           }
        //         }

        //         if (
        //           bars.length &&
        //           bars[bars.length - 1].time <= params.endTime * 1000
        //         ) {
        //           callback(bars, { nextTime: 1 })
        //         } else {
        //           callback([], { noData: true })
        //         }
        //       }
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //       if (textStatus != 'abort') {
        //         setTimeout(function () {
        //           getHistoryFromBybitFutures(params, callback)
        //         }, 5000)
        //       }
        //     },
        //   })
        // }

        function getHistoryFromOkex(params, callback) {
          var a = new Date(params.startTime)
          var from = a.toISOString()
          a = new Date(params.endTime)
          var to = a.toISOString()

          var url = `https://data.arzdigital.com/okapi/spot/v3/instruments/${params.symbol}/candles?granularity=${params.interval}&start=${from}&end=${to}`

          $.ajax({
            url,
            dataType: 'json',
            success: function (response) {
              var data = response.reverse()

              if (params.prevHis) {
                params.prevHis = params.prevHis.concat(data)
              } else params.prevHis = data

              var doRest = true

              if (data.length) {
                var lastTime = data[data.length - 1][0]
                if (lastTime < params.endTime) {
                  var diff = params.endTime - lastTime
                  var index = okex_INTERNALS.indexOf(params.interval)
                  if (diff > DISTANCES[index]) {
                    doRest = false

                    params.startTime = lastTime + 1000

                    getHistoryFromOkex(params, callback)
                  }
                }
              }
              if (doRest) {
                var bars = []
                for (const a of params.prevHis) {
                  var t = new Date(a[0]).getTime()
                  var bar = {
                    time: t,
                    open: parseFloat(a[1]),
                    close: parseFloat(a[4]),
                    high: parseFloat(a[2]),
                    low: parseFloat(a[3]),
                    volume: parseFloat(a[5]),
                  }
                  bars.push(bar)
                }

                if (
                  bars.length &&
                  bars[bars.length - 1].time <= params.endTime
                ) {
                  callback(bars, { nextTime: 1 })
                } else {
                  callback([], { noData: true })
                }
              }
            },
            error: function (jqXHR, textStatus, errorThrown) {
              if (textStatus != 'abort') {
                setTimeout(function () {
                  getHistoryFromOkex(params, callback)
                }, 5000)
              }
            },
          })
        }

        // function getHistoryFromCoinexFutures(params, callback) {
        //   var url = `https://data.arzdigital.com/cnxres/contract/market/kline?market=${params.symbol}&start_time=${params.startTime}&end_time=${params.endTime}&interval=${params.interval}`

        //   $.ajax({
        //     url,
        //     dataType: 'json',
        //     success: function (response) {
        //       var data = response.data

        //       if (params.prevHis) {
        //         params.prevHis = params.prevHis.concat(data)
        //       } else params.prevHis = data

        //       var doRest = true

        //       if (data.length) {
        //         var lastTime = data[data.length - 1][0]
        //         if (lastTime < params.endTime) {
        //           var diff = params.endTime - lastTime
        //           var index = coinex_futures_INTERNALS.indexOf(params.interval)
        //           if (diff > DISTANCES[index]) {
        //             doRest = false

        //             params.startTime = lastTime + 1000

        //             getHistoryFromCoinexFutures(params, callback)
        //           }
        //         }
        //       }
        //       if (doRest) {
        //         var bars = []
        //         for (const a of params.prevHis) {
        //           var bar = {
        //             time: a[0] * 1000,
        //             open: parseFloat(a[1]),
        //             close: parseFloat(a[2]),
        //             high: parseFloat(a[3]),
        //             low: parseFloat(a[4]),
        //             volume: parseFloat(a[5]),
        //           }
        //           bars.push(bar)
        //         }
        //         if (
        //           bars.length &&
        //           bars[bars.length - 1].time <= params.endTime * 1000
        //         ) {
        //           callback(bars, { nextTime: 1 })
        //         } else {
        //           callback([], { noData: true })
        //         }
        //       }
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //       if (textStatus != 'abort') {
        //         setTimeout(function () {
        //           getHistoryFromCoinexFutures(params, callback)
        //         }, 5000)
        //       }
        //     },
        //   })
        // }

        function removeAllShapes(tv) {}
        function getPoints(signal) {
          const draw = MyStrategy[0].draw

          var result = [],
            m_shape = {
              type: '',
              overrides: {},
              points: [],
              label: [],
            },
            s_shape = {
              type: '',
              overrides: {},
              points: [],
              label: [],
            },
            shape,
            shape2,
            t_shape,
            t,
            d,
            s,
            group

          if (signal) {
            s = signal.strategyid
            t = MyStrategy[0]

            if (signal.recognizer) {
              try {
                group = t.group && t.group.toLowerCase()
                d = MySignal

                shape = Object.assign({}, m_shape)
                shape2 = Object.assign({}, s_shape)

                shape.type = MyStrategy[0].shape
                shape.overrides.linecolor = MyStrategy[0].color

                if (draw == 2 || draw == 3 || draw == 5 || draw == 6) {
                  shape.type = 'vertical_line'
                  Object.keys(d.recognizer).map((key, index) => {
                    shape.points[index] = [
                      {
                        time: Date.parse(d.recognizer[key].date) / 1000,
                        price: d.recognizer[key].value,
                      },
                    ]
                  })
                  shape.overrides.linewidth = 2
                  shape.overrides.linecolor =
                    MyStrategy[0].position == false ? '#f54242' : '#4287f5'
                } else if (draw == 8 || draw == 9 || draw == 10) {
                  var index,
                    points = [],
                    points2 = [],
                    text

                  Object.keys(d.recognizer).map((key, index) => {
                    if (index < 2) {
                      points[index] = {
                        time: Date.parse(d.recognizer[key].date) / 1000,
                        price: d.recognizer[key].value,
                      }
                      shape.label[index] = {
                        text: key,
                        flag: 'arrow_down',
                        flag_color: '#4287f5',
                        point: [points[index]],
                      }
                    } else {
                      multiShape = true
                      points2[index - 2] = {
                        time: Date.parse(d.recognizer[key].date) / 1000,
                        price: d.recognizer[key].value,
                      }
                    }
                  })
                  shape.points.push(points)
                  shape.overrides.linewidth = 2
                  shape.overrides.showLabel = true
                  shape.overrides.linecolor = MyStrategy[0].color

                  if (multiShape) {
                    shape2.type = 'vertical_line'
                    shape2.points.push(points2)
                    shape2.overrides.linewidth = 2
                    shape2.overrides.linecolor = '#4287f5'
                  }
                } else if (
                  draw == 11 ||
                  draw == 13 ||
                  draw == 14 ||
                  draw == 15
                ) {
                  var a,
                    b,
                    points = [],
                    zone = MySignal.zone / 2

                  Object.keys(d.recognizer).map((key, index) => {
                    if (key == 'A') {
                      a = {
                        time: Date.parse(d.recognizer[key].date) / 1000,
                        price: d.recognizer[key].value,
                      }
                    } else if (key == 'B') {
                      b = {
                        time: Date.parse(d.recognizer[key].date) / 1000,
                        price: d.recognizer[key].value,
                      }
                    }
                  })

                  if (typeof a === 'object' && typeof b === 'object') {
                    points[0] = {
                      time: a.time,
                      price: b.price + b.price * zone,
                      bar: 0,
                    }
                    points[1] = {
                      time: Math.floor(new Date().getTime() / 1000),
                      price: a.price - a.price * zone,
                      bar: 0,
                    }

                    shape.label[0] = {
                      text: 'A',
                      flag: MyStrategy[0].position ? 'arrow_up' : 'arrow_down',
                      point: [a],
                    }
                    shape.label[1] = {
                      text: 'B',
                      flag: MyStrategy[0].position ? 'arrow_up' : 'arrow_down',
                      point: [b],
                    }

                    shape.points.push(points)
                  }
                } else if (draw == 16 || draw == 17 || draw == 18) {
                  var points, index
                  points = []
                  Object.keys(d.recognizer).map((key, index) => {
                    points[index] = {
                      time: Date.parse(d.recognizer[key].date) / 1000,
                      price: d.recognizer[key].value,
                      channel: '',
                    }
                  })
                  shape.overrides.backgroundColor =
                    MyStrategy[0].position == false ? '#ffcccb' : '#ADD8E6'
                } else if (draw == 19 || draw == 20) {
                  var index,
                    points = [],
                    t_points = [],
                    t_labels = [],
                    t_shape
                  var a
                  var default_handler = {
                    set: function (target, prop, value) {
                      if (!['coeff', 'visible', 'color'].includes(prop)) {
                        target[prop] = value
                      }
                      return prop
                    },
                  }
                  var visible_handler = {
                    set: function (target, prop, value) {
                      if (prop !== 'visible') {
                        target[prop] = value
                      }
                      return prop
                    },
                  }

                  Object.keys(d.recognizer).map((key, index) => {
                    text = key

                    a = {
                      time: Date.parse(d.recognizer[key].date) / 1000,
                      price: d.recognizer[key].value,
                    }
                    if (index != 2) {
                      points[index] = {
                        time: a.time,
                        price: a.price,
                      }
                    }

                    t_points[index] = {
                      time: a.time,
                      price: a.price,
                    }

                    t_labels[index] = {
                      text: text,
                      flag: t.position == true ? 'arrow_up' : 'arrow_down',
                      point: [t_points[index]],
                    }
                  })

                  result.push({
                    type: 'arrow',
                    id: 'arrow-1',
                    overrides: {
                      linewidth: 3,
                      showLabel: true,
                    },
                    points: [t_points.slice(0, 2)],
                    label: t_labels.slice(0, 2),
                  })

                  result.push({
                    type: 'arrow',
                    id: 'arrow-2',
                    overrides: {
                      linewidth: 3,
                      showLabel: true,
                    },
                    points: [t_points.slice(1)],
                    label: t_labels.slice(1),
                  })
                  shape.points.push(points)

                  if (draw == 19) {
                    shape.overrides = {
                      extendLines: true,
                      trendline: new Proxy({ visible: true }, visible_handler),
                      level1: new Proxy(
                        {
                          visible: true,
                          coeff: 0,
                          color: 'rgb(28, 69, 135)',
                        },
                        default_handler
                      ),
                      level2: new Proxy(
                        {
                          visible: true,
                          coeff: 0.382,
                          color: 'rgb(255, 152, 0)',
                        },
                        default_handler
                      ),
                      level3: new Proxy(
                        {
                          visible: true,
                          coeff: 0.5,
                          color: 'rgb(76, 175, 80)',
                        },
                        default_handler
                      ),
                      level4: new Proxy(
                        {
                          visible: true,
                          coeff: 0.618,
                          color: 'rgb(76, 175, 80)',
                        },
                        default_handler
                      ),
                      level5: new Proxy(
                        {
                          visible: true,
                          coeff: 0.786,
                          color: 'rgb(28, 69, 135)',
                        },
                        default_handler
                      ),
                      level6: new Proxy(
                        {
                          visible: true,
                          coeff: 1,
                          color: 'rgb(255, 0, 64)',
                        },
                        default_handler
                      ),
                    }
                    var _level = 7
                    while (_level < 25) {
                      shape.overrides['level' + _level] = new Proxy(
                        {
                          visible: false,
                          coeff: 0,
                        },
                        visible_handler
                      )
                      _level++
                    }
                  } else if (draw == 20) {
                    shape.overrides = {
                      extendLines: true,
                      trendline: new Proxy({ visible: true }, visible_handler),
                      level1: new Proxy(
                        {
                          visible: true,
                          coeff: 0,
                          color: 'rgb(28, 69, 135)',
                        },
                        default_handler
                      ),
                      level2: new Proxy(
                        {
                          visible: true,
                          coeff: 1,
                          color: 'rgb(255, 152, 0)',
                        },
                        default_handler
                      ),
                      level3: new Proxy(
                        {
                          visible: true,
                          coeff: 1.272,
                          color: 'rgb(76, 175, 80)',
                        },
                        default_handler
                      ),

                      level4: new Proxy(
                        {
                          visible: true,
                          coeff: 1.414,
                          color: 'rgb(255, 255, 0)',
                        },
                        default_handler
                      ),
                      level5: new Proxy(
                        {
                          visible: true,
                          coeff: 1.618,
                          color: 'rgb(255, 0, 255)',
                        },
                        default_handler
                      ),
                      level6: new Proxy(
                        {
                          visible: true,
                          coeff: 2,
                          color: 'rgb(76, 175, 80)',
                        },
                        default_handler
                      ),
                      level7: new Proxy(
                        {
                          visible: true,
                          coeff: 2.272,
                          color: 'rgb(255, 0, 0)',
                        },
                        default_handler
                      ),
                      level8: new Proxy(
                        {
                          visible: true,
                          coeff: 2.414,
                          color: 'rgb(76, 175, 80)',
                        },
                        default_handler
                      ),
                      level9: new Proxy(
                        {
                          visible: true,
                          coeff: 2.618,
                          color: 'rgb(0, 255, 0)',
                        },
                        default_handler
                      ),
                    }
                    var _level = 10
                    while (_level < 25) {
                      shape.overrides['level' + _level] = new Proxy(
                        {
                          visible: false,
                          coeff: 0,
                        },
                        visible_handler
                      )
                      _level++
                    }
                  }

                  window.shape = shape
                } else if (draw == 21) {
                  var index,
                    points = [],
                    t_shape

                  var p

                  t_shape = Object.assign({}, m_shape)
                  t_shape.type = t.shape
                  t_shape.toStudyId = true
                  t_shape.overrides.linecolor = t.color
                  t_shape.overrides.linewidth = 2
                  t_shape.overrides.showLabel = true
                  t_shape.points = [[]]
                  t_shape.label = []

                  Object.keys(d.recognizer).map((key) => {
                    if (key == 'A') {
                      index = 0
                    } else if (key == 'B') {
                      index = 1
                    } else if (key == "A'") {
                      index = 2
                    } else if (key == "B'") {
                      index = 3
                    }
                    if (key == 'A' || key == 'B') {
                      p = points[index] = {
                        time: Date.parse(d.recognizer[key].date) / 1000,
                        price: d.recognizer[key].value,
                      }
                      shape.label[index] = {
                        text: key,
                        flag:
                          MyStrategy[0].position == true
                            ? 'arrow_up'
                            : 'arrow_down',
                        point: [points[index]],
                      }
                    } else {
                      p = {
                        time: Date.parse(d.recognizer[key].date) / 1000,
                        price: d.recognizer[key].value,
                      }

                      t_shape.points[0].push({
                        time: p.time,
                        price: d.recognizer[key].value,
                        bar: d.recognizer[key].value,
                      })

                      t_shape.label[index - 2] = {
                        text: key,
                        flag:
                          MyStrategy[0].position == true
                            ? 'arrow_up'
                            : 'arrow_down',
                        point: [t_shape.points[0][index - 2]],
                      }
                    }
                  })

                  result.push(t_shape)
                  shape.points.push(points)
                  shape.overrides.linewidth = 2
                  shape.overrides.linecolor =
                    MyStrategy[0].position == false ? '#f54242' : '#4287f5'
                  shape.overrides.showLabel = true
                } else if (draw == 22) {
                  Object.keys(d.recognizer).map((key, index) => {
                    shape.points[index] = [
                      {
                        time: Date.parse(d.recognizer[key].date) / 1000,
                        price: d.recognizer[key].value,
                      },
                    ]
                  })
                } else if (draw == 23 || draw == 24 || draw == 25) {
                  var index,
                    points = [],
                    text
                  var value

                  shape.toStudyId = true
                  Object.keys(sortedRecognizer).map((key, index) => {
                    points[index] = {
                      time: Date.parse(d.recognizer[key].date) / 1000,
                      price: d.recognizer[key].value,
                    }
                    shape.label[index] = {
                      text: key,
                      flag: t.position == 'buy' ? 'arrow_up' : 'arrow_down',
                      point: [points[index]],
                    }
                  })

                  shape.points.push(points)
                  shape.overrides.linewidth = 2
                  shape.overrides.linecolor =
                    MyStrategy[0].position == false ? '#f54242' : '#4287f5'
                  shape.overrides.showLabel = true
                } else if (draw == 26) {
                  var points = []
                  var A = d.recognizer[0],
                    B = d.recognizer[1],
                    C = d.recognizer[2]
                  var sortedRecognizer = { A, C, B }

                  Object.keys(sortedRecognizer).map((key, index) => {
                    points[index] = {
                      time: Date.parse(d.recognizer[key].date) / 1000,
                      price: d.recognizer[key].value,
                    }
                  })
                  shape.points.push(points)
                  shape.overrides.linewidth = 2
                  shape.overrides.linecolor =
                    MyStrategy[0].position == false ? '#f54242' : '#4287f5'
                  shape.overrides.extendRight = true
                  shape.overrides.showLabel = true
                  shape.overrides.backgroundColor =
                    MyStrategy[0].position == false ? '#ffcccb' : '#ADD8E6'
                }
              } catch (e) {
                console.error(e)
              }

              result.push(shape)
              result.push(shape2)
            }
          }

          return result
        }

        function drawDescriptions(tv, signal) {
          if (!window.showShapes) {
            setTimeout(function () {
              drawDescriptions(tv, signal)
            }, 500)

            return
          }
          var sid = 0,
            signal,
            current_tab,
            pair,
            timeframe,
            t,
            max = 0,
            shapes,
            shape,
            chart

          chart = tv.activeChart()
          if (!tv.custom_shapes) tv.custom_shapes = {}

          if (signal) {
            shapes = getPoints(signal)

            for (var i in shapes) {
              ;(function (shape) {
                if (shape && shape.type) {
                  tv.custom_shapes[shape.id] = []
                  tv.custom_shapes[shape.id + '-label'] = []

                  if (Array.isArray(shape.points) && shape.points.length) {
                    for (var p of shape.points) {
                      var options = {
                        shape: shape.type,
                        lock: true,
                        overrides: shape.overrides,
                        // ownerStudyId: window.ownerStudyId
                      }

                      if (shape.toStudyId) {
                        options.ownerStudyId = window.ownerStudyId
                      }
                      tv.custom_shapes[shape.id].push(
                        chart.createMultipointShape(p, options)
                      )
                    }
                  }

                  if (shape.label && shape.label.length) {
                    for (var label of shape.label) {
                      if (Array.isArray(label.point) && label.point.length) {
                        var options = {
                          shape: label.flag,
                          lock: true,
                          overrides: {
                            text: label.text,
                            backgroundColor: label.backgroundColor,
                            color: '#4325a7',
                          },
                          // ownerStudyId: window.ownerStudyId
                        }

                        if (shape.toStudyId) {
                          options.ownerStudyId = window.ownerStudyId
                        }
                        tv.custom_shapes[shape.id + '-label'].push(
                          chart.createMultipointShape(label.point, options)
                        )
                      }
                    }
                  }
                } else {
                  for (var label of shape.label) {
                    var options = {
                      shape: label.flag,
                      lock: true,
                      // ownerStudyId: window.ownerStudyId
                    }

                    if (shape.toStudyId) {
                      options.ownerStudyId = window.ownerStudyId
                    }

                    tv.custom_shapes[shape.id + '-label'].push(
                      chart.createMultipointShape(label.point, options)
                    )
                  }
                }
              })(shapes[i])
            }
          }
        }

        const widgetOptions = {
          // debug: true, // uncomment this line to see Library errors and warnings in the console
          fullscreen: false,
          height: 800,
          symbol: SYMBOL,
          interval: TIMEFRAME,
          container_id: this.props.containerId,
          timezone: 'Asia/Tehran',
          allow_symbol_change: false,
          datafeed: new tvDataFeed(),
          library_path: './charting_library/',
          disabled_features: [
            'header_symbol_search',
            'header_screenshot',
            'symbol_search_hot_key',
            'header_widget_dom_node',
            'header_compare',
          ],
          //locale: getParameterByName('lang') || "en",
          //enabled_features: ["study_templates"],
          autosize: true,
          auto_save_delay: 1,
        }

        const tvWidget = new widget(widgetOptions)
        this.tvWidget = tvWidget

        tvWidget.onChartReady(function () {
          var t = this
          var chart = t.activeChart()
          var inputs = []
          var override = {}
          var study
          var value

          for (var strategy of MyStrategy) {
            if (strategy.tradingviewTemplate) {
              study = strategy.tradingviewTemplate.toLowerCase()

              inputs = []
              switch (study) {
                case 'moving average':
                case 'moving average weighted':
                case 'moving average exponential':
                  if (MyStrategy[0].tradingviewValue) {
                    inputs.push(MyStrategy[0].tradingviewValue)
                  }
                  break
              }

              if (inputs.length) {
                Object.keys(inputs).map((index) => {
                  chart
                    .createStudy(
                      strategy.tradingviewTemplate,
                      false,
                      false,
                      inputs[index],
                      null,
                      override
                    )
                    .then(function (en) {
                      window.ownerStudyId = en
                      window.showShapes = true
                    })
                })
              } else {
                chart
                  .createStudy(
                    strategy.tradingviewTemplate,
                    false,
                    false,
                    [],
                    null,
                    override
                  )
                  .then(function (en) {
                    window.ownerStudyId = en
                    window.showShapes = true
                  })
              }
            } else {
              window.showShapes = true
            }
          }

          // tv.getSavedCharts(function(objects){
          // 	var found = false;
          // 	for (var i = objects.length-1; i >= 0; i--){
          // 		var a = objects[i];
          // 		if (a.name == chart_name) {
          // 			found = true;
          // 			tv.loadChartFromServer(a);
          // 			tv.subscribe("chart_loaded", function() {
          // 				doRest();
          // 			});

          // 			break;
          // 		}
          // 	}
          // });

          // function doRest(){

          // 	register_autosave();

          // }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentWillUnmount() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove()
      this.tvWidget = null
    }
  }

  render() {
    return <div id={this.props.containerId} className={'TVChartContainer'} />
  }
}
