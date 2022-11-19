import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/User'
import AlertReducer from '../features/Alert'
import loginReducer from '../features/Login'
import StaticReducer from '../features/Static'
import ToolBoxReducer from '../features/ToolBox'
import reRenderReducer from '../features/reRenders'
import AlertConditionsReducer from '../features/AlertConditions'

const store = configureStore({
  reducer: {
    login: loginReducer,
    userRole: userReducer,
    Alerts: AlertReducer,
    AlertCond: AlertConditionsReducer,
    Static: StaticReducer,
    reRender: reRenderReducer,
    ToolBox: ToolBoxReducer,

  },
})
export default store
