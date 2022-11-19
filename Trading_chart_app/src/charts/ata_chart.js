;(function () {
  const SYMBOL = 'RBTC'
  const KUCOIN_SYMBOL = 'R-BTC'
  const KUCOIN_futures_SYMBOL = 'RBTCM'
  const bybit_SYMBOL = 'RBTC'
  const okex_SYMBOL = 'R-BTC'
  const bybit_futures_SYMBOL = 'RBTC'
  const coinex_futures_SYMBOL = 'RBTC'
  const FUTURE_TYPE = ''
  const CONTRACT_TYPE = 'PERPETUAL'
  const TIMEFRAME = '1440'
  const EXCHANGE = 'kucoin'
  const PRICE_SCALE = 1000000
  const USER_LANG = 'en'
  const ALL_STRATEGIES = {
    1: {
      id: '1',
      parentid: '1',
      name: 'price crosses up kumo',
      display_name: 'price crosses up kumo',
      translate:
        '\u0634\u06a9\u0633\u062a \u0627\u0628\u0631 \u06a9\u0648\u0645\u0648 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'free',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    2: {
      id: '2',
      parentid: '2',
      name: 'price crosses down kumo',
      display_name: 'price crosses down kumo',
      translate:
        '\u0634\u06a9\u0633\u062a \u0627\u0628\u0631 \u06a9\u0648\u0645\u0648 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    3: {
      id: '3',
      parentid: '3',
      name: 'price above kumo',
      display_name: 'price above kumo',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627 \u06a9\u0648\u0645\u0648',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    4: {
      id: '4',
      parentid: '4',
      name: 'price below kumo',
      display_name: 'price below kumo',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    5: {
      id: '5',
      parentid: '5',
      name: 'price above kumo-price crosses up base',
      display_name: 'price above kumo-price crosses up base',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u06a9\u0648\u0645\u0648- \u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    6: {
      id: '6',
      parentid: '6',
      name: 'price below kumo-price crosses down base',
      display_name: 'price below kumo-price crosses down base',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648- \u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    7: {
      id: '7',
      parentid: '7',
      name: 'price above kumo-price above base',
      display_name: 'price above kumo-price above base',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u06a9\u0648\u0645\u0648- \u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0628\u06cc\u0633',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    8: {
      id: '8',
      parentid: '8',
      name: 'price below kumo-price below base',
      display_name: 'price below kumo-price below base',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648- \u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0628\u06cc\u0633',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    9: {
      id: '9',
      parentid: '9',
      name: 'price above kumo-conversion crosses up base',
      display_name: 'price above kumo-conversion crosses up base',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u06a9\u0648\u0645\u0648- \u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    10: {
      id: '10',
      parentid: '10',
      name: 'price below kumo-conversion crosses down base',
      display_name: 'price below kumo-conversion crosses down base',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648- \u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    11: {
      id: '11',
      parentid: '11',
      name: 'price above kumo-conversion above base',
      display_name: 'price above kumo-conversion above base',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u06a9\u0648\u0645\u0648- \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0628\u06cc\u0633',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    12: {
      id: '12',
      parentid: '12',
      name: 'price below kumo-conversion below base',
      display_name: 'price below kumo-conversion below base',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648- \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0628\u06cc\u0633',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    13: {
      id: '13',
      parentid: '13',
      name: 'price above kumo-lead1 crosses up lead2',
      display_name: 'price above kumo-lead1 crosses up lead2',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u06a9\u0648\u0645\u0648- \u0634\u06a9\u0633\u062a \u062e\u0637 \u0644\u06cc\u062f2 \u062a\u0648\u0633\u0637 \u062e\u0637 \u0644\u06cc\u062f1 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    14: {
      id: '14',
      parentid: '14',
      name: 'price below kumo-lead1 crosses down lead2',
      display_name: 'price below kumo-lead1 crosses down lead2',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648- \u0634\u06a9\u0633\u062a \u062e\u0637 \u0644\u06cc\u062f2 \u062a\u0648\u0633\u0637 \u062e\u0637 \u0644\u06cc\u062f1 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    15: {
      id: '15',
      parentid: '15',
      name: 'price above kumo-lead1 above lead2',
      display_name: 'price above kumo-lead1 above lead2',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u06a9\u0648\u0645\u0648- \u062e\u0637 \u0644\u06cc\u062f1 \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0644\u06cc\u062f2',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    16: {
      id: '16',
      parentid: '16',
      name: 'price below kumo-lead2 above lead1',
      display_name: 'price below kumo-lead2 above lead1',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648- \u062e\u0637 \u0644\u06cc\u062f2 \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0644\u06cc\u062f1',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    17: {
      id: '17',
      parentid: '17',
      name: 'price above kumo-lagging crosses up price',
      display_name: 'price above kumo-lagging crosses up price',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u06a9\u0648\u0645\u0648- \u0634\u06a9\u0633\u062a \u0642\u06cc\u0645\u062a \u062a\u0648\u0633\u0637 \u062e\u0637 \u0644\u06af\u06cc\u0646\u06af \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    18: {
      id: '18',
      parentid: '18',
      name: 'price below kumo-lagging crosses down price',
      display_name: 'price below kumo-lagging crosses down price',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648- \u0634\u06a9\u0633\u062a \u0642\u06cc\u0645\u062a \u062a\u0648\u0633\u0637 \u062e\u0637 \u0644\u06af\u06cc\u0646\u06af \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    19: {
      id: '19',
      parentid: '19',
      name: 'price above kumo-lagging above price',
      display_name: 'price above kumo-lagging above price',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u06a9\u0648\u0645\u0648- \u062e\u0637 \u0644\u06af\u06cc\u0646\u06af \u0628\u0627\u0644\u0627\u06cc \u0642\u06cc\u0645\u062a',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    20: {
      id: '20',
      parentid: '20',
      name: 'price below kumo-lagging below price',
      display_name: 'price below kumo-lagging below price',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u06a9\u0648\u0645\u0648- \u062e\u0637 \u0644\u06af\u06cc\u0646\u06af \u067e\u0627\u06cc\u06cc\u0646 \u0642\u06cc\u0645\u062a',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    21: {
      id: '21',
      parentid: '21',
      name: 'price crosses up base',
      display_name: 'price crosses up base',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    22: {
      id: '22',
      parentid: '22',
      name: 'price crosses down base',
      display_name: 'price crosses down base',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    23: {
      id: '23',
      parentid: '23',
      name: 'price above base',
      display_name: 'price above base',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0628\u06cc\u0633',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    24: {
      id: '24',
      parentid: '24',
      name: 'price below base',
      display_name: 'price below base',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0628\u06cc\u0633',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    25: {
      id: '25',
      parentid: '25',
      name: 'price crosses up base validly',
      display_name: 'price crosses up base validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    26: {
      id: '26',
      parentid: '26',
      name: 'price crosses down base validly',
      display_name: 'price crosses down base validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    27: {
      id: '27',
      parentid: '27',
      name: 'price crosses up conversion',
      display_name: 'price crosses up conversion',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    28: {
      id: '28',
      parentid: '28',
      name: 'price crosses down conversion',
      display_name: 'price crosses down conversion',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    29: {
      id: '29',
      parentid: '29',
      name: 'price above conversion',
      display_name: 'price above conversion',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    30: {
      id: '30',
      parentid: '30',
      name: 'price below conversion',
      display_name: 'price below conversion',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    31: {
      id: '31',
      parentid: '31',
      name: 'price crosses up conversion validly',
      display_name: 'price crosses up conversion validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    32: {
      id: '32',
      parentid: '32',
      name: 'price crosses down conversion validly',
      display_name: 'price crosses down conversion validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    33: {
      id: '33',
      parentid: '33',
      name: 'conversion crosses up base',
      display_name: 'conversion crosses up base',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    34: {
      id: '34',
      parentid: '34',
      name: 'conversion crosses down base',
      display_name: 'conversion crosses down base',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0628\u06cc\u0633 \u062a\u0648\u0633\u0637 \u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    35: {
      id: '35',
      parentid: '35',
      name: 'conversion above base',
      display_name: 'conversion above base',
      translate:
        '\u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0628\u06cc\u0633',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    36: {
      id: '36',
      parentid: '36',
      name: 'conversion below base',
      display_name: 'conversion below base',
      translate:
        '\u062e\u0637 \u06a9\u0627\u0646\u0648\u0631\u0698\u0646 \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0628\u06cc\u0633',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'Ichimoku',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'IchimokuCloud@tv-basicstudies',
      tradingview_template: 'Ichimoku Cloud',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    37: {
      id: '37',
      parentid: '37',
      name: 'price crosses up SMA10',
      display_name: 'price crosses up SMA10',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    38: {
      id: '38',
      parentid: '38',
      name: 'price crosses down SMA10',
      display_name: 'price crosses down SMA10',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    39: {
      id: '39',
      parentid: '39',
      name: 'price above SMA10',
      display_name: 'price above SMA10',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    40: {
      id: '40',
      parentid: '40',
      name: 'price below SMA10',
      display_name: 'price below SMA10',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    41: {
      id: '41',
      parentid: '41',
      name: 'price crosses up SMA20',
      display_name: 'price crosses up SMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    42: {
      id: '42',
      parentid: '42',
      name: 'price crosses down SMA20',
      display_name: 'price crosses down SMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    43: {
      id: '43',
      parentid: '43',
      name: 'price above SMA20',
      display_name: 'price above SMA20',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    44: {
      id: '44',
      parentid: '44',
      name: 'price below SMA20',
      display_name: 'price below SMA20',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    45: {
      id: '45',
      parentid: '45',
      name: 'price crosses up SMA50',
      display_name: 'price crosses up SMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    46: {
      id: '46',
      parentid: '46',
      name: 'price crosses down SMA50',
      display_name: 'price crosses down SMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    47: {
      id: '47',
      parentid: '47',
      name: 'price above SMA50',
      display_name: 'price above SMA50',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    48: {
      id: '48',
      parentid: '48',
      name: 'price below SMA50',
      display_name: 'price below SMA50',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    49: {
      id: '49',
      parentid: '49',
      name: 'price crosses up SMA100',
      display_name: 'price crosses up SMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    50: {
      id: '50',
      parentid: '50',
      name: 'price crosses down SMA100',
      display_name: 'price crosses down SMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    51: {
      id: '51',
      parentid: '51',
      name: 'price above SMA100',
      display_name: 'price above SMA100',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    52: {
      id: '52',
      parentid: '52',
      name: 'price below SMA100',
      display_name: 'price below SMA100',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    53: {
      id: '53',
      parentid: '53',
      name: 'price crosses up SMA200',
      display_name: 'price crosses up SMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    54: {
      id: '54',
      parentid: '54',
      name: 'price crosses down SMA200',
      display_name: 'price crosses down SMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    55: {
      id: '55',
      parentid: '55',
      name: 'price above SMA200',
      display_name: 'price above SMA200',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    56: {
      id: '56',
      parentid: '56',
      name: 'price below SMA200',
      display_name: 'price below SMA200',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    57: {
      id: '57',
      parentid: '57',
      name: 'price crosses up WMA10',
      display_name: 'price crosses up WMA10',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    58: {
      id: '58',
      parentid: '58',
      name: 'price crosses down WMA10',
      display_name: 'price crosses down WMA10',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    59: {
      id: '59',
      parentid: '59',
      name: 'price above WMA10',
      display_name: 'price above WMA10',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    60: {
      id: '60',
      parentid: '60',
      name: 'price below WMA10',
      display_name: 'price below WMA10',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    61: {
      id: '61',
      parentid: '61',
      name: 'price crosses up WMA20',
      display_name: 'price crosses up WMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    62: {
      id: '62',
      parentid: '62',
      name: 'price crosses down WMA20',
      display_name: 'price crosses down WMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    63: {
      id: '63',
      parentid: '63',
      name: 'price above WMA20',
      display_name: 'price above WMA20',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    64: {
      id: '64',
      parentid: '64',
      name: 'price below WMA20',
      display_name: 'price below WMA20',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    65: {
      id: '65',
      parentid: '65',
      name: 'price crosses up WMA50',
      display_name: 'price crosses up WMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    66: {
      id: '66',
      parentid: '66',
      name: 'price crosses down WMA50',
      display_name: 'price crosses down WMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    67: {
      id: '67',
      parentid: '67',
      name: 'price above WMA50',
      display_name: 'price above WMA50',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    68: {
      id: '68',
      parentid: '68',
      name: 'price below WMA50',
      display_name: 'price below WMA50',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    69: {
      id: '69',
      parentid: '69',
      name: 'price crosses up WMA100',
      display_name: 'price crosses up WMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    70: {
      id: '70',
      parentid: '70',
      name: 'price crosses down WMA100',
      display_name: 'price crosses down WMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    71: {
      id: '71',
      parentid: '71',
      name: 'price above WMA100',
      display_name: 'price above WMA100',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    72: {
      id: '72',
      parentid: '72',
      name: 'price below WMA100',
      display_name: 'price below WMA100',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    73: {
      id: '73',
      parentid: '73',
      name: 'price crosses up WMA200',
      display_name: 'price crosses up WMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    74: {
      id: '74',
      parentid: '74',
      name: 'price crosses down WMA200',
      display_name: 'price crosses down WMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    75: {
      id: '75',
      parentid: '75',
      name: 'price above WMA200',
      display_name: 'price above WMA200',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    76: {
      id: '76',
      parentid: '76',
      name: 'price below WMA200',
      display_name: 'price below WMA200',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    77: {
      id: '77',
      parentid: '77',
      name: 'price crosses up EMA10',
      display_name: 'price crosses up EMA10',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    78: {
      id: '78',
      parentid: '78',
      name: 'price crosses down EMA10',
      display_name: 'price crosses down EMA10',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    79: {
      id: '79',
      parentid: '79',
      name: 'price above EMA10',
      display_name: 'price above EMA10',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    80: {
      id: '80',
      parentid: '80',
      name: 'price below EMA10',
      display_name: 'price below EMA10',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    81: {
      id: '81',
      parentid: '81',
      name: 'price crosses up EMA20',
      display_name: 'price crosses up EMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    82: {
      id: '82',
      parentid: '82',
      name: 'price crosses down EMA20',
      display_name: 'price crosses down EMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    83: {
      id: '83',
      parentid: '83',
      name: 'price above EMA20',
      display_name: 'price above EMA20',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    84: {
      id: '84',
      parentid: '84',
      name: 'price below EMA20',
      display_name: 'price below EMA20',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    85: {
      id: '85',
      parentid: '85',
      name: 'price crosses up EMA50',
      display_name: 'price crosses up EMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    86: {
      id: '86',
      parentid: '86',
      name: 'price crosses down EMA50',
      display_name: 'price crosses down EMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    87: {
      id: '87',
      parentid: '87',
      name: 'price above EMA50',
      display_name: 'price above EMA50',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    88: {
      id: '88',
      parentid: '88',
      name: 'price below EMA50',
      display_name: 'price below EMA50',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    89: {
      id: '89',
      parentid: '89',
      name: 'price crosses up EMA100',
      display_name: 'price crosses up EMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    90: {
      id: '90',
      parentid: '90',
      name: 'price crosses down EMA100',
      display_name: 'price crosses down EMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    91: {
      id: '91',
      parentid: '91',
      name: 'price above EMA100',
      display_name: 'price above EMA100',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    92: {
      id: '92',
      parentid: '92',
      name: 'price below EMA100',
      display_name: 'price below EMA100',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    93: {
      id: '93',
      parentid: '93',
      name: 'price crosses up EMA200',
      display_name: 'price crosses up EMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    94: {
      id: '94',
      parentid: '94',
      name: 'price crosses down EMA200',
      display_name: 'price crosses down EMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    95: {
      id: '95',
      parentid: '95',
      name: 'price above EMA200',
      display_name: 'price above EMA200',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    96: {
      id: '96',
      parentid: '96',
      name: 'price below EMA200',
      display_name: 'price below EMA200',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMA&PRICE',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    97: {
      id: '97',
      parentid: '97',
      name: 'price crosses up SMA10 validly',
      display_name: 'price crosses up SMA10 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    98: {
      id: '98',
      parentid: '98',
      name: 'price crosses down SMA10 validly',
      display_name: 'price crosses down SMA10 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    99: {
      id: '99',
      parentid: '99',
      name: 'price crosses up SMA20 validly',
      display_name: 'price crosses up SMA20 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    100: {
      id: '100',
      parentid: '100',
      name: 'price crosses down SMA20 validly',
      display_name: 'price crosses down SMA20 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    101: {
      id: '101',
      parentid: '101',
      name: 'price crosses up SMA50 validly',
      display_name: 'price crosses up SMA50 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    102: {
      id: '102',
      parentid: '102',
      name: 'price crosses down SMA50 validly',
      display_name: 'price crosses down SMA50 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    103: {
      id: '103',
      parentid: '103',
      name: 'price crosses up SMA100 validly',
      display_name: 'price crosses up SMA100 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    104: {
      id: '104',
      parentid: '104',
      name: 'price crosses down SMA100 validly',
      display_name: 'price crosses down SMA100 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    105: {
      id: '105',
      parentid: '105',
      name: 'price crosses up SMA200 validly',
      display_name: 'price crosses up SMA200 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    106: {
      id: '106',
      parentid: '106',
      name: 'price crosses down SMA200 validly',
      display_name: 'price crosses down SMA200 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    107: {
      id: '107',
      parentid: '107',
      name: 'price crosses up WMA10 validly',
      display_name: 'price crosses up WMA10 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    108: {
      id: '108',
      parentid: '108',
      name: 'price crosses down WMA10 validly',
      display_name: 'price crosses down WMA10 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    109: {
      id: '109',
      parentid: '109',
      name: 'price crosses up WMA20 validly',
      display_name: 'price crosses up WMA20 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    110: {
      id: '110',
      parentid: '110',
      name: 'price crosses down WMA20 validly',
      display_name: 'price crosses down WMA20 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    111: {
      id: '111',
      parentid: '111',
      name: 'price crosses up WMA50 validly',
      display_name: 'price crosses up WMA50 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    112: {
      id: '112',
      parentid: '112',
      name: 'price crosses down WMA50 validly',
      display_name: 'price crosses down WMA50 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    113: {
      id: '113',
      parentid: '113',
      name: 'price crosses up WMA100 validly',
      display_name: 'price crosses up WMA100 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    114: {
      id: '114',
      parentid: '114',
      name: 'price crosses down WMA100 validly',
      display_name: 'price crosses down WMA100 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    115: {
      id: '115',
      parentid: '115',
      name: 'price crosses up WMA200 validly',
      display_name: 'price crosses up WMA200 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    116: {
      id: '116',
      parentid: '116',
      name: 'price crosses down WMA200 validly',
      display_name: 'price crosses down WMA200 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    117: {
      id: '117',
      parentid: '117',
      name: 'price crosses up EMA10 validly',
      display_name: 'price crosses up EMA10 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    118: {
      id: '118',
      parentid: '118',
      name: 'price crosses down EMA10 validly',
      display_name: 'price crosses down EMA10 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    119: {
      id: '119',
      parentid: '119',
      name: 'price crosses up EMA20 validly',
      display_name: 'price crosses up EMA20 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    120: {
      id: '120',
      parentid: '120',
      name: 'price crosses down EMA20 validly',
      display_name: 'price crosses down EMA20 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    121: {
      id: '121',
      parentid: '121',
      name: 'price crosses up EMA50 validly',
      display_name: 'price crosses up EMA50 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    122: {
      id: '122',
      parentid: '122',
      name: 'price crosses down EMA50 validly',
      display_name: 'price crosses down EMA50 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    123: {
      id: '123',
      parentid: '123',
      name: 'price crosses up EMA100 validly',
      display_name: 'price crosses up EMA100 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    124: {
      id: '124',
      parentid: '124',
      name: 'price crosses down EMA100 validly',
      display_name: 'price crosses down EMA100 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    125: {
      id: '125',
      parentid: '125',
      name: 'price crosses up EMA200 validly',
      display_name: 'price crosses up EMA200 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    126: {
      id: '126',
      parentid: '126',
      name: 'price crosses down EMA200 validly',
      display_name: 'price crosses down EMA200 validly',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200 \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMA&VALID PRICE BREAKOUT',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    127: {
      id: '127',
      parentid: '127',
      name: 'SMA10 crosses up SMA20',
      display_name: 'SMA10 crosses up SMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10;20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    128: {
      id: '128',
      parentid: '128',
      name: 'SMA10 crosses down SMA20',
      display_name: 'SMA10 crosses down SMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10;20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    129: {
      id: '129',
      parentid: '129',
      name: 'SMA10 above SMA20',
      display_name: 'SMA10 above SMA20',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10;20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    130: {
      id: '130',
      parentid: '130',
      name: 'SMA10 below SMA20',
      display_name: 'SMA10 below SMA20',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10;20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    131: {
      id: '131',
      parentid: '131',
      name: 'SMA20 crosses up SMA50',
      display_name: 'SMA20 crosses up SMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    132: {
      id: '132',
      parentid: '132',
      name: 'SMA20 crosses down SMA50',
      display_name: 'SMA20 crosses down SMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    133: {
      id: '133',
      parentid: '133',
      name: 'SMA20 above SMA50',
      display_name: 'SMA20 above SMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    134: {
      id: '134',
      parentid: '134',
      name: 'SMA20 below SMA50',
      display_name: 'SMA20 below SMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    135: {
      id: '135',
      parentid: '135',
      name: 'SMA50 crosses up SMA100',
      display_name: 'SMA50 crosses up SMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    136: {
      id: '136',
      parentid: '136',
      name: 'SMA50 crosses down SMA100',
      display_name: 'SMA50 crosses down SMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    137: {
      id: '137',
      parentid: '137',
      name: 'SMA50 above SMA100',
      display_name: 'SMA50 above SMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    138: {
      id: '138',
      parentid: '138',
      name: 'SMA50 below SMA100',
      display_name: 'SMA50 below SMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    139: {
      id: '139',
      parentid: '139',
      name: 'SMA100 crosses up SMA200',
      display_name: 'SMA100 crosses up SMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    140: {
      id: '140',
      parentid: '140',
      name: 'SMA100 crosses down SMA200',
      display_name: 'SMA100 crosses down SMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    141: {
      id: '141',
      parentid: '141',
      name: 'SMA100 above SMA200',
      display_name: 'SMA100 above SMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    142: {
      id: '142',
      parentid: '142',
      name: 'SMA100 below SMA200',
      display_name: 'SMA100 below SMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    143: {
      id: '143',
      parentid: '143',
      name: 'WMA10 crosses up WMA20',
      display_name: 'WMA10 crosses up WMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    144: {
      id: '144',
      parentid: '144',
      name: 'WMA10 crosses down WMA20',
      display_name: 'WMA10 crosses down WMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    145: {
      id: '145',
      parentid: '145',
      name: 'WMA10 above WMA20',
      display_name: 'WMA10 above WMA20',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    146: {
      id: '146',
      parentid: '146',
      name: 'WMA10 below WMA20',
      display_name: 'WMA10 below WMA20',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    147: {
      id: '147',
      parentid: '147',
      name: 'WMA20 crosses up WMA50',
      display_name: 'WMA20 crosses up WMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    148: {
      id: '148',
      parentid: '148',
      name: 'WMA20 crosses down WMA50',
      display_name: 'WMA20 crosses down WMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    149: {
      id: '149',
      parentid: '149',
      name: 'WMA20 above WMA50',
      display_name: 'WMA20 above WMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    150: {
      id: '150',
      parentid: '150',
      name: 'WMA20 below WMA50',
      display_name: 'WMA20 below WMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    151: {
      id: '151',
      parentid: '151',
      name: 'WMA50 crosses up WMA100',
      display_name: 'WMA50 crosses up WMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    152: {
      id: '152',
      parentid: '152',
      name: 'WMA50 crosses down WMA100',
      display_name: 'WMA50 crosses down WMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    153: {
      id: '153',
      parentid: '153',
      name: 'WMA50 above WMA100',
      display_name: 'WMA50 above WMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    154: {
      id: '154',
      parentid: '154',
      name: 'WMA50 below WMA100',
      display_name: 'WMA50 below WMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    155: {
      id: '155',
      parentid: '155',
      name: 'WMA100 crosses up WMA200',
      display_name: 'WMA100 crosses up WMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    156: {
      id: '156',
      parentid: '156',
      name: 'WMA100 crosses down WMA200',
      display_name: 'WMA100 crosses down WMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    157: {
      id: '157',
      parentid: '157',
      name: 'WMA100 above WMA200',
      display_name: 'WMA100 above WMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    158: {
      id: '158',
      parentid: '158',
      name: 'WMA100 below WMA200',
      display_name: 'WMA100 below WMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    159: {
      id: '159',
      parentid: '159',
      name: 'EMA10 crosses up EMA20',
      display_name: 'EMA10 crosses up EMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10;20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    160: {
      id: '160',
      parentid: '160',
      name: 'EMA10 crosses down EMA20',
      display_name: 'EMA10 crosses down EMA20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10;20',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    161: {
      id: '161',
      parentid: '161',
      name: 'EMA10 above EMA20',
      display_name: 'EMA10 above EMA20',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10;20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    162: {
      id: '162',
      parentid: '162',
      name: 'EMA10 below EMA20',
      display_name: 'EMA10 below EMA20',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10;20',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    163: {
      id: '163',
      parentid: '163',
      name: 'EMA20 crosses up EMA50',
      display_name: 'EMA20 crosses up EMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    164: {
      id: '164',
      parentid: '164',
      name: 'EMA20 crosses down EMA50',
      display_name: 'EMA20 crosses down EMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    165: {
      id: '165',
      parentid: '165',
      name: 'EMA20 above EMA50',
      display_name: 'EMA20 above EMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    166: {
      id: '166',
      parentid: '166',
      name: 'EMA20 below EMA50',
      display_name: 'EMA20 below EMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    167: {
      id: '167',
      parentid: '167',
      name: 'EMA50 crosses up EMA100',
      display_name: 'EMA50 crosses up EMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    168: {
      id: '168',
      parentid: '168',
      name: 'EMA50 crosses down EMA100',
      display_name: 'EMA50 crosses down EMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    169: {
      id: '169',
      parentid: '169',
      name: 'EMA50 above EMA100',
      display_name: 'EMA50 above EMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    170: {
      id: '170',
      parentid: '170',
      name: 'EMA50 below EMA100',
      display_name: 'EMA50 below EMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    171: {
      id: '171',
      parentid: '171',
      name: 'EMA100 crosses up EMA200',
      display_name: 'EMA100 crosses up EMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '200;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    172: {
      id: '172',
      parentid: '172',
      name: 'EMA100 crosses down EMA200',
      display_name: 'EMA100 crosses down EMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    173: {
      id: '173',
      parentid: '173',
      name: 'EMA100 above EMA200',
      display_name: 'EMA100 above EMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    174: {
      id: '174',
      parentid: '174',
      name: 'EMA100 below EMA200',
      display_name: 'EMA100 below EMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 2',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    175: {
      id: '175',
      parentid: '175',
      name: 'SMA10 crosses up SMA20 crosses up SMA50',
      display_name: 'SMA10 crosses up SMA20 crosses up SMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10;20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    176: {
      id: '176',
      parentid: '176',
      name: 'SMA10 crosses down SMA20 crosses down SMA50',
      display_name: 'SMA10 crosses down SMA20 crosses down SMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10;20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    177: {
      id: '177',
      parentid: '177',
      name: 'SMA10 above SMA20 above SMA50',
      display_name: 'SMA10 above SMA20 above SMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10;20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    178: {
      id: '178',
      parentid: '178',
      name: 'SMA10 below SMA20 below SMA50',
      display_name: 'SMA10 below SMA20 below SMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '10;20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    179: {
      id: '179',
      parentid: '179',
      name: 'SMA20 crosses up SMA50 crosses up SMA100',
      display_name: 'SMA20 crosses up SMA50 crosses up SMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20;50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    180: {
      id: '180',
      parentid: '180',
      name: 'SMA20 crosses down SMA50 crosses down SMA100',
      display_name: 'SMA20 crosses down SMA50 crosses down SMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20;50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    181: {
      id: '181',
      parentid: '181',
      name: 'SMA20 above SMA50 above SMA100',
      display_name: 'SMA20 above SMA50 above SMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20;50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    182: {
      id: '182',
      parentid: '182',
      name: 'SMA20 below SMA50 below SMA100',
      display_name: 'SMA20 below SMA50 below SMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '20;50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    183: {
      id: '183',
      parentid: '183',
      name: 'SMA50 crosses up SMA100 crosses up SMA200',
      display_name: 'SMA50 crosses up SMA100 crosses up SMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064710 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50;100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    184: {
      id: '184',
      parentid: '184',
      name: 'SMA50 crosses down SMA100 crosses down SMA200',
      display_name: 'SMA50 crosses down SMA100 crosses down SMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064720 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50;100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    185: {
      id: '185',
      parentid: '185',
      name: 'SMA50 above SMA100 above SMA200',
      display_name: 'SMA50 above SMA100 above SMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100\u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50;100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    186: {
      id: '186',
      parentid: '186',
      name: 'SMA50 below SMA100 below SMA200',
      display_name: 'SMA50 below SMA100 below SMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u064750 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647100 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0633\u0627\u062f\u0647200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'SMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MASimple@tv-basicstudies,MASimple@tv-basicstudies,MASimple@tv-basicstudies',
      tradingview_template: 'Moving Average',
      tradingview_value: '50;100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    187: {
      id: '187',
      parentid: '187',
      name: 'WMA10 crosses up WMA20 crosses up WMA50',
      display_name: 'WMA10 crosses up WMA20 crosses up WMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc \u0633\u0627\u062f\u064710 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    188: {
      id: '188',
      parentid: '188',
      name: 'WMA10 crosses down WMA20 crosses down WMA50',
      display_name: 'WMA10 crosses down WMA20 crosses down WMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    189: {
      id: '189',
      parentid: '189',
      name: 'WMA10 above WMA20 above WMA50',
      display_name: 'WMA10 above WMA20 above WMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    190: {
      id: '190',
      parentid: '190',
      name: 'WMA10 below WMA20 below WMA50',
      display_name: 'WMA10 below WMA20 below WMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    191: {
      id: '191',
      parentid: '191',
      name: 'WMA20 crosses up WMA50 crosses up WMA100',
      display_name: 'WMA20 crosses up WMA50 crosses up WMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20;50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    192: {
      id: '192',
      parentid: '192',
      name: 'WMA20 crosses down WMA50 crosses down WMA100',
      display_name: 'WMA20 crosses down WMA50 crosses down WMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '10;50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    193: {
      id: '193',
      parentid: '193',
      name: 'WMA20 above WMA50 above WMA100',
      display_name: 'WMA20 above WMA50 above WMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20;50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    194: {
      id: '194',
      parentid: '194',
      name: 'WMA20 below WMA50 below WMA100',
      display_name: 'WMA20 below WMA50 below WMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '20;50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    195: {
      id: '195',
      parentid: '195',
      name: 'WMA50 crosses up WMA100 crosses up WMA200',
      display_name: 'WMA50 crosses up WMA100 crosses up WMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc10 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50;100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    196: {
      id: '196',
      parentid: '196',
      name: 'WMA50 crosses down WMA100 crosses down WMA200',
      display_name: 'WMA50 crosses down WMA100 crosses down WMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50;100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    197: {
      id: '197',
      parentid: '197',
      name: 'WMA50 above WMA100 above WMA200',
      display_name: 'WMA50 above WMA100 above WMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100\u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50;100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    198: {
      id: '198',
      parentid: '198',
      name: 'WMA50 below WMA100 below WMA200',
      display_name: 'WMA50 below WMA100 below WMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc50 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc100 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0648\u0632\u0646\u06cc200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'WMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies,MAWeighted@tv-basicstudies',
      tradingview_template: 'Moving Average Weighted',
      tradingview_value: '50;100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    199: {
      id: '199',
      parentid: '199',
      name: 'EMA10 crosses up EMA20 crosses up EMA50',
      display_name: 'EMA10 crosses up EMA20 crosses up EMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10;20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    200: {
      id: '200',
      parentid: '200',
      name: 'EMA10 crosses down EMA20 crosses down EMA50',
      display_name: 'EMA10 crosses down EMA20 crosses down EMA50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10;20;50',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    201: {
      id: '201',
      parentid: '201',
      name: 'EMA10 above EMA20 above EMA50',
      display_name: 'EMA10 above EMA20 above EMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10;20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    202: {
      id: '202',
      parentid: '202',
      name: 'EMA10 below EMA20 below EMA50',
      display_name: 'EMA10 below EMA20 below EMA50',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '10;20;50',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    203: {
      id: '203',
      parentid: '203',
      name: 'EMA20 crosses up EMA50 crosses up EMA100',
      display_name: 'EMA20 crosses up EMA50 crosses up EMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20;50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    204: {
      id: '204',
      parentid: '204',
      name: 'EMA20 crosses down EMA50 crosses down EMA100',
      display_name: 'EMA20 crosses down EMA50 crosses down EMA100',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20;50;100',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    205: {
      id: '205',
      parentid: '205',
      name: 'EMA20 above EMA50 above EMA100',
      display_name: 'EMA20 above EMA50 above EMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20;50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    206: {
      id: '206',
      parentid: '206',
      name: 'EMA20 below EMA50 below EMA100',
      display_name: 'EMA20 below EMA50 below EMA100',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '20;50;100',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    207: {
      id: '207',
      parentid: '207',
      name: 'EMA50 crosses up EMA100 crosses up EMA200',
      display_name: 'EMA50 crosses up EMA100 crosses up EMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc10 \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50;100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    208: {
      id: '208',
      parentid: '208',
      name: 'EMA50 crosses down EMA100 crosses down EMA200',
      display_name: 'EMA50 crosses down EMA100 crosses down EMA200',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0634\u06a9\u0633\u062a \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc20 \u062a\u0648\u0633\u0637 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50;100;200',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    209: {
      id: '209',
      parentid: '209',
      name: 'EMA50 above EMA100 above EMA200',
      display_name: 'EMA50 above EMA100 above EMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100\u0628\u0627\u0644\u0627\u06cc \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50;100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    210: {
      id: '210',
      parentid: '210',
      name: 'EMA50 below EMA100 below EMA200',
      display_name: 'EMA50 below EMA100 below EMA200',
      translate:
        '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc50 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc100 \u067e\u0627\u06cc\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 \u0646\u0645\u0627\u06cc\u06cc200',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'EMAs OVER EACHOTHER 3',
      shape: null,
      zone: null,
      color: null,
      tradingview:
        'MAExp@tv-basicstudies,MAExp@tv-basicstudies,MAExp@tv-basicstudies',
      tradingview_template: 'Moving Average Exponential',
      tradingview_value: '50;100;200',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    211: {
      id: '211',
      parentid: '211',
      name: 'RSI crosses up 30',
      display_name: 'RSI crosses up 30',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u0646\u0637\u0642\u0647 \u0628\u06cc\u0634\u06cc\u0646\u0647 \u0641\u0631\u0648\u0634(30) \u062a\u0648\u0633\u0637 RSI \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'RSI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'RSI@tv-basicstudies',
      tradingview_template: 'Relative Strength Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'free',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    212: {
      id: '212',
      parentid: '212',
      name: 'RSI crosses down 70',
      display_name: 'RSI crosses down 70',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u0646\u0637\u0642\u0647 \u0628\u06cc\u0634\u06cc\u0646\u0647 \u062e\u0631\u06cc\u062f(70) \u062a\u0648\u0633\u0637 RSI \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'RSI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'RSI@tv-basicstudies',
      tradingview_template: 'Relative Strength Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    213: {
      id: '213',
      parentid: '213',
      name: 'RSI crosses up 50',
      display_name: 'RSI crosses up 50',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u0646\u0637\u0642\u064750 \u062f\u0631\u0635\u062f \u062a\u0648\u0633\u0637 RSI \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'RSI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'RSI@tv-basicstudies',
      tradingview_template: 'Relative Strength Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    214: {
      id: '214',
      parentid: '214',
      name: 'MACD crosses up signal line',
      display_name: 'MACD crosses up signal line',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0633\u06cc\u06af\u0646\u0627\u0644 \u062a\u0648\u0633\u0637 \u062e\u0637 MACD \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'MACD',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'free',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    215: {
      id: '215',
      parentid: '215',
      name: 'MACD crosses down signal line',
      display_name: 'MACD crosses down signal line',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0633\u06cc\u06af\u0646\u0627\u0644 \u062a\u0648\u0633\u0637 \u062e\u0637 MACD \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'MACD',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    216: {
      id: '216',
      parentid: '216',
      name: 'MACD above signal line',
      display_name: 'MACD above signal line',
      translate:
        '\u062e\u0637 MACD \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0633\u06cc\u06af\u0646\u0627\u0644',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'MACD',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    217: {
      id: '217',
      parentid: '217',
      name: 'MACD below signal line',
      display_name: 'MACD below signal line',
      translate:
        '\u062e\u0637 MACD \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0633\u06cc\u06af\u0646\u0627\u0644',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'MACD',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    218: {
      id: '218',
      parentid: '218',
      name: 'ADX crosses up25-positive di crosses up negative di',
      display_name: 'ADX crosses up25-positive di crosses up negative di',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u0646\u0637\u0642\u064725 \u062a\u0648\u0633\u0637 ADX \u0648 \u0634\u06a9\u0633\u062a DI \u0645\u0646\u0641\u06cc \u062a\u0648\u0633\u0637 DI \u0645\u062b\u0628\u062a \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'ADX',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'DM@tv-basicstudies',
      tradingview_template: 'Average Directional Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'free',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    219: {
      id: '219',
      parentid: '219',
      name: 'ADX crosses up25-negative di crosses up positive di',
      display_name: 'ADX crosses up25-negative di crosses up positive di',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u0646\u0637\u0642\u064725 \u062a\u0648\u0633\u0637 ADX \u0648 \u0634\u06a9\u0633\u062a DI \u0645\u062b\u0628\u062a \u062a\u0648\u0633\u0637 DI \u0645\u0646\u0641\u06cc \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'ADX',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'DM@tv-basicstudies',
      tradingview_template: 'Average Directional Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    220: {
      id: '220',
      parentid: '220',
      name: 'ADX above 25-positive di above negative di',
      display_name: 'ADX above 25-positive di above negative di',
      translate:
        'ADX \u0628\u0627\u0644\u0627\u06cc25 \u0648 DI \u0645\u062b\u0628\u062a \u0628\u0627\u0644\u0627\u06cc DI \u0645\u0646\u0641\u06cc',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'ADX',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'DM@tv-basicstudies',
      tradingview_template: 'Average Directional Index',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    221: {
      id: '221',
      parentid: '221',
      name: 'ADX above 25-negative di above positive di',
      display_name: 'ADX above 25-negative di above positive di',
      translate:
        'ADX \u0628\u0627\u0644\u0627\u06cc25 \u0648 DI \u0645\u0646\u0641\u06cc \u0628\u0627\u0644\u0627\u06cc  DI\u0645\u062b\u0628\u062a',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'ADX',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'DM@tv-basicstudies',
      tradingview_template: 'Average Directional Index',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    222: {
      id: '222',
      parentid: '222',
      name: 'stochastic above signal crosses up 20',
      display_name: 'stochastic above signal crosses up 20',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u0646\u0637\u0642\u0647 \u0628\u06cc\u0634\u06cc\u0646\u0647 \u0641\u0631\u0648\u0634(20) \u0628\u0647 \u0628\u0627\u0644\u0627 \u0648  \u0627\u0633\u062a\u0648\u06a9\u0633\u062a\u06cc\u06a9 \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0633\u06cc\u06af\u0646\u0627\u0644',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'STOCHASTIC',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'Stochastic@tv-basicstudies',
      tradingview_template: 'Stochastic',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'free',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    223: {
      id: '223',
      parentid: '223',
      name: 'stochastic below signal crosses down 80',
      display_name: 'stochastic below signal crosses down 80',
      translate:
        '\u0634\u06a9\u0633\u062a \u0645\u0646\u0637\u0642\u0647 \u0628\u06cc\u0634\u06cc\u0646\u0647 \u062e\u0631\u06cc\u062f(80) \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0627\u0633\u062a\u0648\u06a9\u0633\u062a\u06cc\u06a9 \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0633\u06cc\u06af\u0646\u0627\u0644',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'STOCHASTIC',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'Stochastic@tv-basicstudies',
      tradingview_template: 'Stochastic',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    224: {
      id: '224',
      parentid: '224',
      name: 'CCI crosses up 100',
      display_name: 'CCI crosses up 100',
      translate:
        '\u0634\u06a9\u0633\u062a100 \u062a\u0648\u0633\u0637 CCI \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'CCI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'CCI@tv-basicstudies',
      tradingview_template: 'Commodity Channel Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'free',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    225: {
      id: '225',
      parentid: '225',
      name: 'CCI crosses down 100',
      display_name: 'CCI crosses down 100',
      translate:
        '\u0634\u06a9\u0633\u062a100 \u062a\u0648\u0633\u0637 CCI \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'CCI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'CCI@tv-basicstudies',
      tradingview_template: 'Commodity Channel Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    226: {
      id: '226',
      parentid: '226',
      name: 'CCI above 100',
      display_name: 'CCI above 100',
      translate: 'CCI \u0628\u0627\u0644\u0627\u06cc 100',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'CCI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'CCI@tv-basicstudies',
      tradingview_template: 'Commodity Channel Index',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    227: {
      id: '227',
      parentid: '227',
      name: 'CCI below 100',
      display_name: 'CCI below 100',
      translate: 'CCI \u067e\u0627\u06cc\u06cc\u0646 100',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'CCI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'CCI@tv-basicstudies',
      tradingview_template: 'Commodity Channel Index',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    228: {
      id: '228',
      parentid: '228',
      name: 'CCI crosses up 50',
      display_name: 'CCI crosses up 50',
      translate:
        '\u0634\u06a9\u0633\u062a50 \u062a\u0648\u0633\u0637 CCI \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'CCI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'CCI@tv-basicstudies',
      tradingview_template: 'Commodity Channel Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    229: {
      id: '229',
      parentid: '229',
      name: 'CCI crosses down 50',
      display_name: 'CCI crosses down 50',
      translate:
        '\u0634\u06a9\u0633\u062a50 \u062a\u0648\u0633\u0637 CCI \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'CCI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'CCI@tv-basicstudies',
      tradingview_template: 'Commodity Channel Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    230: {
      id: '230',
      parentid: '230',
      name: 'CCI crosses up 0',
      display_name: 'CCI crosses up 0',
      translate:
        '\u0634\u06a9\u0633\u062a \u0635\u0641\u0631 \u062a\u0648\u0633\u0637 CCI \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'CCI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'CCI@tv-basicstudies',
      tradingview_template: 'Commodity Channel Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    231: {
      id: '231',
      parentid: '231',
      name: 'CCI crosses down 0',
      display_name: 'CCI crosses down 0',
      translate:
        '\u0634\u06a9\u0633\u062a \u0635\u0641\u0631 \u062a\u0648\u0633\u0637 CCI \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'CCI',
      shape: null,
      zone: null,
      color: null,
      tradingview: 'CCI@tv-basicstudies',
      tradingview_template: 'Commodity Channel Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    232: {
      id: '232',
      parentid: '232',
      name: 'price crosses up bearish trendline(power4)',
      display_name: 'price crosses up bearish trendline(power4)',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627(\u0642\u062f\u0631\u062a 4)',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    233: {
      id: '233',
      parentid: '233',
      name: 'price crosses up bearish trendline(power5)',
      display_name: 'price crosses up bearish trendline(power5)',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627(\u0642\u062f\u0631\u062a 5)',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    234: {
      id: '234',
      parentid: '234',
      name: 'price crosses up bearish trendline(power6)',
      display_name: 'price crosses up bearish trendline(power6)',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627(\u0642\u062f\u0631\u062a 6)',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    235: {
      id: '235',
      parentid: '235',
      name: 'price crosses up bearish trendline(power7)',
      display_name: 'price crosses up bearish trendline(power7)',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u0628\u0627\u0644\u0627(\u0642\u062f\u0631\u062a 7)',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    236: {
      id: '236',
      parentid: '236',
      name: 'price crosses down bullish trendline(power4)',
      display_name: 'price crosses down bullish trendline(power4)',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646(\u0642\u062f\u0631\u062a 4)',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    237: {
      id: '237',
      parentid: '237',
      name: 'price crosses down bullish trendline(power5)',
      display_name: 'price crosses down bullish trendline(power5)',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646(\u0642\u062f\u0631\u062a 5)',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    238: {
      id: '238',
      parentid: '238',
      name: 'price crosses down bullish trendline(power6)',
      display_name: 'price crosses down bullish trendline(power6)',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646(\u0642\u062f\u0631\u062a 6)',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    239: {
      id: '239',
      parentid: '239',
      name: 'price crosses down bullish trendline(power7)',
      display_name: 'price crosses down bullish trendline(power7)',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc \u062a\u0648\u0633\u0637 \u0642\u06cc\u0645\u062a \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646(\u0642\u062f\u0631\u062a 7)',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    240: {
      id: '240',
      parentid: '240',
      name: 'price above bearish trendline(power4)',
      display_name: 'price above bearish trendline(power4)',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 4)',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    241: {
      id: '241',
      parentid: '241',
      name: 'price above bearish trendline(power5)',
      display_name: 'price above bearish trendline(power5)',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 5)',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    242: {
      id: '242',
      parentid: '242',
      name: 'price above bearish trendline(power6)',
      display_name: 'price above bearish trendline(power6)',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 6)',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    243: {
      id: '243',
      parentid: '243',
      name: 'price above bearish trendline(power7)',
      display_name: 'price above bearish trendline(power7)',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627\u06cc \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 7)',
      type: 'general',
      position: 'buy',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    244: {
      id: '244',
      parentid: '244',
      name: 'price below bullish trendline(power4)',
      display_name: 'price below bullish trendline(power4)',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 4)',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    245: {
      id: '245',
      parentid: '245',
      name: 'price below bullish trendline(power5)',
      display_name: 'price below bullish trendline(power5)',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 5)',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    246: {
      id: '246',
      parentid: '246',
      name: 'price below bullish trendline(power6)',
      display_name: 'price below bullish trendline(power6)',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 6)',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    247: {
      id: '247',
      parentid: '247',
      name: 'price below bullish trendline(power7)',
      display_name: 'price below bullish trendline(power7)',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 7)',
      type: 'general',
      position: 'sell',
      channel_type: '',
      group: 'TRENDLINE BREAKOUT',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    248: {
      id: '248',
      parentid: '248',
      name: 'jump',
      display_name: 'jump',
      translate: '\u067e\u0631\u0634 \u0642\u06cc\u0645\u062a',
      type: '',
      position: 'buy',
      channel_type: '',
      group: 'JUMP',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'free',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    249: {
      id: '249',
      parentid: '249',
      name: 'volume candle crosses up kumo',
      display_name: 'volume candle crosses up kumo',
      translate:
        '\u0634\u06a9\u0633\u062a \u06a9\u0648\u0645\u0648 \u062a\u0648\u0633\u0637 \u06a9\u0646\u062f\u0644 \u062d\u062c\u0645\u06cc \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: '',
      position: 'buy',
      channel_type: '',
      group: '',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    250: {
      id: '250',
      parentid: '250',
      name: 'price hits a support',
      display_name: 'price hits a support',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627 \u062d\u0645\u0627\u06cc\u062a',
      type: '',
      position: 'buy',
      channel_type: '',
      group: '',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    251: {
      id: '251',
      parentid: '251',
      name: 'atlas trendline gets green',
      display_name: 'atlas trendline gets green',
      translate:
        '\u0633\u0628\u0632 \u0634\u062f\u0646 \u062e\u0637 \u0631\u0648\u0646\u062f \u0627\u0637\u0644\u0633',
      type: '',
      position: 'buy',
      channel_type: '',
      group: '',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    252: {
      id: '252',
      parentid: '252',
      name: 'B-fibonacci retracement 55-65(power4)',
      display_name: 'fibonacci retracement 55-65(power4)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0635\u0644\u0627\u062d\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 55 \u0627\u0644\u06cc 65 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 4)',
      type: 'fibonacci',
      position: 'buy',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '55-65',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    253: {
      id: '253',
      parentid: '253',
      name: 'B-fibonacci retracement 55-65(power5)',
      display_name: 'fibonacci retracement 55-65(power5)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0635\u0644\u0627\u062d\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 55 \u0627\u0644\u06cc 65 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 5)',
      type: 'fibonacci',
      position: 'buy',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '55-65',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    254: {
      id: '254',
      parentid: '254',
      name: 'B-fibonacci retracement 55-65(power6)',
      display_name: 'fibonacci retracement 55-65(power6)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0635\u0644\u0627\u062d\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 55 \u0627\u0644\u06cc 65 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 6)',
      type: 'fibonacci',
      position: 'buy',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '55-65',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    255: {
      id: '255',
      parentid: '255',
      name: 'B-fibonacci retracement 55-65(power7)',
      display_name: 'fibonacci retracement 55-65(power7)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0635\u0644\u0627\u062d\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 55 \u0627\u0644\u06cc 65 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 7)',
      type: 'fibonacci',
      position: 'buy',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '55-65',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    256: {
      id: '256',
      parentid: '256',
      name: 'S-fibonacci retracement 55-65(power4)',
      display_name: 'fibonacci retracement 55-65(power4)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0635\u0644\u0627\u062d\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 55 \u0627\u0644\u06cc 65 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 4)',
      type: 'fibonacci',
      position: 'sell',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '55-65',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    257: {
      id: '257',
      parentid: '257',
      name: 'S-fibonacci retracement 55-65(power5)',
      display_name: 'fibonacci retracement 55-65(power5)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0635\u0644\u0627\u062d\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 55 \u0627\u0644\u06cc 65 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 5)',
      type: 'fibonacci',
      position: 'sell',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '55-65',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    258: {
      id: '258',
      parentid: '258',
      name: 'S-fibonacci retracement 55-65(power6)',
      display_name: 'fibonacci retracement 55-65(power6)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0635\u0644\u0627\u062d\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 55 \u0627\u0644\u06cc 65 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 6)',
      type: 'fibonacci',
      position: 'sell',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '55-65',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    259: {
      id: '259',
      parentid: '259',
      name: 'S-fibonacci retracement 55-65(power7)',
      display_name: 'fibonacci retracement 55-65(power7)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0635\u0644\u0627\u062d\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 55 \u0627\u0644\u06cc 65 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 7)',
      type: 'fibonacci',
      position: 'sell',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '55-65',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    260: {
      id: '260',
      parentid: '260',
      name: 'B-fibonacci extension 155-165(power4)',
      display_name: 'fibonacci extension 155-165(power4)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0646\u0628\u0633\u0627\u0637\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 155 \u0627\u0644\u06cc 165 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 4)',
      type: 'fibonacci',
      position: 'buy',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '155-165',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    261: {
      id: '261',
      parentid: '261',
      name: 'B-fibonacci extension 155-165(power5)',
      display_name: 'fibonacci extension 155-165(power5)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0646\u0628\u0633\u0627\u0637\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 155 \u0627\u0644\u06cc 165 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 5)',
      type: 'fibonacci',
      position: 'buy',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '155-165',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    262: {
      id: '262',
      parentid: '262',
      name: 'B-fibonacci extension 155-165(power6)',
      display_name: 'fibonacci extension 155-165(power6)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0646\u0628\u0633\u0627\u0637\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 155 \u0627\u0644\u06cc 165 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 6)',
      type: 'fibonacci',
      position: 'buy',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '155-165',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    263: {
      id: '263',
      parentid: '263',
      name: 'B-fibonacci extension 155-165(power7)',
      display_name: 'fibonacci extension 155-165(power7)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0646\u0628\u0633\u0627\u0637\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 155 \u0627\u0644\u06cc 165 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 7)',
      type: 'fibonacci',
      position: 'buy',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '155-165',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    264: {
      id: '264',
      parentid: '264',
      name: 'S-fibonacci extension 155-165(power4)',
      display_name: 'fibonacci extension 155-165(power4)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0646\u0628\u0633\u0627\u0637\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 155 \u0627\u0644\u06cc 165 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 4)',
      type: 'fibonacci',
      position: 'sell',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '155-165',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    265: {
      id: '265',
      parentid: '265',
      name: 'S-fibonacci extension 155-165(power5)',
      display_name: 'fibonacci extension 155-165(power5)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0646\u0628\u0633\u0627\u0637\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 155 \u0627\u0644\u06cc 165 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 5)',
      type: 'fibonacci',
      position: 'sell',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '155-165',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    266: {
      id: '266',
      parentid: '266',
      name: 'S-fibonacci extension 155-165(power6)',
      display_name: 'fibonacci extension 155-165(power6)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0646\u0628\u0633\u0627\u0637\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 155 \u0627\u0644\u06cc 165 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 6)',
      type: 'fibonacci',
      position: 'sell',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '155-165',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    267: {
      id: '267',
      parentid: '267',
      name: 'S-fibonacci extension 155-165(power7)',
      display_name: 'fibonacci extension 155-165(power7)',
      translate:
        '\u0641\u06cc\u0628\u0648\u0646\u0627\u0686\u06cc \u0627\u0646\u0628\u0633\u0627\u0637\u06cc \u062f\u0631 \u0645\u0646\u0637\u0642\u0647 155 \u0627\u0644\u06cc 165 \u062f\u0631\u0635\u062f( \u0642\u062f\u0631\u062a 7)',
      type: 'fibonacci',
      position: 'sell',
      channel_type: '',
      group: 'FIBONACCI',
      shape: 'fib_retracement',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '155-165',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    268: {
      id: '268',
      parentid: '268',
      name: 'bullish rsi bearish price using sma10',
      display_name: 'bullish rsi bearish price using sma10',
      translate:
        'RSI \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 10',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'RSI DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    269: {
      id: '269',
      parentid: '269',
      name: 'bearish rsi bullish price using sma10',
      display_name: 'bearish rsi bullish price using sma10',
      translate:
        'RSI \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 10',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'RSI DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    270: {
      id: '270',
      parentid: '270',
      name: 'bullish rsi bearish price using sma20',
      display_name: 'bullish rsi bearish price using sma20',
      translate:
        'RSI \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 20',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'RSI DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    271: {
      id: '271',
      parentid: '271',
      name: 'bearish rsi bullish price using sma20',
      display_name: 'bearish rsi bullish price using sma20',
      translate:
        'RSI \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 20',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'RSI DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    272: {
      id: '272',
      parentid: '272',
      name: 'bullish rsi bearish price using sma50',
      display_name: 'bullish rsi bearish price using sma50',
      translate:
        'RSI \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 50',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'RSI DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    273: {
      id: '273',
      parentid: '273',
      name: 'bearish rsi bullish price using sma50',
      display_name: 'bearish rsi bullish price using sma50',
      translate:
        'RSI \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 50',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'RSI DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    274: {
      id: '274',
      parentid: '274',
      name: 'bullish macd bearish price using sma10',
      display_name: 'bullish macd bearish price using sma10',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 10',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    275: {
      id: '275',
      parentid: '275',
      name: 'bearish macd bullish price using sma10',
      display_name: 'bearish macd bullish price using sma10',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc, \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc, \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 10',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    276: {
      id: '276',
      parentid: '276',
      name: 'bullish macd bearish price using sma20',
      display_name: 'bullish macd bearish price using sma20',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 20',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    277: {
      id: '277',
      parentid: '277',
      name: 'bearish macd bullish price using sma20',
      display_name: 'bearish macd bullish price using sma20',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc, \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc, \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 20',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    278: {
      id: '278',
      parentid: '278',
      name: 'bullish macd bearish price using sma50',
      display_name: 'bullish macd bearish price using sma50',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc\u060c \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 50',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    279: {
      id: '279',
      parentid: '279',
      name: 'bearish macd bullish price using sma50',
      display_name: 'bearish macd bullish price using sma50',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc, \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc, \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u062a\u062d\u0631\u06a9 50',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD DIVERGENCE',
      shape: null,
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    280: {
      id: '280',
      parentid: '280',
      name: 'R-bullish macd bearish price(power4)',
      display_name: 'bullish macd bearish price(power4)',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 4)',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD REGULAR DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    281: {
      id: '281',
      parentid: '281',
      name: 'R-bullish macd bearish price(power5)',
      display_name: 'bullish macd bearish price(power5)',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 5)',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD REGULAR DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    282: {
      id: '282',
      parentid: '282',
      name: 'R-bullish macd bearish price(power6)',
      display_name: 'bullish macd bearish price(power6)',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 6)',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD REGULAR DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    283: {
      id: '283',
      parentid: '283',
      name: 'R-bullish macd bearish price(power7)',
      display_name: 'bullish macd bearish price(power7)',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 7)',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD REGULAR DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    284: {
      id: '284',
      parentid: '284',
      name: 'R-bearish macd bullish price(power4)',
      display_name: 'bearish macd bullish price(power4)',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 4)',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD REGULAR DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    285: {
      id: '285',
      parentid: '285',
      name: 'R-bearish macd bullish price(power5)',
      display_name: 'bearish macd bullish price(power5)',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 5)',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD REGULAR DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    286: {
      id: '286',
      parentid: '286',
      name: 'R-bearish macd bullish price(power6)',
      display_name: 'bearish macd bullish price(power6)',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 6)',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD REGULAR DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    287: {
      id: '287',
      parentid: '287',
      name: 'R-bearish macd bullish price(power7)',
      display_name: 'bearish macd bullish price(power7)',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 7)',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD REGULAR DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    288: {
      id: '288',
      parentid: '288',
      name: 'H-bearish macd bullish price(power4)',
      display_name: 'bearish macd bullish price(power4)',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 4)',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD HIDDEN DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    289: {
      id: '289',
      parentid: '289',
      name: 'H-bearish macd bullish price(power5)',
      display_name: 'bearish macd bullish price(power5)',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 5)',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD HIDDEN DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    290: {
      id: '290',
      parentid: '290',
      name: 'H-bearish macd bullish price(power6)',
      display_name: 'bearish macd bullish price(power6)',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 6)',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD HIDDEN DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    291: {
      id: '291',
      parentid: '291',
      name: 'H-bearish macd bullish price(power7)',
      display_name: 'bearish macd bullish price(power7)',
      translate:
        'MACD \u0646\u0632\u0648\u0644\u06cc\u060c \u0642\u06cc\u0645\u062a \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a 7)',
      type: 'divergence',
      position: 'buy',
      channel_type: '',
      group: 'MACD HIDDEN DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    292: {
      id: '292',
      parentid: '292',
      name: 'H-bullish macd bearish price(power4)',
      display_name: 'bullish macd bearish price(power4)',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 4)',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD HIDDEN DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    293: {
      id: '293',
      parentid: '293',
      name: 'H-bullish macd bearish price(power5)',
      display_name: 'bullish macd bearish price(power5)',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 5)',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD HIDDEN DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    294: {
      id: '294',
      parentid: '294',
      name: 'H-bullish macd bearish price(power6)',
      display_name: 'bullish macd bearish price(power6)',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 6)',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD HIDDEN DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    295: {
      id: '295',
      parentid: '295',
      name: 'H-bullish macd bearish price(power7)',
      display_name: 'bullish macd bearish price(power7)',
      translate:
        'MACD \u0635\u0639\u0648\u062f\u06cc\u060c \u0642\u06cc\u0645\u062a \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a 7)',
      type: 'divergence',
      position: 'sell',
      channel_type: '',
      group: 'MACD HIDDEN DIVERGENCE',
      shape: 'arrow',
      zone: null,
      color: null,
      tradingview: 'MACD@tv-basicstudies',
      tradingview_template: 'MACD',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    296: {
      id: '296',
      parentid: '408',
      name: 'Bullish Gartly(Power4)',
      display_name: 'Bullish Gartly(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    297: {
      id: '297',
      parentid: '410',
      name: 'Bullish Gartly(Power5)',
      display_name: 'Bullish Gartly(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    298: {
      id: '298',
      parentid: '412',
      name: 'Bullish Gartly(Power6)',
      display_name: 'Bullish Gartly(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    299: {
      id: '299',
      parentid: '414',
      name: 'Bullish Gartly(Power7)',
      display_name: 'Bullish Gartly(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    300: {
      id: '300',
      parentid: '409',
      name: 'Bearish Gartly(Power4)',
      display_name: 'Bearish Gartly(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    301: {
      id: '301',
      parentid: '411',
      name: 'Bearish Gartly(Power5)',
      display_name: 'Bearish Gartly(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    302: {
      id: '302',
      parentid: '413',
      name: 'Bearish Gartly(Power6)',
      display_name: 'Bearish Gartly(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    303: {
      id: '303',
      parentid: '415',
      name: 'Bearish Gartly(Power7)',
      display_name: 'Bearish Gartly(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    304: {
      id: '304',
      parentid: '408',
      name: 'Perfect Bullish Gartly(Power4)',
      display_name: 'Perfect Bullish Gartly(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    305: {
      id: '305',
      parentid: '410',
      name: 'Perfect Bullish Gartly(Power5)',
      display_name: 'Perfect Bullish Gartly(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    306: {
      id: '306',
      parentid: '412',
      name: 'Perfect Bullish Gartly(Power6)',
      display_name: 'Perfect Bullish Gartly(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    307: {
      id: '307',
      parentid: '414',
      name: 'Perfect Bullish Gartly(Power7)',
      display_name: 'Perfect Bullish Gartly(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    308: {
      id: '308',
      parentid: '409',
      name: 'perfect bearish gartly(power4)',
      display_name: 'perfect bearish gartly(power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    309: {
      id: '309',
      parentid: '411',
      name: 'perfect bearish gartly(power5)',
      display_name: 'perfect bearish gartly(power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    310: {
      id: '310',
      parentid: '413',
      name: 'perfect bearish gartly(power6)',
      display_name: 'perfect bearish gartly(power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    311: {
      id: '311',
      parentid: '415',
      name: 'perfect bearish gartly(power7)',
      display_name: 'perfect bearish gartly(power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06af\u0627\u0631\u062a\u0644\u06cc \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Gartly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    312: {
      id: '312',
      parentid: '408',
      name: 'Bullish Bat(power4)',
      display_name: 'Bullish Bat(power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    313: {
      id: '313',
      parentid: '410',
      name: 'Bullish Bat(power5)',
      display_name: 'Bullish Bat(power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    314: {
      id: '314',
      parentid: '412',
      name: 'Bullish Bat(power6)',
      display_name: 'Bullish Bat(power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    315: {
      id: '315',
      parentid: '414',
      name: 'Bullish Bat(power7)',
      display_name: 'Bullish Bat(power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    316: {
      id: '316',
      parentid: '409',
      name: 'Bearish Bat(power4)',
      display_name: 'Bearish Bat(power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    317: {
      id: '317',
      parentid: '411',
      name: 'Bearish Bat(power5)',
      display_name: 'Bearish Bat(power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    318: {
      id: '318',
      parentid: '413',
      name: 'Bearish Bat(power6)',
      display_name: 'Bearish Bat(power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    319: {
      id: '319',
      parentid: '415',
      name: 'Bearish Bat(power7)',
      display_name: 'Bearish Bat(power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    320: {
      id: '320',
      parentid: '408',
      name: 'Perfect Bullish Bat(Power4)',
      display_name: 'Perfect Bullish Bat(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    321: {
      id: '321',
      parentid: '410',
      name: 'Perfect Bullish Bat(Power5)',
      display_name: 'Perfect Bullish Bat(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    322: {
      id: '322',
      parentid: '412',
      name: 'Perfect Bullish Bat(Power6)',
      display_name: 'Perfect Bullish Bat(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    323: {
      id: '323',
      parentid: '414',
      name: 'Perfect Bullish Bat(Power7)',
      display_name: 'Perfect Bullish Bat(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    324: {
      id: '324',
      parentid: '409',
      name: 'Perfect Bearish Bat(Power4)',
      display_name: 'Perfect Bearish Bat(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    325: {
      id: '325',
      parentid: '411',
      name: 'Perfect Bearish Bat(Power5)',
      display_name: 'Perfect Bearish Bat(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    326: {
      id: '326',
      parentid: '413',
      name: 'Perfect Bearish Bat(Power6)',
      display_name: 'Perfect Bearish Bat(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    327: {
      id: '327',
      parentid: '415',
      name: 'Perfect Bearish Bat(Power7)',
      display_name: 'Perfect Bearish Bat(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    328: {
      id: '328',
      parentid: '408',
      name: 'Bullish Alternative Bat(Power4)',
      display_name: 'Bullish Alternative Bat(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Alternative Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    329: {
      id: '329',
      parentid: '410',
      name: 'Bullish Alternative Bat(Power5)',
      display_name: 'Bullish Alternative Bat(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Alternative Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    330: {
      id: '330',
      parentid: '412',
      name: 'Bullish Alternative Bat(Power6)',
      display_name: 'Bullish Alternative Bat(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Alternative Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    331: {
      id: '331',
      parentid: '414',
      name: 'Bullish Alternative Bat(Power7)',
      display_name: 'Bullish Alternative Bat(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Alternative Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    332: {
      id: '332',
      parentid: '409',
      name: 'Bearish Alternative Bat(Power4)',
      display_name: 'Bearish Alternative Bat(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Alternative Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    333: {
      id: '333',
      parentid: '411',
      name: 'Bearish Alternative Bat(Power5)',
      display_name: 'Bearish Alternative Bat(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Alternative Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    334: {
      id: '334',
      parentid: '413',
      name: 'Bearish Alternative Bat(Power6)',
      display_name: 'Bearish Alternative Bat(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Alternative Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    335: {
      id: '335',
      parentid: '415',
      name: 'Bearish Alternative Bat(Power7)',
      display_name: 'Bearish Alternative Bat(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0641\u0627\u0634 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Alternative Bat',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    336: {
      id: '336',
      parentid: '408',
      name: 'Bullish Butterfly(Power4)',
      display_name: 'Bullish Butterfly(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    337: {
      id: '337',
      parentid: '410',
      name: 'Bullish Butterfly(Power5)',
      display_name: 'Bullish Butterfly(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    338: {
      id: '338',
      parentid: '412',
      name: 'Bullish Butterfly(Power6)',
      display_name: 'Bullish Butterfly(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    339: {
      id: '339',
      parentid: '414',
      name: 'Bullish Butterfly(Power7)',
      display_name: 'Bullish Butterfly(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    340: {
      id: '340',
      parentid: '409',
      name: 'Bearish Butterfly(Power4)',
      display_name: 'Bearish Butterfly(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    341: {
      id: '341',
      parentid: '411',
      name: 'Bearish Butterfly(Power5)',
      display_name: 'Bearish Butterfly(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    342: {
      id: '342',
      parentid: '413',
      name: 'Bearish Butterfly(Power6)',
      display_name: 'Bearish Butterfly(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    343: {
      id: '343',
      parentid: '415',
      name: 'Bearish Butterfly(Power7)',
      display_name: 'Bearish Butterfly(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    344: {
      id: '344',
      parentid: '408',
      name: 'Perfect Bullish Butterfly(Power4)',
      display_name: 'Perfect Bullish Butterfly(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    345: {
      id: '345',
      parentid: '410',
      name: 'Perfect Bullish Butterfly(Power5)',
      display_name: 'Perfect Bullish Butterfly(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    346: {
      id: '346',
      parentid: '412',
      name: 'Perfect Bullish Butterfly(Power6)',
      display_name: 'Perfect Bullish Butterfly(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    347: {
      id: '347',
      parentid: '414',
      name: 'Perfect Bullish Butterfly(Power7)',
      display_name: 'Perfect Bullish Butterfly(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    348: {
      id: '348',
      parentid: '409',
      name: 'Perfect Bearish Butterfly(Power4)',
      display_name: 'Perfect Bearish Butterfly(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    349: {
      id: '349',
      parentid: '411',
      name: 'Perfect Bearish Butterfly(Power5)',
      display_name: 'Perfect Bearish Butterfly(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    350: {
      id: '350',
      parentid: '413',
      name: 'Perfect Bearish Butterfly(Power6)',
      display_name: 'Perfect Bearish Butterfly(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    351: {
      id: '351',
      parentid: '415',
      name: 'Perfect Bearish Butterfly(Power7)',
      display_name: 'Perfect Bearish Butterfly(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u067e\u0631\u0648\u0627\u0646\u0647 \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Butterfly',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    352: {
      id: '352',
      parentid: '408',
      name: 'Bullish Cypher(Power4)',
      display_name: 'Bullish Cypher(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0627\u06cc\u0641\u0631 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Cypher',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    353: {
      id: '353',
      parentid: '410',
      name: 'Bullish Cypher(Power5)',
      display_name: 'Bullish Cypher(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0627\u06cc\u0641\u0631 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Cypher',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    354: {
      id: '354',
      parentid: '412',
      name: 'Bullish Cypher(Power6)',
      display_name: 'Bullish Cypher(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0627\u06cc\u0641\u0631 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Cypher',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    355: {
      id: '355',
      parentid: '414',
      name: 'Bullish Cypher(Power7)',
      display_name: 'Bullish Cypher(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0627\u06cc\u0641\u0631 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Cypher',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    356: {
      id: '356',
      parentid: '409',
      name: 'Bearish Cypher(Power4)',
      display_name: 'Bearish Cypher(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0627\u06cc\u0641\u0631 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Cypher',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    357: {
      id: '357',
      parentid: '411',
      name: 'Bearish Cypher(Power5)',
      display_name: 'Bearish Cypher(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0627\u06cc\u0641\u0631 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Cypher',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    358: {
      id: '358',
      parentid: '413',
      name: 'Bearish Cypher(Power6)',
      display_name: 'Bearish Cypher(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0627\u06cc\u0641\u0631 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Cypher',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    359: {
      id: '359',
      parentid: '415',
      name: 'Bearish Cypher(Power7)',
      display_name: 'Bearish Cypher(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0627\u06cc\u0641\u0631 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Cypher',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    360: {
      id: '360',
      parentid: '408',
      name: 'Bullish Nen Star(Power4)',
      display_name: 'Bullish Nen Star(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0646\u0646 \u0627\u0633\u062a\u0627\u0631 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Nen Star',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    361: {
      id: '361',
      parentid: '410',
      name: 'Bullish Nen Star(Power5)',
      display_name: 'Bullish Nen Star(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0646\u0646 \u0627\u0633\u062a\u0627\u0631 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Nen Star',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    362: {
      id: '362',
      parentid: '412',
      name: 'Bullish Nen Star(Power6)',
      display_name: 'Bullish Nen Star(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0646\u0646 \u0627\u0633\u062a\u0627\u0631 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Nen Star',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    363: {
      id: '363',
      parentid: '414',
      name: 'Bullish Nen Star(Power7)',
      display_name: 'Bullish Nen Star(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0646\u0646 \u0627\u0633\u062a\u0627\u0631 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Nen Star',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    364: {
      id: '364',
      parentid: '409',
      name: 'Bearish Nen Star(Power4)',
      display_name: 'Bearish Nen Star(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0646\u0646 \u0627\u0633\u062a\u0627\u0631 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Nen Star',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    365: {
      id: '365',
      parentid: '411',
      name: 'Bearish Nen Star(Power5)',
      display_name: 'Bearish Nen Star(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0646\u0646 \u0627\u0633\u062a\u0627\u0631 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Nen Star',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    366: {
      id: '366',
      parentid: '413',
      name: 'Bearish Nen Star(Power6)',
      display_name: 'Bearish Nen Star(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0646\u0646 \u0627\u0633\u062a\u0627\u0631 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Nen Star',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    367: {
      id: '367',
      parentid: '415',
      name: 'Bearish Nen Star(Power7)',
      display_name: 'Bearish Nen Star(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0646\u0646 \u0627\u0633\u062a\u0627\u0631 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Nen Star',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    376: {
      id: '376',
      parentid: '408',
      name: 'Bullish Shark(Power4)',
      display_name: 'Bullish Shark(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0648\u0633\u0647 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Shark',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    377: {
      id: '377',
      parentid: '410',
      name: 'Bullish Shark(Power5)',
      display_name: 'Bullish Shark(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0648\u0633\u0647 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Shark',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    378: {
      id: '378',
      parentid: '412',
      name: 'Bullish Shark(Power6)',
      display_name: 'Bullish Shark(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0648\u0633\u0647 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Shark',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    379: {
      id: '379',
      parentid: '414',
      name: 'Bullish Shark(Power7)',
      display_name: 'Bullish Shark(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0648\u0633\u0647 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Shark',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    380: {
      id: '380',
      parentid: '409',
      name: 'Bearish Shark(Power4)',
      display_name: 'Bearish Shark(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0648\u0633\u0647 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Shark',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    381: {
      id: '381',
      parentid: '411',
      name: 'Bearish Shark(Power5)',
      display_name: 'Bearish Shark(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0648\u0633\u0647 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Shark',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    382: {
      id: '382',
      parentid: '413',
      name: 'Bearish Shark(Power6)',
      display_name: 'Bearish Shark(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0648\u0633\u0647 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Shark',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    383: {
      id: '383',
      parentid: '415',
      name: 'Bearish Shark(Power7)',
      display_name: 'Bearish Shark(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0648\u0633\u0647 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Shark',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    384: {
      id: '384',
      parentid: '408',
      name: 'Bullish Crab(Power4)',
      display_name: 'Bullish Crab(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    385: {
      id: '385',
      parentid: '410',
      name: 'Bullish Crab(Power5)',
      display_name: 'Bullish Crab(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    386: {
      id: '386',
      parentid: '412',
      name: 'Bullish Crab(Power6)',
      display_name: 'Bullish Crab(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    387: {
      id: '387',
      parentid: '414',
      name: 'Bullish Crab(Power7)',
      display_name: 'Bullish Crab(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    388: {
      id: '388',
      parentid: '409',
      name: 'Bearish Crab(Power4)',
      display_name: 'Bearish Crab(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    389: {
      id: '389',
      parentid: '411',
      name: 'Bearish Crab(Power5)',
      display_name: 'Bearish Crab(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    390: {
      id: '390',
      parentid: '413',
      name: 'Bearish Crab(Power6)',
      display_name: 'Bearish Crab(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    391: {
      id: '391',
      parentid: '415',
      name: 'Bearish Crab(Power7)',
      display_name: 'Bearish Crab(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    392: {
      id: '392',
      parentid: '408',
      name: 'Perfect Bullish Crab(Power4)',
      display_name: 'Perfect Bullish Crab(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    393: {
      id: '393',
      parentid: '410',
      name: 'Perfect Bullish Crab(Power5)',
      display_name: 'Perfect Bullish Crab(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    394: {
      id: '394',
      parentid: '412',
      name: 'Perfect Bullish Crab(Power6)',
      display_name: 'Perfect Bullish Crab(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    395: {
      id: '395',
      parentid: '414',
      name: 'Perfect Bullish Crab(Power7)',
      display_name: 'Perfect Bullish Crab(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Perfect Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    396: {
      id: '396',
      parentid: '409',
      name: 'Perfect Bearish Crab(Power4)',
      display_name: 'Perfect Bearish Crab(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    397: {
      id: '397',
      parentid: '411',
      name: 'Perfect Bearish Crab(Power5)',
      display_name: 'Perfect Bearish Crab(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    398: {
      id: '398',
      parentid: '413',
      name: 'Perfect Bearish Crab(Power6)',
      display_name: 'Perfect Bearish Crab(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    399: {
      id: '399',
      parentid: '415',
      name: 'Perfect Bearish Crab(Power7)',
      display_name: 'Perfect Bearish Crab(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0627\u06cc\u062f\u0647 \u0622\u0644 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Perfect Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    400: {
      id: '400',
      parentid: '408',
      name: 'Deep Bullish Crab(Power4)',
      display_name: 'Deep Bullish Crab(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0639\u0645\u06cc\u0642 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Deep Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    401: {
      id: '401',
      parentid: '410',
      name: 'Deep Bullish Crab(Power5)',
      display_name: 'Deep Bullish Crab(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0639\u0645\u06cc\u0642 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Deep Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    402: {
      id: '402',
      parentid: '412',
      name: 'Deep Bullish Crab(Power6)',
      display_name: 'Deep Bullish Crab(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0639\u0645\u06cc\u0642 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Deep Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    403: {
      id: '403',
      parentid: '414',
      name: 'Deep Bullish Crab(Power7)',
      display_name: 'Deep Bullish Crab(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0639\u0645\u06cc\u0642 \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Deep Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    404: {
      id: '404',
      parentid: '409',
      name: 'Deep Bearish Crab(Power4)',
      display_name: 'Deep Bearish Crab(Power4)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0639\u0645\u06cc\u0642 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a4)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Deep Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    405: {
      id: '405',
      parentid: '411',
      name: 'Deep Bearish Crab(Power5)',
      display_name: 'Deep Bearish Crab(Power5)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0639\u0645\u06cc\u0642 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a5)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Deep Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    406: {
      id: '406',
      parentid: '413',
      name: 'Deep Bearish Crab(Power6)',
      display_name: 'Deep Bearish Crab(Power6)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0639\u0645\u06cc\u0642 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a6)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Deep Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    407: {
      id: '407',
      parentid: '415',
      name: 'Deep Bearish Crab(Power7)',
      display_name: 'Deep Bearish Crab(Power7)',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062e\u0631\u0686\u0646\u06af \u0639\u0645\u06cc\u0642 \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a7)',
      type: 'Harmonic Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Deep Crab',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    408: {
      id: '408',
      parentid: '0',
      name: 'Harmonic Finder(power4)',
      display_name: 'Harmonic Finder(power 4)',
      translate:
        '\u0647\u0627\u0631\u0645\u0648\u0646\u06cc\u06a9 \u06cc\u0627\u0628(\u0642\u062f\u0631\u062a 4)',
      type: 'harmonic finder',
      position: 'buy',
      channel_type: '',
      group: 'Harmonic Finder',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    409: {
      id: '409',
      parentid: '0',
      name: 'Harmonic Finder(power4)',
      display_name: 'Harmonic Finder(power 4)',
      translate:
        '\u0647\u0627\u0631\u0645\u0648\u0646\u06cc\u06a9 \u06cc\u0627\u0628(\u0642\u062f\u0631\u062a 4)',
      type: 'harmonic finder',
      position: 'sell',
      channel_type: '',
      group: 'Harmonic Finder',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    410: {
      id: '410',
      parentid: '0',
      name: 'Harmonic Finder(power5)',
      display_name: 'Harmonic Finder(power 5)',
      translate:
        '\u0647\u0627\u0631\u0645\u0648\u0646\u06cc\u06a9 \u06cc\u0627\u0628(\u0642\u062f\u0631\u062a 5)',
      type: 'harmonic finder',
      position: 'buy',
      channel_type: '',
      group: 'Harmonic Finder',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    411: {
      id: '411',
      parentid: '0',
      name: 'Harmonic Finder(power5)',
      display_name: 'Harmonic Finder(power 5)',
      translate:
        '\u0647\u0627\u0631\u0645\u0648\u0646\u06cc\u06a9 \u06cc\u0627\u0628(\u0642\u062f\u0631\u062a 5)',
      type: 'harmonic finder',
      position: 'sell',
      channel_type: '',
      group: 'Harmonic Finder',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    412: {
      id: '412',
      parentid: '0',
      name: 'Harmonic Finder(power6)',
      display_name: 'Harmonic Finder(power 6)',
      translate:
        '\u0647\u0627\u0631\u0645\u0648\u0646\u06cc\u06a9 \u06cc\u0627\u0628(\u0642\u062f\u0631\u062a 6)',
      type: 'harmonic finder',
      position: 'buy',
      channel_type: '',
      group: 'Harmonic Finder',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    413: {
      id: '413',
      parentid: '0',
      name: 'Harmonic Finder(power6)',
      display_name: 'Harmonic Finder(power 6)',
      translate:
        '\u0647\u0627\u0631\u0645\u0648\u0646\u06cc\u06a9 \u06cc\u0627\u0628(\u0642\u062f\u0631\u062a 6)',
      type: 'harmonic finder',
      position: 'sell',
      channel_type: '',
      group: 'Harmonic Finder',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    414: {
      id: '414',
      parentid: '0',
      name: 'Harmonic Finder(power7)',
      display_name: 'Harmonic Finder(power 7)',
      translate:
        '\u0647\u0627\u0631\u0645\u0648\u0646\u06cc\u06a9 \u06cc\u0627\u0628(\u0642\u062f\u0631\u062a 7)',
      type: 'harmonic finder',
      position: 'buy',
      channel_type: '',
      group: 'Harmonic Finder',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    415: {
      id: '415',
      parentid: '0',
      name: 'Harmonic Finder(power7)',
      display_name: 'Harmonic Finder(power 7)',
      translate:
        '\u0647\u0627\u0631\u0645\u0648\u0646\u06cc\u06a9 \u06cc\u0627\u0628(\u0642\u062f\u0631\u062a 7)',
      type: 'harmonic finder',
      position: 'sell',
      channel_type: '',
      group: 'Harmonic Finder',
      shape: 'xabcd_pattern',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '1',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    416: {
      id: '416',
      parentid: '0',
      name: 'candlestick finder',
      display_name: 'candlestick finder',
      translate:
        '\u06a9\u0646\u062f\u0644\u0633\u062a\u06cc\u06a9\u06cc \u06cc\u0627\u0628',
      type: 'candlestick finder',
      position: 'buy',
      channel_type: '',
      group: 'candlestick finder',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    417: {
      id: '417',
      parentid: '0',
      name: 'candlestick finder',
      display_name: 'candlestick finder',
      translate:
        '\u06a9\u0646\u062f\u0644\u0633\u062a\u06cc\u06a9\u06cc \u06cc\u0627\u0628',
      type: 'candlestick finder',
      position: 'sell',
      channel_type: '',
      group: 'candlestick finder',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    418: {
      id: '418',
      parentid: '416',
      name: 'hammer pattern',
      display_name: 'hammer pattern',
      translate: '\u0627\u0644\u06af\u0648\u06cc \u0686\u06a9\u0634',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    419: {
      id: '419',
      parentid: '416',
      name: 'inverted hammer pattern',
      display_name: 'inverted hammer pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0686\u06a9\u0634 \u0648\u0627\u0631\u0648\u0646\u0647',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    420: {
      id: '420',
      parentid: '416',
      name: 'tweezer bottom pattern',
      display_name: 'tweezer Bottom pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u06a9\u0641 \u062f\u0648\u0642\u0644\u0648',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    421: {
      id: '421',
      parentid: '416',
      name: 'bullish harami pattern',
      display_name: 'bullish harami pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0647\u0627\u0631\u0627\u0645\u06cc \u0635\u0639\u0648\u062f\u06cc',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    422: {
      id: '422',
      parentid: '416',
      name: 'bullish marubozu pattern',
      display_name: 'bullish marubozu pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0645\u0627\u0631\u0627\u0628\u0648\u0632\u0648 \u0635\u0639\u0648\u062f\u06cc',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    423: {
      id: '423',
      parentid: '416',
      name: 'three white soldiers pattern',
      display_name: 'three white soldiers pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0647 \u0633\u0631\u0628\u0627\u0632 \u0633\u0641\u06cc\u062f',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    424: {
      id: '424',
      parentid: '416',
      name: 'three rising methods pattern',
      display_name: 'three rising methods pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0631\u0648\u0646\u062f \u0627\u0641\u0632\u0627\u06cc\u0634\u06cc \u0628\u0627 \u0648\u0642\u0641\u0647 \u0633\u0647 \u0645\u0631\u062d\u0644\u0647 \u0627\u06cc',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    425: {
      id: '425',
      parentid: '416',
      name: 'morning star pattern',
      display_name: 'morning star pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u062a\u0627\u0631\u0647 \u0635\u0628\u062d\u06af\u0627\u0647\u06cc',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    426: {
      id: '426',
      parentid: '417',
      name: 'hanging man pattern',
      display_name: 'hanging man pattern',
      translate:
        '\u0645\u0631\u062f \u0628\u0647 \u062f\u0627\u0631\u0622\u0648\u06cc\u062e\u062a\u0647',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    427: {
      id: '427',
      parentid: '417',
      name: 'inverted hanging man pattern',
      display_name: 'inverted hanging man pattern',
      translate:
        '\u0645\u0631\u062f \u0628\u0647 \u062f\u0627\u0631 \u0622\u0648\u06cc\u062e\u062a\u0647 \u0648\u0627\u0631\u0648\u0646\u0647',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    428: {
      id: '428',
      parentid: '417',
      name: 'tweezer top pattern',
      display_name: 'tweezer top pattern',
      translate: '\u0633\u0642\u0641 \u062f\u0648\u0642\u0644\u0648',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    429: {
      id: '429',
      parentid: '417',
      name: 'bearish harami pattern',
      display_name: 'bearish harami pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0647\u0627\u0631\u0627\u0645\u06cc \u0646\u0632\u0648\u0644\u06cc',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    430: {
      id: '430',
      parentid: '417',
      name: 'bearish marubozu pattern',
      display_name: 'bearish marubozu pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0645\u0627\u0631\u0627\u0628\u0648\u0632\u0648 \u0646\u0632\u0648\u0644\u06cc',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    431: {
      id: '431',
      parentid: '417',
      name: 'three black crows pattern',
      display_name: 'three black crows pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u0647 \u06a9\u0644\u0627\u063a \u0633\u06cc\u0627\u0647',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    432: {
      id: '432',
      parentid: '417',
      name: 'three falling methods pattern',
      display_name: 'three falling methods pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0631\u0648\u0646\u062f \u06a9\u0627\u0647\u0634\u06cc \u0628\u0627 \u0648\u0642\u0641\u0647 \u0633\u0647 \u0645\u0631\u062d\u0644\u0647 \u0627\u06cc',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    433: {
      id: '433',
      parentid: '417',
      name: 'shooting star pattern',
      display_name: 'shooting star pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u062a\u0627\u0631\u0647 \u062f\u0646\u0628\u0627\u0644\u0647 \u062f\u0627\u0631',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    434: {
      id: '434',
      parentid: '417',
      name: 'evening star pattern',
      display_name: 'evening star pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0633\u062a\u0627\u0631\u0647 \u0634\u0627\u0645\u06af\u0627\u0647\u06cc',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    435: {
      id: '435',
      parentid: '435',
      name: 'neutral doji pattern',
      display_name: 'neutral doji pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062f\u0648\u062c\u06cc \u0645\u0639\u0645\u0648\u0644\u06cc',
      type: 'Candlestick Patterns',
      position: '',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: 'blue',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    436: {
      id: '436',
      parentid: '436',
      name: 'gravestone doji pattern',
      display_name: 'gravestone doji pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062f\u0648\u062c\u06cc \u0633\u0646\u06af \u0642\u0628\u0631',
      type: 'Candlestick Patterns',
      position: '',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: 'blue',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    437: {
      id: '437',
      parentid: '437',
      name: 'dragonfly doji pattern',
      display_name: 'dragonfly doji pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u062f\u0648\u062c\u06cc \u0633\u0646\u062c\u0627\u0642\u06a9',
      type: 'Candlestick Patterns',
      position: '',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: 'blue',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    438: {
      id: '438',
      parentid: '454',
      name: 'support line(0.5%zone)',
      display_name: 'support Line(0.5%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f0.\u06f5\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.005',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    439: {
      id: '439',
      parentid: '454',
      name: 'support line(1.0%zone)',
      display_name: 'support Line(1.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.01',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    440: {
      id: '440',
      parentid: '454',
      name: 'support line(1.5%zone)',
      display_name: 'support Line(1.5%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1.\u06f5\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.015',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    441: {
      id: '441',
      parentid: '454',
      name: 'support line(2.0%zone)',
      display_name: 'support Line(2.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f2.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.02',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    442: {
      id: '442',
      parentid: '454',
      name: 'support line(2.5%zone)',
      display_name: 'support Line(2.5%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f2.\u06f5\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.025',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    443: {
      id: '443',
      parentid: '454',
      name: 'support line(3.0%zone)',
      display_name: 'support Line(3.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f3.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.03',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    444: {
      id: '444',
      parentid: '454',
      name: 'support line(3.5%zone)',
      display_name: 'support Line(3.5%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f3.\u06f5\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.035',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    445: {
      id: '445',
      parentid: '454',
      name: 'support line(4.0%zone)',
      display_name: 'support Line(4.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f4.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.04',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    446: {
      id: '446',
      parentid: '455',
      name: 'resistance line(0.5%zone)',
      display_name: 'resistance Line(0.5%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f0.\u06f5\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.005',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    447: {
      id: '447',
      parentid: '455',
      name: 'resistance line(1.0%zone)',
      display_name: 'resistance Line(1.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.01',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    448: {
      id: '448',
      parentid: '455',
      name: 'resistance line(1.5%zone)',
      display_name: 'resistance Line(1.5%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1.\u06f5\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.015',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    449: {
      id: '449',
      parentid: '455',
      name: 'resistance line(2.0%zone)',
      display_name: 'resistance Line(2.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f2.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.02',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    450: {
      id: '450',
      parentid: '455',
      name: 'resistance line(2.5%zone)',
      display_name: 'resistance Line(2.5%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f2.\u06f5\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.025',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    451: {
      id: '451',
      parentid: '455',
      name: 'resistance line(3.0%zone)',
      display_name: 'resistance Line(3.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f3.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.03',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    452: {
      id: '452',
      parentid: '455',
      name: 'resistance line(3.5%zone)',
      display_name: 'resistance Line(3.5%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f3.\u06f5\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.035',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    453: {
      id: '453',
      parentid: '455',
      name: 'resistance line(4.0%zone)',
      display_name: 'resistance Line(4.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f4.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.04',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    454: {
      id: '454',
      parentid: '0',
      name: 'support line',
      display_name: 'support line',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a \u06cc\u0627\u0628',
      type: 'support/resistance line finder',
      position: 'buy',
      channel_type: '',
      group: 'support/resistance line finder',
      shape: 'rectangle',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    455: {
      id: '455',
      parentid: '0',
      name: 'resistance line',
      display_name: 'resistance line',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a \u06cc\u0627\u0628',
      type: 'support/resistance line finder',
      position: 'sell',
      channel_type: '',
      group: 'support/resistance line finder',
      shape: 'rectangle',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    456: {
      id: '456',
      parentid: '455',
      name: 'resistance line(4.5%zone)',
      display_name: 'resistance Line(4.5%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f4.\u06f5\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.045',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    457: {
      id: '457',
      parentid: '455',
      name: 'resistance line(5.0%zone)',
      display_name: 'resistance Line(5.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f5.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.05',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    458: {
      id: '458',
      parentid: '455',
      name: 'resistance line(6.0%zone)',
      display_name: 'resistance Line(6.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f6.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.06',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    459: {
      id: '459',
      parentid: '455',
      name: 'resistance line(7.0%zone)',
      display_name: 'resistance Line(7.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f7.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.07',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    460: {
      id: '460',
      parentid: '455',
      name: 'resistance line(8.0%zone)',
      display_name: 'resistance Line(8.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f8.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.08',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    461: {
      id: '461',
      parentid: '455',
      name: 'resistance line(9.0%zone)',
      display_name: 'resistance Line(9.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f9.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.09',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    462: {
      id: '462',
      parentid: '455',
      name: 'resistance line(10.0%zone)',
      display_name: 'resistance Line(10.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f0.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.1',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    463: {
      id: '463',
      parentid: '455',
      name: 'resistance line(12.0%zone)',
      display_name: 'resistance Line(12.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f2.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.12',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    464: {
      id: '464',
      parentid: '455',
      name: 'resistance line(14.0%zone)',
      display_name: 'resistance Line(14.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f4.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.14',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    465: {
      id: '465',
      parentid: '455',
      name: 'resistance line(16.0%zone)',
      display_name: 'resistance Line(16.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f6.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.16',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    466: {
      id: '466',
      parentid: '455',
      name: 'resistance line(18.0%zone)',
      display_name: 'resistance Line(18.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f8.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.18',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    467: {
      id: '467',
      parentid: '455',
      name: 'resistance line(20.0%zone)',
      display_name: 'resistance Line(20.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f2\u06f0.\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.2',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    468: {
      id: '468',
      parentid: '454',
      name: 'support line(4.5%zone)',
      display_name: 'support Line(4.5%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f4.\u06f5\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.045',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    469: {
      id: '469',
      parentid: '454',
      name: 'support line(5.0%zone)',
      display_name: 'support Line(5.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f5.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.05',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    470: {
      id: '470',
      parentid: '454',
      name: 'support line(6.0%zone)',
      display_name: 'support Line(6.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f6.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.06',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    471: {
      id: '471',
      parentid: '454',
      name: 'support line(7.0%zone)',
      display_name: 'support Line(7.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f7.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.07',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    472: {
      id: '472',
      parentid: '454',
      name: 'support line(8.0%zone)',
      display_name: 'support Line(8.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f8.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.08',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    473: {
      id: '473',
      parentid: '454',
      name: 'support line(9.0%zone)',
      display_name: 'support Line(9.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f9.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.09',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    474: {
      id: '474',
      parentid: '454',
      name: 'support line(10.0%zone)',
      display_name: 'support Line(10.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f0.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.1',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    475: {
      id: '475',
      parentid: '454',
      name: 'support line(12.0%zone)',
      display_name: 'support Line(12.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f2.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.12',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    476: {
      id: '476',
      parentid: '454',
      name: 'support line(14.0%zone)',
      display_name: 'support Line(14.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f4.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.14',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    477: {
      id: '477',
      parentid: '454',
      name: 'support line(16.0%zone)',
      display_name: 'support Line(16.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f6.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.16',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    478: {
      id: '478',
      parentid: '454',
      name: 'support line(18.0%zone)',
      display_name: 'support Line(18.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f1\u06f8.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.18',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    479: {
      id: '479',
      parentid: '454',
      name: 'support line(20.0%zone)',
      display_name: 'support Line(20.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f2\u06f0.\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0.2',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    480: {
      id: '480',
      parentid: '416',
      name: 'bullish engulfing pattern',
      display_name: 'bullish engulfing pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc\u200c\u0627\u0628\u0631 \u0633\u0628\u0632 \u067e\u0648\u0634\u0627\u0646\u0646\u062f\u0647',
      type: 'Candlestick Patterns',
      position: 'buy',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_up',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    481: {
      id: '481',
      parentid: '417',
      name: 'bearish engulfing pattern',
      display_name: 'bearish engulfing pattern',
      translate:
        '\u0627\u0644\u06af\u0648\u06cc \u0627\u0628\u0631 \u0642\u0631\u0645\u0632 \u067e\u0648\u0634\u0627\u0646\u0646\u062f\u0647',
      type: 'Candlestick Patterns',
      position: 'sell',
      channel_type: '',
      group: 'Candlestick Patterns',
      shape: 'arrow_down',
      zone: null,
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '1',
      plan: 'pro',
      harmonic: '0',
      candlestick: '1',
      rsi: '0',
      pri: '1',
    },
    482: {
      id: '482',
      parentid: '482',
      name: 'price above and close to bullish trendline(power4)',
      display_name: 'price above and close to bullish trendline(power4)',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: 'price close to trendline',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    483: {
      id: '483',
      parentid: '483',
      name: 'price above and close to bullish trendline(power5)',
      display_name: 'price above and close to bullish trendline(power5)',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f5)',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: 'price close to trendline',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    484: {
      id: '484',
      parentid: '484',
      name: 'price above and close to bullish trendline(power6)',
      display_name: 'price above and close to bullish trendline(power6)',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f6)',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: 'price close to trendline',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    485: {
      id: '485',
      parentid: '485',
      name: 'price above and close to bullish trendline(power7)',
      display_name: 'price above and close to bullish trendline(power7)',
      translate:
        '\u0642\u06cc\u0645\u062a \u0628\u0627\u0644\u0627 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f7)',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: 'price close to trendline',
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    486: {
      id: '486',
      parentid: '486',
      name: 'price below and close to bearish trendline(power4)',
      display_name: 'price below and close to bearish trendline(power4)',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: 'price close to trendline',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    487: {
      id: '487',
      parentid: '487',
      name: 'price below and close to bearish trendline(power5)',
      display_name: 'price below and close to bearish trendline(power5)',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f5)',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: 'price close to trendline',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    488: {
      id: '488',
      parentid: '488',
      name: 'price below and close to bearish trendline(power6)',
      display_name: 'price below and close to bearish trendline(power6)',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f6)',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: 'price close to trendline',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    489: {
      id: '489',
      parentid: '489',
      name: 'price below and close to bearish trendline(power7)',
      display_name: 'price below and close to bearish trendline(power7)',
      translate:
        '\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f7)',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: 'price close to trendline',
      shape: 'ray',
      zone: null,
      color: 'red',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    490: {
      id: '490',
      parentid: '490',
      name: 'rsi above and close to bullish trendline',
      display_name: 'RSI above and close to bullish trendline',
      translate:
        '\u0622\u0631 \u0627\u0633 \u0622\u06cc \u0628\u0627\u0644\u0627 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: "RSI close to trendline(tomorrow\\'s newspaper)",
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: 'Relative Strength Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '1',
      pri: '1',
    },
    491: {
      id: '491',
      parentid: '491',
      name: 'rsi below and close to bearish trendline',
      display_name: 'RSI below and close to bearish trendline',
      translate:
        '\u0622\u0631 \u0627\u0633 \u0622\u06cc \u067e\u0627\u06cc\u06cc\u0646 \u0648 \u0646\u0632\u062f\u06cc\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: "RSI close to trendline(tomorrow\\'s newspaper)",
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: 'Relative Strength Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '1',
      pri: '1',
    },
    492: {
      id: '492',
      parentid: '492',
      name: 'rsi crosses up bearish trendline',
      display_name: 'RSI crosses up bearish trendline',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc \u0627\u0631 \u0627\u0633 \u0622\u06cc \u0628\u0647 \u0628\u0627\u0644\u0627',
      type: 'cross',
      position: 'buy',
      channel_type: '',
      group: "RSI trendline breakout(tomorrow\\'s newspaper)",
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: 'Relative Strength Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '1',
      pri: '1',
    },
    493: {
      id: '493',
      parentid: '493',
      name: 'rsi crosses down bullish trendline',
      display_name: 'RSI crosses down bullish trendline',
      translate:
        '\u0634\u06a9\u0633\u062a \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc \u0627\u0631 \u0627\u0633 \u0622\u06cc \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646',
      type: 'cross',
      position: 'sell',
      channel_type: '',
      group: "RSI trendline breakout(tomorrow\\'s newspaper)",
      shape: 'ray',
      zone: null,
      color: 'green',
      tradingview: '',
      tradingview_template: 'Relative Strength Index',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '1',
      pri: '1',
    },
    498: {
      id: '498',
      parentid: '0',
      name: 'price hits probable bullish channel upper line',
      display_name: 'price hits probable bullish channel upper line',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc',
      type: 'channel finder',
      position: 'sell',
      channel_type: 'buy',
      group: 'channel finder',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    499: {
      id: '499',
      parentid: '0',
      name: 'price hits probable bearish channel lower line',
      display_name: 'price hits probable bearish channel lower line',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc',
      type: 'channel finder',
      position: 'buy',
      channel_type: 'sell',
      group: 'channel finder',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    500: {
      id: '500',
      parentid: '455',
      name: 'resistance line(0.0%zone)',
      display_name: 'resistance line(0.0%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f0\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    503: {
      id: '503',
      parentid: '454',
      name: 'support line(0.0%zone)',
      display_name: 'support line(0.0%zone)',
      translate:
        '\u062e\u0637 \u062d\u0645\u0627\u06cc\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f0\u066a)',
      type: 'support line',
      position: 'buy',
      channel_type: '',
      group: 'support line',
      shape: 'rectangle',
      zone: '0',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
    523: {
      id: '523',
      parentid: '499',
      name: 'price hits probable bearish channel lower line(power4)',
      display_name: 'price hits probable bearish channel lower line(power4)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'channel',
      position: 'buy',
      channel_type: 'sell',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    524: {
      id: '524',
      parentid: '499',
      name: 'price hits probable bearish channel lower line(power5)',
      display_name: 'price hits probable bearish channel lower line(power5)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f5)',
      type: 'channel',
      position: 'buy',
      channel_type: 'sell',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    525: {
      id: '525',
      parentid: '499',
      name: 'price hits probable bearish channel lower line(power6)',
      display_name: 'price hits probable bearish channel lower line(power6)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f6)',
      type: 'channel',
      position: 'buy',
      channel_type: 'sell',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    526: {
      id: '526',
      parentid: '499',
      name: 'price hits probable bearish channel lower line(power7)',
      display_name: 'price hits probable bearish channel lower line(power7)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f7)',
      type: 'channel',
      position: 'buy',
      channel_type: 'sell',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    527: {
      id: '527',
      parentid: '498',
      name: 'price hits probable bullish channel upper line(power4)',
      display_name: 'price hits probable bullish channel upper line(power4)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'channel',
      position: 'sell',
      channel_type: 'buy',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    528: {
      id: '528',
      parentid: '498',
      name: 'price hits probable bullish channel upper line(power5)',
      display_name: 'price hits probable bullish channel upper line(power5)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f5)',
      type: 'channel',
      position: 'sell',
      channel_type: 'buy',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    529: {
      id: '529',
      parentid: '498',
      name: 'price hits probable bullish channel upper line(power6)',
      display_name: 'price hits probable bullish channel upper line(power6)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f6)',
      type: 'channel',
      position: 'sell',
      channel_type: 'buy',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    530: {
      id: '530',
      parentid: '498',
      name: 'price hits probable bullish channel upper line(power7)',
      display_name: 'price hits probable bullish channel upper line(powe7)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0647 \u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f7)',
      type: 'channel',
      position: 'sell',
      channel_type: 'buy',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    532: {
      id: '532',
      parentid: '540',
      name: 'price hits probable bullish channel lower line(power4)',
      display_name: 'price hits probable bullish channel lower line(power4)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'channel',
      position: 'buy',
      channel_type: 'buy',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    533: {
      id: '533',
      parentid: '540',
      name: 'price hits probable bullish channel lower line(power5)',
      display_name: 'price hits probable bullish channel lower line(power5)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f5)',
      type: 'channel',
      position: 'buy',
      channel_type: 'buy',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    534: {
      id: '534',
      parentid: '540',
      name: 'price hits probable bullish channel lower line(power6)',
      display_name: 'price hits probable bullish channel lower line(power6)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f6)',
      type: 'channel',
      position: 'buy',
      channel_type: 'buy',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    535: {
      id: '535',
      parentid: '540',
      name: 'price hits probable bullish channel lower line(power7)',
      display_name: 'price hits probable bullish channel lower line(power7)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f7)',
      type: 'channel',
      position: 'buy',
      channel_type: 'buy',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    536: {
      id: '536',
      parentid: '541',
      name: 'price hits probable bearish channel upper line(power4)',
      display_name: 'price hits probable bearish channel upper line(power4)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627\u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'channel',
      position: 'sell',
      channel_type: 'sell',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    537: {
      id: '537',
      parentid: '541',
      name: 'price hits probable bearish channel upper line(power5)',
      display_name: 'price hits probable bearish channel upper line(power5)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627\u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f5)',
      type: 'channel',
      position: 'sell',
      channel_type: 'sell',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    538: {
      id: '538',
      parentid: '541',
      name: 'price hits probable bearish channel upper line(power6)',
      display_name: 'price hits probable bearish channel upper line(power6)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627\u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f6)',
      type: 'channel',
      position: 'sell',
      channel_type: 'sell',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    539: {
      id: '539',
      parentid: '541',
      name: 'price hits probable bearish channel upper line(power7)',
      display_name: 'price hits probable bearish channel upper line(power7)',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627\u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f7)',
      type: 'channel',
      position: 'sell',
      channel_type: 'sell',
      group: 'channel',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    540: {
      id: '540',
      parentid: '0',
      name: 'price hits probable bullish channel lower line',
      display_name: 'price hits probable bullish channel lower line',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627 \u06a9\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0635\u0639\u0648\u062f\u06cc',
      type: 'channel finder',
      position: 'buy',
      channel_type: 'buy',
      group: 'channel finder',
      shape: 'parallel_channel',
      zone: null,
      color: '#14B8A6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#99F6E4',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    541: {
      id: '541',
      parentid: '0',
      name: 'price hits probable bearish channel upper line',
      display_name: 'price hits probable bearish channel upper line',
      translate:
        '\u0628\u0631\u062e\u0648\u0631\u062f \u0642\u06cc\u0645\u062a \u0628\u0627\u0633\u0642\u0641 \u06a9\u0627\u0646\u0627\u0644 \u0627\u062d\u062a\u0645\u0627\u0644\u06cc \u0646\u0632\u0648\u0644\u06cc',
      type: 'channel finder',
      position: 'sell',
      channel_type: 'sell',
      group: 'channel finder',
      shape: 'parallel_channel',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '#FECDD3',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    542: {
      id: '542',
      parentid: '542',
      name: 'pullback to bearish trendline(power4)',
      display_name: 'pullback to bearish trendline(power4)',
      translate:
        '\u067e\u0648\u0644\u0628\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: 'pullback trendline',
      shape: 'ray',
      zone: null,
      color: '#14b8a6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    543: {
      id: '543',
      parentid: '543',
      name: 'pullback to bullish trendline(power4)',
      display_name: 'pullback to bullish trendline(power4)',
      translate:
        '\u067e\u0648\u0644\u0628\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f4)',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: 'pullback trendline',
      shape: 'ray',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    544: {
      id: '544',
      parentid: '544',
      name: 'pullback to bearish trendline(power5)',
      display_name: 'pullback to bearish trendline(power5)',
      translate:
        '\u067e\u0648\u0644\u0628\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f5)',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: 'pullback trendline',
      shape: 'ray',
      zone: null,
      color: '#14b8a6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    545: {
      id: '545',
      parentid: '545',
      name: 'pullback to bullish trendline(power5)',
      display_name: 'pullback to bullish trendline(power5)',
      translate:
        '\u067e\u0648\u0644\u0628\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f5)',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: 'pullback trendline',
      shape: 'ray',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    546: {
      id: '546',
      parentid: '546',
      name: 'pullback to bearish trendline(power6)',
      display_name: 'pullback to bearish trendline(power6)',
      translate:
        '\u067e\u0648\u0644\u0628\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f6)',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: 'pullback trendline',
      shape: 'ray',
      zone: null,
      color: '#14b8a6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    547: {
      id: '547',
      parentid: '547',
      name: 'pullback to bullish trendline(power6)',
      display_name: 'pullback to bullish trendline(power6)',
      translate:
        '\u067e\u0648\u0644\u0628\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f6)',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: 'pullback trendline',
      shape: 'ray',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    548: {
      id: '548',
      parentid: '548',
      name: 'pullback to bearish trendline(power7)',
      display_name: 'pullback to bearish trendline(power7)',
      translate:
        '\u067e\u0648\u0644\u0628\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0646\u0632\u0648\u0644\u06cc(\u0642\u062f\u0631\u062a\u06f7)',
      type: 'pre-market',
      position: 'buy',
      channel_type: '',
      group: 'pullback trendline',
      shape: 'ray',
      zone: null,
      color: '#14b8a6',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
    549: {
      id: '549',
      parentid: '549',
      name: 'pullback to bullish trendline(power7)',
      display_name: 'pullback to bullish trendline(power7)',
      translate:
        '\u067e\u0648\u0644\u0628\u06a9 \u0628\u0647 \u062e\u0637 \u0631\u0648\u0646\u062f \u0635\u0639\u0648\u062f\u06cc(\u0642\u062f\u0631\u062a\u06f7)',
      type: 'pre-market',
      position: 'sell',
      channel_type: '',
      group: 'pullback trendline',
      shape: 'ray',
      zone: null,
      color: '#F43F5E',
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'hero',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '0',
    },
  }
  const SIGNAL_LIST = [
    {
      id: '540423023',
      symbol: 'R',
      timeframe: '1440',
      exchange: 'kucoin',
      market_type: '',
      receivedtimestamp: '1642377599',
      receivedtime: '2022-01-17 03:29:59',
      signalid: '1642382950',
      pair: 'BTC',
      pair_price: '0.9949005000',
      strategyid: '456',
      passedcandle: null,
      percentage: '0',
      description:
        '[{A:{openTime:1638748800,open:0.99699997,high:0.99878999,low:0.99402,close:0.99869996}},{B:{openTime:1636934400,open:0.99582001,high:1.00499999,low:0.99500005,close:1.00099997}}]',
    },
  ]
  const STRATEGY_LIST = [
    {
      id: '456',
      parentid: '455',
      name: 'resistance line(4.5%zone)',
      display_name: 'resistance Line(4.5%zone)',
      translate:
        '\u062e\u0637 \u0645\u0642\u0627\u0648\u0645\u062a(\u0646\u0627\u062d\u06cc\u0647\u06f4.\u06f5\u066a)',
      type: 'resistance line',
      position: 'sell',
      channel_type: '',
      group: 'resistance line',
      shape: 'rectangle',
      zone: '0.045',
      color: null,
      tradingview: '',
      tradingview_template: '',
      tradingview_value: '',
      passedcandle: '0',
      plan: 'pro',
      harmonic: '0',
      candlestick: '0',
      rsi: '0',
      pri: '1',
    },
  ]
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
    300000, 900000, 1800000, 3600000, 7200000, 14400000, 21600000, 43200000,
    86400000, 604800000, 86400000, 604800000,
  ]

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

  var timeFormatter = {
    format: function (n) {
      return toPersian(
        padLeft(n.getUTCHours(), 2, '0') +
          ':' +
          padLeft(n.getUTCMinutes(), 2, '0')
      )
    },
  }
  var dateFormatter = {
    format: function (aa) {
      n = new JDate(aa)

      var f = n.getFullYear(),
        e = n.getMonth() + 1,
        o = n.getDate(),
        s = [
          'یکشنبه',
          'دوشنبه',
          'سه‌شنبه',
          'چهارشنبه',
          'پنجشنبه',
          'جمعه',
          'شنبه',
        ][n.getDay()]

      return toPersian(s + ' ' + f + '/' + e + '/' + o)
    },
  }

  function padLeft(n, t, i) {
    return Array(t - String(n).length + 1).join(i || ' ') + n
  }

  function toPersian(n) {
    return (
      (n = n.replace(/0/g, '۰')),
      (n = n.replace(/1/g, '۱')),
      (n = n.replace(/2/g, '۲')),
      (n = n.replace(/3/g, '۳')),
      (n = n.replace(/4/g, '۴')),
      (n = n.replace(/5/g, '۵')),
      (n = n.replace(/6/g, '۶')),
      (n = n.replace(/7/g, '۷')),
      (n = n.replace(/8/g, '۸')),
      n.replace(/9/g, '۹')
    )
  }
  function getDay(n, t, i) {
    var r = new Date(n, t - 1, i)
    return (
      r &&
      ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'][
        r.getDay()
      ]
    )
  }

  function tvDataFeed() {
    ;(this.searchSymbols = function (
      userInput,
      exchange,
      symbolType,
      onResultReadyCallback
    ) {
      console.info('searchSymbols')
    }),
      (this.resolveSymbol = function (
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
      }),
      (this.getBars = function (
        symbolInfo,
        resolution,
        time,
        onHistoryCallback,
        onErrorCallback
      ) {
        var _r =
          typeof resolution === 'string' ? resolution.toLowerCase() : resolution
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
          } else if (EXCHANGE == 'kucoin-futures') {
            var kucoinInter = KUCOIN_futures_INTERNALS[index]
            var a = `${KUCOIN_futures_SYMBOL}-${kucoinInter}`
            var params = {
              symbol: KUCOIN_futures_SYMBOL,
              interval: kucoinInter,
              startTime: time.from * 1000,
              endTime: time.to * 1000,
            }

            getHistoryFromKucoinFutures(params, onHistoryCallback)
          } else if (EXCHANGE == 'bybit') {
            var bybitInter = bybit_INTERNALS[index]
            var a = `${bybit_SYMBOL}-${bybitInter}`
            var params = {
              symbol: bybit_SYMBOL,
              interval: bybitInter,
              startTime: time.from * 1000,
              endTime: time.to * 1000,
            }
            getHistoryFromBybit(params, onHistoryCallback)
          } else if (EXCHANGE == 'bybit-futures') {
            var bybitFuturesInter = bybit_futures_INTERNALS[index]
            var a = `${bybit_futures_SYMBOL}-${bybitFuturesInter}`
            var params = {
              symbol: bybit_futures_SYMBOL,
              interval: bybitFuturesInter,
              startTime: time.from,
              endTime: time.to,
            }

            getHistoryFromBybitFutures(params, onHistoryCallback)
          } else if (EXCHANGE == 'okex') {
            var okexInter = okex_INTERNALS[index]
            var a = `${okex_SYMBOL}-${okexInter}`
            var params = {
              symbol: okex_SYMBOL,
              interval: okexInter,
              startTime: time.from * 1000,
              endTime: time.to * 1000,
            }
            getHistoryFromOkex(params, onHistoryCallback)
          } else if (EXCHANGE == 'coinex-futures') {
            var coinexFuturesInter = coinex_futures_INTERNALS[index]
            var a = `${coinex_futures_SYMBOL}-${coinexFuturesInter}`
            var params = {
              symbol: coinex_futures_SYMBOL,
              interval: coinexFuturesInter,
              startTime: time.from,
              endTime: time.to,
            }
            getHistoryFromCoinexFutures(params, onHistoryCallback)
          }
        }
      }),
      (this.subscribeBars = function (
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
                    topic: '/contractMarket/candle:' + kucoinFuturesWsCurStream,
                    response: true,
                  })
                )
              }

              kucoinFuturesWsCurStream = a

              kucoinFuturesWs.send(
                JSON.stringify({
                  id: Date.now(),
                  type: 'subscribe',
                  topic: '/contractMarket/candle:' + kucoinFuturesWsCurStream,
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
                    'candle.' + bybitFutureInter + '.' + bybit_futures_SYMBOL,
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
          for (var signal of SIGNAL_LIST) {
            drawDescriptions(tv, signal)
          }
        }
      }),
      (this.unsubscribeBars = function (subscriberUID) {
        console.info('unsubscribeBars')

        removeAllShapes(tv)
      }),
      (this.getMarks = function (
        symbolInfo,
        from,
        to,
        onDataCallback,
        resolution
      ) {
        console.info('getMarks')
      }),
      (this.getTimescaleMarks = function (
        symbolInfo,
        from,
        to,
        onDataCallback,
        resolution
      ) {
        console.info('getTimescaleMarks')
      }),
      (this.getServerTime = function (callback) {
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
      }),
      (this.onReady = function (callback) {
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
      })
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
      url: 'https://data.arzdigital.com/kcapi/api/v1/timestamp',
      success: function (time) {
        time = Math.floor(time.data / 1000)

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
    var url = 'bybit.php?url=' + encodeURIComponent('spot/v1/time')
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
          if (bars.length && bars[bars.length - 1].time <= params.endTime) {
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
          if (bars.length && bars[bars.length - 1].time <= params.endTime) {
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
    var url = `https://data.arzdigital.com/kcapi/api/v1/market/candles?type=${
      params.interval
    }&symbol=${params.symbol}&startAt=${Math.floor(
      params.startTime / 1000
    )}&endAt=${Math.floor(params.endTime / 1000)}`

    $.ajax({
      url,
      dataType: 'json',
      success: function (response) {
        var data = response.data.reverse()

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
  function getHistoryFromKucoinFutures(params, callback) {
    var url = `https://data.arzdigital.com/kcfapi/api/v1/kline/query?granularity=${params.interval}&symbol=${params.symbol}&from=${params.startTime}&to=${params.endTime}`

    $.ajax({
      url,
      dataType: 'json',
      success: function (response) {
        var data = response.data

        if (params.prevHis) {
          params.prevHis = params.prevHis.concat(data)
        } else params.prevHis = data

        var doRest = true

        if (data.length) {
          var eTime = data[data.length - 1][0]

          if (eTime < params.endTime) {
            var diff = params.endTime - eTime
            var index = KUCOIN_futures_INTERNALS.indexOf(params.interval)
            if (diff > DISTANCES[index]) {
              doRest = false

              params.startTime = eTime + 1000

              getHistoryFromKucoinFutures(params, callback)
            }
          }
        }
        if (doRest) {
          var bars = []
          for (const a of params.prevHis) {
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

          if (bars.length && bars[bars.length - 1].time <= params.endTime) {
            callback(bars, { nextTime: 1 })
          } else {
            callback([], { noData: true })
          }
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        if (textStatus != 'abort') {
          setTimeout(function () {
            getHistoryFromKucoinFutures(params, callback)
          }, 5000)
        }
      },
    })
  }

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

          if (bars.length && bars[bars.length - 1].time <= params.endTime) {
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

  function getHistoryFromBybitFutures(params, callback) {
    var url = `https://data.arzdigital.com/bbapi/public/linear/kline?symbol=${params.symbol}&interval=${params.interval}&limit=200&from=${params.startTime}&to=${params.endTime}`

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
          var lastTime = data[data.length - 1].start_at

          if (lastTime < params.endTime) {
            var diff = params.endTime - lastTime
            var index = bybit_futures_INTERNALS.indexOf(params.interval)

            if (diff > DISTANCES[index] / 1000) {
              doRest = false

              params.startTime = lastTime + 1

              getHistoryFromBybitFutures(params, callback)
            }
          }
        }

        if (doRest) {
          var bars = []
          for (const a of params.prevHis) {
            if (a) {
              var bar = {
                time: parseInt(a.start_at) * 1000,
                open: parseFloat(a.open),
                close: parseFloat(a.close),
                high: parseFloat(a.high),
                low: parseFloat(a.low),
                volume: parseFloat(a.volume),
              }
              bars.push(bar)
            }
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
      },
      error: function (jqXHR, textStatus, errorThrown) {
        if (textStatus != 'abort') {
          setTimeout(function () {
            getHistoryFromBybitFutures(params, callback)
          }, 5000)
        }
      },
    })
  }

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

          if (bars.length && bars[bars.length - 1].time <= params.endTime) {
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

  function getHistoryFromCoinexFutures(params, callback) {
    var url = `https://data.arzdigital.com/cnxres/contract/market/kline?market=${params.symbol}&start_time=${params.startTime}&end_time=${params.endTime}&interval=${params.interval}`

    $.ajax({
      url,
      dataType: 'json',
      success: function (response) {
        var data = response.data

        if (params.prevHis) {
          params.prevHis = params.prevHis.concat(data)
        } else params.prevHis = data

        var doRest = true

        if (data.length) {
          var lastTime = data[data.length - 1][0]
          if (lastTime < params.endTime) {
            var diff = params.endTime - lastTime
            var index = coinex_futures_INTERNALS.indexOf(params.interval)
            if (diff > DISTANCES[index]) {
              doRest = false

              params.startTime = lastTime + 1000

              getHistoryFromCoinexFutures(params, callback)
            }
          }
        }
        if (doRest) {
          var bars = []
          for (const a of params.prevHis) {
            var bar = {
              time: a[0] * 1000,
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
      },
      error: function (jqXHR, textStatus, errorThrown) {
        if (textStatus != 'abort') {
          setTimeout(function () {
            getHistoryFromCoinexFutures(params, callback)
          }, 5000)
        }
      },
    })
  }

  function removeAllShapes(tv) {
    var chart = tv.activeChart()

    if (!tv.custom_shapes) tv.custom_shapes = {}
    for (var shape in tv.custom_shapes) {
      for (var id of tv.custom_shapes[shape]) chart.removeEntity(id)

      if (
        tv.custom_shapes[shape + '-label'] &&
        tv.custom_shapes[shape + '-label'].length
      ) {
        for (var id of tv.custom_shapes[shape + '-label'])
          chart.removeEntity(id)
      }
    }

    tv.custom_shapes = {}
  }
  function getPoints(signal) {
    var result = [],
      m_shape = {
        type: '',
        overrides: {},
        points: [],
        label: [],
      },
      shape,
      t_shape,
      t,
      d,
      s,
      group

    if (signal) {
      s = signal.strategyid
      t = ALL_STRATEGIES[s]

      if (signal.description && t.shape) {
        try {
          group = t.group && t.group.toLowerCase()
          try {
            d = JSON.parse(signal.description.replaceAll(',,', ','))
          } catch (e) {
            d = eval(signal.description.replaceAll(',,', ','))
          }

          shape = Object.assign({}, m_shape)

          shape.type = t.shape
          shape.overrides.linecolor = t.color

          if (parseInt(t.rsi)) {
            var index,
              points = [],
              text
            var value

            shape.toStudyId = true
            for (var p of d) {
              if (p.first) {
                index = 0
                p = p.first
                value = p.RSI_A

                text = '1'
              } else if (p.second) {
                index = 1
                p = p.second
                value = p.RSI_B
                text = '2'
              } else {
                continue
              }

              points[index] = {
                time: p.openTime,
                price: value,
              }
              shape.label[index] = {
                text: text,
                flag: t.position == 'buy' ? 'arrow_up' : 'arrow_down',
                point: [points[index]],
              }
            }
            shape.points.push(points)
            shape.overrides.linewidth = 2
            shape.overrides.showLabel = true
          } else if (parseInt(t.harmonic)) {
            var points, index
            points = []
            for (var p of d) {
              if (p.X) {
                index = 0
                time = p.X
              } else if (p.A) {
                index = 1
                time = p.A
              } else if (p.B) {
                index = 2
                time = p.B
              } else if (p.C) {
                index = 3
                time = p.C
              } else if (p.D) {
                index = 4
                time = p.D
              }

              points[index] = {
                time: time,
                channel: '',
              }

              if (p.low !== undefined) {
                points[index].price = p.low
              }
              if (p.high !== undefined) {
                points[index].price = p.high
              }
            }
            shape.points.push(points)
          } else if (parseInt(t.candlestick)) {
            var index = 0
            let keys = [
              'first',
              'second',
              'third',
              'fourth',
              'fifth',
              'sixth',
              'seventh',
              'eighth',
              'ninth',
              'tenth',
            ]
            for (var p of d) {
              for (let i in keys) {
                if (typeof p[keys[i]] !== 'undefined') {
                  index = i
                  p = p[keys[i]]
                }
              }

              shape.points[index] = [
                {
                  time: p.openTime,
                  price: shape.type == 'arrow_down' ? p.high : p.low,
                },
              ]
              index++
            }
          } else if (group == 'channel') {
            var index,
              points = []
            var price
            for (var p of d) {
              if (p.first) {
                index = 0
                p = p.first
              } else if (p.second) {
                index = 1
                p = p.second
              } else if (p.third) {
                index = 2
                p = p.third
              } else {
                continue
              }

              if (t.channel_type === 'buy') {
                price = index == 2 ? p.high : p.low
              } else {
                price = index == 2 ? p.low : p.high
              }

              points[index] = {
                time: p.openTime,
                price: price,
              }
            }
            shape.points.push(points)
            shape.overrides.linewidth = 2
            shape.overrides.extendRight = true
            shape.overrides.showLabel = true
            shape.overrides.backgroundColor = t.tradingview_value
          } else if (
            group == 'trendline breakout' ||
            group == 'pullback trendline'
          ) {
            var index,
              points = [],
              text
            var flag = ''

            if (group == 'pullback trendline') {
              flag = t.position == 'sell' ? 'arrow_down' : 'arrow_up'

              var t_shape = {
                type: 'vertical_line',
                toStudyId: false,
                overrides: {
                  linecolor: 'black',
                  linewidth: 2,
                  linestyle: 1,
                },
                points: [
                  [
                    {
                      time: signal.receivedtimestamp - 1,
                      price: 0,
                    },
                  ],
                ],
                label: [],
              }

              result.push(t_shape)
            } else {
              flag = t.position == 'buy' ? 'arrow_down' : 'arrow_up'
            }
            for (var p of d) {
              if (p.first) {
                index = 0
                p = p.first

                text = 'A'
              } else if (p.second) {
                index = 1
                p = p.second
                text = 'B'
              } else {
                continue
              }

              points[index] = {
                time: p.openTime,
                price: t.position == 'buy' ? p.high : p.low,
              }
              shape.label[index] = {
                text: text,
                flag: flag,
                point: [points[index]],
              }
            }
            shape.points.push(points)
            shape.overrides.linewidth = 2
            shape.overrides.showLabel = true
          } else if (group == 'price close to trendline') {
            var index,
              points = [],
              text
            for (var p of d) {
              if (p.first) {
                index = 0
                p = p.first

                text = 'A'
              } else if (p.second) {
                index = 1
                p = p.second
                text = 'B'
              } else {
                continue
              }

              points[index] = {
                time: p.openTime,
                price: t.position == 'sell' ? p.high : p.low,
              }
              shape.label[index] = {
                text: text,
                flag: t.position == 'sell' ? 'arrow_down' : 'arrow_up',
                point: [points[index]],
              }
            }
            shape.points.push(points)
            shape.overrides.linewidth = 2
            shape.overrides.showLabel = true
          } else if (
            group === 'macd regular divergence' ||
            group == 'macd hidden divergence'
          ) {
            var index,
              points = [],
              t_shape

            t_shape = Object.assign({}, m_shape)
            t_shape.type = t.shape
            t_shape.toStudyId = true
            t_shape.overrides.linecolor = t.color
            t_shape.overrides.linewidth = 2
            t_shape.overrides.showLabel = true
            t_shape.points = [[]]
            t_shape.label = []

            for (var p of d) {
              index = 5
              if (p.A) {
                index = 0
                p = p.A
                text = 'A'
              } else if (p.B) {
                index = 1
                p = p.B
                text = 'B'
              } else if (p.C) {
                index = 2
                p = p.C
                text = 'C'
              }
              if (index < 2) {
                p = points[index] = {
                  time: p.openTime,
                  price: t.position == 'buy' ? p.low : p.high,
                }
              } else if (index == 2) {
                p = {
                  time: p.openTime,
                  price: t.position == 'buy' ? p.low : p.high,
                }
              } else {
                if (p.D) {
                  index = 0
                  p = p.D
                  text = 'D'
                } else if (p.E) {
                  index = 1
                  p = p.E
                  text = 'E'
                }
                t_shape.points[0].push({
                  time: p.time,
                  price: p.macd,
                })

                t_shape.label[index] = {
                  text: text,
                  flag: t.position == 'buy' ? 'arrow_up' : 'arrow_down',
                  point: [t_shape.points[0][index]],
                }

                p = false
              }

              if (p && p.time) {
                shape.label[index] = {
                  text: text,
                  flag: t.position == 'buy' ? 'arrow_up' : 'arrow_down',
                  point: [Object.assign({}, p)],
                }
              }
            }

            result.push(t_shape)
            shape.points.push(points.slice())
            shape.overrides.linewidth = 2
            shape.overrides.showLabel = true
          } else if (group === 'fibonacci') {
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

            for (var p of d) {
              if (p.A) {
                index = 0
                p = p.A
                text = 'A'

                a = {
                  time: p.openTime,
                  price: t.position == 'buy' ? p.low : p.high,
                }
              } else if (p.B) {
                index = 1
                p = p.B
                text = 'B'

                a = {
                  time: p.openTime,
                  price: t.position == 'buy' ? p.high : p.low,
                }
              } else if (p.C) {
                index = 2
                p = p.C
                text = 'C'

                a = {
                  time: p.openTime,
                  price: t.position == 'buy' ? p.low : p.high,
                }
              }

              if (index == 0) {
                points[0] = {
                  time: a.time,
                  price: a.price,
                }
              } else if (index === 1) {
                points[1] = {
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
                flag: t.position == 'buy' ? 'arrow_up' : 'arrow_down',
                point: [t_points[index]],
              }
            }
            result.push({
              type: 'arrow',
              id: 'arrow-1',
              overrides: {
                linewidth: 2,
                showLabel: true,
              },
              points: [t_points.slice(0, 2)],
              label: t_labels.slice(0, 2),
            })

            result.push({
              type: 'arrow',
              id: 'arrow-2',
              overrides: {
                linewidth: 2,
                showLabel: true,
              },
              points: [t_points.slice(1)],
              label: t_labels.slice(1),
            })

            shape.points.push(points)

            if (t.tradingview_value === '55-65') {
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
                    coeff: 0.55,
                    color: 'rgb(255, 152, 0)',
                  },
                  default_handler
                ),
                level3: new Proxy(
                  {
                    visible: true,
                    coeff: 0.618,
                    color: 'rgb(76, 175, 80)',
                  },
                  default_handler
                ),
                level4: new Proxy(
                  {
                    visible: true,
                    coeff: 0.65,
                    color: 'rgb(76, 175, 80)',
                  },
                  default_handler
                ),
                level5: new Proxy(
                  {
                    visible: true,
                    coeff: 1,
                    color: 'rgb(28, 69, 135)',
                  },
                  default_handler
                ),
              }
            } else if (t.tradingview_value === '155-165') {
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
                    coeff: 1.55,
                    color: 'rgb(28, 69, 135)',
                  },
                  default_handler
                ),
                level4: new Proxy(
                  {
                    visible: true,
                    coeff: 1.618,
                    color: 'rgb(76, 175, 80)',
                  },
                  default_handler
                ),
                level5: new Proxy(
                  {
                    visible: true,
                    coeff: 1.65,
                    color: 'rgb(76, 175, 80)',
                  },
                  default_handler
                ),
              }
            }

            var _level = 6
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
            window.shape = shape
          } else if (t.zone) {
            var a,
              b,
              points = [],
              zone = t.zone / 2,
              support

            if (group === 'support line') {
              support = true
              for (var p of d) {
                if (p.A) {
                  p = p.A
                  a = {
                    time: p.openTime,
                    price: Math.min(p.open, p.close),
                  }
                } else if (p.B) {
                  p = p.B
                  b = {
                    time: p.openTime,
                    price: Math.min(p.open, p.close),
                  }
                }
              }
            } else if (group === 'resistance line') {
              for (var p of d) {
                if (p.A) {
                  p = p.A
                  a = {
                    time: p.openTime,
                    price: Math.max(p.open, p.close),
                  }
                } else if (p.B) {
                  p = p.B
                  b = {
                    time: p.openTime,
                    price: Math.max(p.open, p.close),
                  }
                }
              }
            }

            if (typeof a === 'object' && typeof b === 'object') {
              points[0] = {
                time: b.time,
                price: a.price + a.price * zone,
                bar: 0,
              }
              points[1] = {
                time: Math.floor(new Date().getTime() / 1000),
                price: a.price - a.price * zone,
                bar: 0,
              }

              shape.label[0] = {
                text: 'A',
                flag: support ? 'arrow_up' : 'arrow_down',
                point: [a],
              }
              shape.label[1] = {
                text: 'B',
                flag: support ? 'arrow_up' : 'arrow_down',
                point: [b],
              }

              shape.points.push(points)
            }
          }
        } catch (e) {
          console.error(e)
        }
        result.push(shape)
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
          }
        })(shapes[i])
      }
    }
  }

  function initOnReady(symbol, timeframe) {
    var options = {
      // debug: true, // uncomment this line to see Library errors and warnings in the console
      fullscreen: true,
      symbol: symbol,
      interval: timeframe,
      container_id: 'ata-tv-chart',
      timezone: USER_LANG === 'fa' ? 'Asia/Tehran' : '',
      allow_symbol_change: false,
      datafeed: new tvDataFeed(),
      library_path: 'tradingview/charting_library/',
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

    if (USER_LANG == 'fa') {
      options.customFormatters = {
        timeFormatter: timeFormatter,
        dateFormatter: dateFormatter,
      }
    }

    tv = window.tvWidget = new TradingView.widget(options)
    window.showShapes = false
    tv.onChartReady(function () {
      var t = this
      var chart = t.activeChart()
      var inputs = []
      var override = {}
      var study
      var value

      for (var strategy of STRATEGY_LIST) {
        if (strategy.tradingview_template) {
          study = strategy.tradingview_template.toLowerCase()
          inputs = []
          switch (study) {
            case 'moving average':
            case 'moving average weighted':
            case 'moving average exponential':
              if (strategy.tradingview_value) {
                for (value of strategy.tradingview_value.split(';')) {
                  inputs.push(value.split(','))
                }
              }
              break
          }

          if (inputs.length) {
            for (input of inputs) {
              chart.createStudy(
                strategy.tradingview_template,
                false,
                false,
                input,
                null,
                override
              )
            }
          } else {
            chart
              .createStudy(
                strategy.tradingview_template,
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

    function register_autosave() {
      // tv.subscribe("onAutoSaveNeeded", function() {
      // 	console.info("Saved chart");
      // 	// We'll implement the auto saving ourself because the default implementation sucks
      // 	$("iframe").contents().find("div#header-toolbar-save-load").click();
      // });
    }
  }
  function binanceWebsocket() {
    var tryConnectAgain

    tryConnectAgain = false

    if (!binWsConnnected) {
      binanceWs = new WebSocket(
        `wss://data.arzdigital.com/bnstream/ws/${binWsCurStream}`
      )
      binanceWs.onerror = function (event) {
        binWsConnnected = false

        if (!tryConnectAgain) {
          tryConnectAgain = true
          setTimeout(binanceWebsocket, 5000)
        }
      }
      binanceWs.onclose = function (event) {
        binWsConnnected = false

        if (!tryConnectAgain) {
          tryConnectAgain = true

          setTimeout(binanceWebsocket, 5000)
        }
      }

      binanceWs.onopen = function (event) {
        binWsConnnected = true

        binanceWs.onmessage = function (event) {
          let data

          try {
            data = JSON.parse(event.data)
          } catch (e) {
            return
          }

          if (wsDataCallback && data.e == 'kline') {
            var a = `${data.s.toLowerCase()}@kline_${data.k.i}`

            if (a == binWsCurStream) {
              var bar = {
                time: parseInt(data.k.t),
                open: parseFloat(data.k.o),
                high: parseFloat(data.k.h),
                low: parseFloat(data.k.l),
                close: parseFloat(data.k.c),
                volume: parseFloat(data.k.v),
              }
              wsDataCallback(bar)
            }
          }
        }
      }
    }
  }

  function coinexWebsocket() {
    if (!coinexWsConnnected) {
      coinexWs = new WebSocket('wss://data.arzdigital.com/cnxsocket/')

      coinexWs.onopen = function () {
        console.info('Coinex WebSocket Started\n')

        coinexWsConnnected = true

        // heartbeat();
        ;(function _() {
          coinexWs.send('{"id":1,"method":"ping","params":[]}')
          if (coinexWsConnnected) setTimeout(_, 3000)
        })()
        // coinexWs.send('{"id":2,"method":"state.subscribe","params":[]}');
        coinexWs.send(
          '{"id":3,"method":"kline.subscribe","params":["' +
            SYMBOL +
            '",' +
            COINEX_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)] +
            ']}'
        )
      }

      coinexWs.onmessage = function (message) {
        let msg
        let symbol
        let coin

        try {
          message = JSON.parse(message.data)

          if (message.method == 'kline.update' && message.error == null) {
            msg = message.params

            if (msg && wsDataCallback) {
              var bar = {
                time: parseInt(msg[0][0]) * 1000,
                open: parseFloat(msg[0][1]),
                close: parseFloat(msg[0][2]),
                high: parseFloat(msg[0][3]),
                low: parseFloat(msg[0][4]),
                volume: parseFloat(msg[0][5]),
              }

              wsDataCallback(bar)
            }
          } else if (typeof coinexWs.onTimeMessage == 'function') {
            coinexWs.onTimeMessage(message)
          }
        } catch (err) {
          console.error(err)
        }
      }

      coinexWs.onerror = function (e) {
        console.error(e)
      }
      coinexWs.onclose = function () {
        coinexWsConnnected = false
        setTimeout(coinexWebsocket, 5000)
      }
    }
  }
  function binanceFutureWebsocket() {
    var tryConnectAgain

    tryConnectAgain = false

    if (!binFutureWsConnnected) {
      binanceFutureWs = new WebSocket(
        FUTURE_TYPE == 'usd-m'
          ? 'wss://data.arzdigital.com/bnsfstream/stream'
          : 'wss://data.arzdigital.com/bnsdstream/stream'
      )
      binanceFutureWs.onerror = function (event) {
        binFutureWsConnnected = false

        if (!tryConnectAgain) {
          tryConnectAgain = true
          setTimeout(binanceFutureWs, 5000)
        }
      }
      binanceFutureWs.onclose = function (event) {
        binFutureWsConnnected = false

        if (!tryConnectAgain) {
          tryConnectAgain = true

          setTimeout(binanceFutureWs, 1000)
        }
      }

      binanceFutureWs.onopen = function (event) {
        binFutureWsConnnected = true

        binanceFutureWs.onmessage = function (event) {
          var data = event.data

          if (data) {
            if (data instanceof Blob) {
              data.arrayBuffer().then(function (message) {
                try {
                  var data = JSON.parse(pako.ungzip(message, { to: 'string' }))

                  if (wsDataCallback && data.e == 'continuous_kline') {
                    var a = `${data.ps.toLowerCase()}_perpetual@continuousKline_${
                      data.k.i
                    }`

                    if (a == binFutureWsCurStream) {
                      var bar = {
                        time: parseInt(data.k.t),
                        open: parseFloat(data.k.o),
                        high: parseFloat(data.k.h),
                        low: parseFloat(data.k.l),
                        close: parseFloat(data.k.c),
                        volume: parseFloat(data.k.v || 0),
                      }
                      wsDataCallback(bar)
                    }
                  }
                } catch (e) {
                  console.error(e)
                }
              })
            }
          }
        }
      }
    }
  }

  function kucoinWebsocket() {
    var tryConnectAgain

    tryConnectAgain = false
    var ws_ping_timeout = 0
    if (!kucoinWsConnnected) {
      jQuery.ajax({
        method: 'post',
        url: 'https://data.arzdigital.com/kcapi/api/v1/bullet-public',

        success: function (response) {
          var res = response.data
          kucoinWs = new WebSocket(
            `${res.instanceServers[0].endpoint.replace(
              'arzdigital.com',
              'kucoin.com'
            )}?token=${res.token}`
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
            console.info('ping: ', message)

            clearTimeout(ws_ping_timeout)
            ws_ping_timeout = setTimeout(function () {
              kucoinWs.close()
            }, 60000)
          }

          kucoinWs.onmessage = function (message) {
            console.info('Kucoin get message')

            try {
              let response = JSON.parse(message.data)

              if (
                response.subject == 'trade.candles.update' &&
                response.topic === '/market/candles:' + kucoinWsCurStream
              ) {
                let a = response.data.candles

                if (wsDataCallback) {
                  var bar = {
                    time: parseInt(a[0]) * 1000,
                    open: parseFloat(a[1]),
                    close: parseFloat(a[2]),
                    high: parseFloat(a[3]),
                    low: parseFloat(a[4]),
                    volume: parseFloat(a[5]),
                  }
                  wsDataCallback(bar)
                }
              }
            } catch (err) {
              console.error(err)
            }
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

  function kucoinFuturesWebsocket() {
    var tryConnectAgain

    tryConnectAgain = false
    var ws_ping_timeout = 0
    if (!kucoinFuturesWsConnnected) {
      jQuery.ajax({
        method: 'post',
        url: 'https://data.arzdigital.com/kcapi/api/v1/bullet-public',

        success: function (response) {
          var res = response.data
          kucoinFuturesWs = new WebSocket(
            `${res.instanceServers[0].endpoint.replace(
              'arzdigital.com',
              'kucoin.com'
            )}?token=${res.token}`
          )

          kucoinFuturesWs.onopen = function () {
            console.info('Kucoin futures WebSocket is start')
            kucoinFuturesWsConnnected = true

            ws_ping_timeout = setInterval(() => {
              if (kucoinFuturesWs === null) {
                clearInterval(ws_ping_timeout)
              } else {
                kucoinFuturesWs.send(
                  JSON.stringify({
                    id: Date.now(),
                    type: 'ping',
                  })
                )
              }
            }, 5000)
          }

          kucoinFuturesWs.onping = function (message) {
            console.info('ping: ', message)

            clearTimeout(ws_ping_timeout)
            ws_ping_timeout = setTimeout(function () {
              kucoinFuturesWs.close()
            }, 60000)
          }

          kucoinFuturesWs.onmessage = function (message) {
            console.info('Kucoin futures get message')

            try {
              let response = JSON.parse(message.data)

              if (
                response.subject == 'candle.stick' &&
                response.topic ===
                  '/contractMarket/candle:' + kucoinFuturesWsCurStream
              ) {
                let a = response.data

                if (wsDataCallback) {
                  var bar = {
                    time: a.time,
                    open: a.open,
                    close: a.close,
                    high: a.high,
                    low: a.low,
                    volume: a.volume,
                  }
                  wsDataCallback(bar)
                }
              }
            } catch (err) {
              console.error(err)
            }
          }

          kucoinFuturesWs.onclose = function () {
            console.error('Kucoin futures WebSocket Closed')

            kucoinFuturesWs = null
            kucoinFuturesWsConnnected = false
          }

          kucoinFuturesWs.onerror = function (error) {
            console.error(error)
          }
        },
      })
    }
  }

  function bybitWebsocket() {
    if (!bybitWsConnnected) {
      bybitWs = new WebSocket('wss://stream.bybit.com/spot/quote/ws/v2')

      bybitWs.onopen = function () {
        console.info('bybit WebSocket Started\n')

        bybitWsConnnected = true

        // heartbeat();
        ;(function _() {
          bybitWs.send('{"ping":' + Date.now() + '}')
          if (bybitWsConnnected) setTimeout(_, 3000)
        })()

        bybitWs.send(
          '{"topic":"kline","event":"sub","params":{"symbol":"' +
            bybit_SYMBOL +
            '","klineType":"' +
            bybit_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)] +
            '","binary":false}}'
        )
      }

      bybitWs.onmessage = function (message) {
        let msg
        let symbol
        let coin

        try {
          message = JSON.parse(message.data)

          if (message.topic == 'kline' && message.data) {
            msg = message.data

            if (msg && wsDataCallback) {
              var bar = {
                time: parseInt(msg.t),
                open: parseFloat(msg.o),
                close: parseFloat(msg.c),
                high: parseFloat(msg.h),
                low: parseFloat(msg.l),
                volume: parseFloat(msg.v),
              }

              wsDataCallback(bar)
            }
          } else if (typeof bybitWs.onTimeMessage == 'function') {
            bybitWs.onTimeMessage(message)
          }
        } catch (err) {
          console.error(err)
        }
      }

      bybitWs.onerror = function (e) {
        console.error(e)
      }
      bybitWs.onclose = function () {
        bybitWsConnnected = false
        setTimeout(bybitWebsocket, 5000)
      }
    }
  }

  function bybitFuturesWebsocket() {
    if (!bybitFuturesWsConnnected) {
      bybitFuturesWs = new WebSocket('wss://stream.bybit.com/realtime_public')

      bybitFuturesWs.onopen = function () {
        console.info('bybit Futures WebSocket Started\n')

        bybitFuturesWsConnnected = true

        // heartbeat();
        ;(function _() {
          bybitFuturesWs.send('{"op":"ping"}')
          if (bybitFuturesWsConnnected) setTimeout(_, 3000)
        })()

        bybitFuturesWs.send(
          '{"op":"subscribe","args":["candle.' +
            bybit_futures_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)] +
            '.' +
            bybit_futures_SYMBOL +
            '"]}'
        )
      }

      bybitFuturesWs.onmessage = function (message) {
        let msg
        let symbol
        let coin

        try {
          message = JSON.parse(message.data)

          var topicName =
            'candle.' +
            bybit_futures_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)] +
            '.' +
            bybit_futures_SYMBOL

          if (message.topic == topicName && message.data) {
            msg = message.data

            if (msg && wsDataCallback) {
              if (Array.isArray(msg)) {
                msg = msg[0]
              }

              if (msg.timeframe) {
                var bar = {
                  time: parseInt(msg.timestamp / 1000),
                  open: parseFloat(msg.open),
                  close: parseFloat(msg.close),
                  high: parseFloat(msg.high),
                  low: parseFloat(msg.low),
                  volume: parseFloat(msg.volume),
                }

                wsDataCallback(bar)
              }
            }
          } else if (typeof bybitFuturesWs.onTimeMessage == 'function') {
            bybitFuturesWs.onTimeMessage(message)
          }
        } catch (err) {
          console.error(err)
        }
      }

      bybitFuturesWs.onerror = function (e) {
        console.error(e)
      }
      bybitFuturesWs.onclose = function () {
        bybitFuturesWsConnnected = false
        setTimeout(bybitFuturesWebsocket, 5000)
      }
    }
  }

  function okexWebsocket() {
    if (!okexWsConnnected) {
      okexWs = new WebSocket('wss://real.okex.com:8443/ws/v3')

      okexWs.onopen = function () {
        console.info('okex WebSocket Started\n')

        okexWsConnnected = true
        /*
							// heartbeat();
							(function _() {
								okexWs.send('{"op":"ping"}');
								if(okexWsConnnected) setTimeout(_, 3000);
							})();
							*/
        okexWs.send(
          '{"op":"subscribe","args":["spot/candle' +
            okex_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)] +
            's:' +
            okex_SYMBOL +
            '"]}'
        )
      }

      okexWs.onmessage = function (message) {
        let msg
        let symbol
        let coin

        try {
          var fileReader = new FileReader()
          fileReader.onload = function (event) {
            var arrayBuffer = event.target.result

            var uint8ArrayNew = new Uint8Array(arrayBuffer)

            var data = pako.inflate(uint8ArrayNew, { raw: true, to: 'string' })
            rest(data)
          }
          fileReader.readAsArrayBuffer(message.data)

          function rest(message) {
            message = JSON.parse(message)

            var topicName =
              'spot/candle' +
              okex_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)] +
              's'

            if (message.table == topicName && message.data) {
              msg = message.data[0].candle

              if (msg && wsDataCallback) {
                var t = new Date(msg[0]).getTime()

                var bar = {
                  time: t,
                  open: parseFloat(msg[1]),
                  close: parseFloat(msg[4]),
                  high: parseFloat(msg[2]),
                  low: parseFloat(msg[3]),
                  volume: parseFloat(msg[5]),
                }

                wsDataCallback(bar)
              }
            } else if (typeof okexWs.onTimeMessage == 'function') {
              okexWs.onTimeMessage(message)
            }
          }
        } catch (err) {
          console.error(err)
        }
      }

      okexWs.onerror = function (e) {
        console.error(e)
      }
      okexWs.onclose = function () {
        okexWsConnnected = false
        setTimeout(okexWebsocket, 5000)
      }
    }
  }
  function coinexFuturesWebsocket() {
    if (!coinexFuturesWsConnnected) {
      coinexFuturesWs = new WebSocket('wss://perpetual.coinex.com/')

      coinexFuturesWs.onopen = function () {
        console.info('coinex Futures WebSocket Started\n')

        coinexFuturesWsConnnected = true

        // heartbeat();
        ;(function _() {
          coinexFuturesWs.send(
            '{"method":"server.ping","params":[],"id":' + Date.now() + '}'
          )
          if (coinexFuturesWsConnnected) setTimeout(_, 3000)
        })()

        coinexFuturesWs.send(
          '{"method":"kline.subscribe","params":["' +
            okex_SYMBOL +
            '",' +
            okex_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)] +
            '],"id":1}'
        )
      }

      coinexFuturesWs.onmessage = function (message) {
        let msg
        let symbol
        let coin

        try {
          message = JSON.parse(message.data)

          if (message.method == 'kline.update' && message.params) {
            msg = message.params[0]

            if (msg && wsDataCallback) {
              var bar = {
                time: msg[0] * 1000,
                open: parseFloat(msg[1]),
                close: parseFloat(msg[2]),
                high: parseFloat(msg[3]),
                low: parseFloat(msg[4]),
                volume: parseFloat(msg[6]),
              }

              wsDataCallback(bar)
            }
          } else if (typeof coinexFuturesWs.onTimeMessage == 'function') {
            coinexFuturesWs.onTimeMessage(message)
          }
        } catch (err) {
          console.error(err)
        }
      }

      coinexFuturesWs.onerror = function (e) {
        console.error(e)
      }
      coinexFuturesWs.onclose = function () {
        coinexFuturesWsConnnected = false
        setTimeout(coinexFuturesWebsocket, 5000)
      }
    }
  }

  jQuery(function ($) {
    initOnReady(SYMBOL, TIMEFRAME)
    if (EXCHANGE == 'coinex') {
      coinexWebsocket()
    } else if (EXCHANGE == 'binance') {
      binWsCurStream =
        SYMBOL.toLowerCase() +
        '@kline_' +
        BINANCE_INTERNALS[TV_INTERNALS.indexOf(TIMEFRAME)].toLowerCase()
      binanceWebsocket()
    } else if (EXCHANGE == 'binance-futures') {
      binanceFutureWebsocket()
    } else if (EXCHANGE == 'kucoin') {
      // kucoinWebsocket();
    } else if (EXCHANGE == 'kucoin-futures') {
      kucoinFuturesWebsocket()
    } else if (EXCHANGE == 'bybit') {
      bybitWebsocket()
    } else if (EXCHANGE == 'bybit-futures') {
      bybitFuturesWebsocket()
    } else if (EXCHANGE == 'okex') {
      okexWebsocket()
    } else if (EXCHANGE == 'coinex-futures') {
      coinexFuturesWebsocket()
    }
  })
})()
