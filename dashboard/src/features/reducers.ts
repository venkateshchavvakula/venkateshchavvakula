import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import userReducer from './user/userSlice'

export default combineReducers({
  auth: authReducer,
  user: userReducer,
})
