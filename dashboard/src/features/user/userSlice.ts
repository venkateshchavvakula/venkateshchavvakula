import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../middleware/api-creators'
import * as user from '../../utils/auth'
import { showToastMessage } from './../../utils/helpers'

const initialState = {
  userList: [],
  isloading: false,

  usersData: {
    total_count: 0,
    total_active_users: 0,
    total_inactive_users: 0,
  },

  isUserListLoading: false,
  metadata: {
    totalUsers: 0,
    totalPages: 0,
    total: 0,
  },

  logsmeta: {
    totalLogs: 0,
    totalPages: 0,
    total: 0,
  },

  userById: {},
  userLogs: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UserListSuccess: (state, action) => {
      // console.log('action:', action.payload)

      state.isUserListLoading = false

      state.userList = action.payload.data.data || []

      state.metadata.totalPages = action?.payload?.data.meta?.last_page
      state.metadata.total = action?.payload?.data?.meta?.total
      state.metadata.totalUsers = action?.payload?.total_users
    },
    UserListPending: (state, action) => {
      state.isUserListLoading = true
    },
    UserListFailed: (state, action) => {
      state.isUserListLoading = false
    },

    UserFetchedPending: (state, action) => {
      console.log('action:', action)
      state.isloading = true
    },
    UserFetchedSuccess: (state, action) => {
      console.log('userById:', action?.payload?.data)
      state.userById = action?.payload?.data
      state.isloading = false
    },
    UserFetchedFailed: (state, action) => {
      state.isloading = false
    },

    UserLogsSuccess: (state, action) => {
      console.log('fetchUserLogs')
      state.userLogs = action?.payload?.data?.data
      console.log('action?.payload:', action?.payload)

      state.logsmeta.totalPages = action?.payload?.data.meta?.last_page
      state.logsmeta.total = action?.payload?.data?.meta?.total
      state.logsmeta.totalLogs = action?.payload?.data?.meta?.total
    },
    UserLogsPending: (state, action) => {},
    UserLogsFailed: (state, action) => {},

    UserStatusSuccess: (state, action) => {
      console.log('action:', action.payload)

      showToastMessage(action.payload.data.message, 'success')
    },
    UserStatusFailed: (state, action) => {
      showToastMessage(action.payload.message, 'error')
    },

    // User Analytics
    UsersDataSuccess: (state, action) => {
      state.usersData = action.payload.data
    },
    UsersDataPending: (state, action) => {},
    UsersDataFailed: (state, action) => {
      console.log('action:', action.payload)
    },
  },
})

export const {
  UserListSuccess,
  UserListPending,
  UserListFailed,
  UserFetchedPending,
  UserFetchedSuccess,
  UserFetchedFailed,
  UserLogsSuccess,
  UserLogsFailed,
  UserLogsPending,
  UserStatusSuccess,
  UserStatusFailed,
  UsersDataSuccess,
  UsersDataPending,
  UsersDataFailed,
} = userSlice.actions

export default userSlice.reducer

export const fetchUsers = (data: any) =>
  apiCallBegan({
    url: `/admin/users?status=${data.status}&search_key=${data.search_key}&role_id=${data.role_id}&page=${data.page}`,
    method: 'GET',
    data,
    onStart: UserListPending.type,
    onSuccess: UserListSuccess.type,
    onError: UserListFailed.type,
  })

export const fetchUserById = (id: any) =>
  apiCallBegan({
    url: `/admin/users/${id}`,
    method: 'GET',
    onStart: UserFetchedPending.type,
    onSuccess: UserFetchedSuccess.type,
    onError: UserFetchedFailed.type,
  })

export const fetchUserLogs = (data: any) =>
  apiCallBegan({
    url: `/admin/users/logs/${data.id}?page=${data.page}&start_date=${data.start_date}&end_date=${data.end_date}`,
    method: 'GET',
    onStart: UserLogsPending.type,
    onSuccess: UserLogsSuccess.type,
    onError: UserLogsFailed.type,
  })

export const UpdateUserStatus = (id: any, data: any) =>
  apiCallBegan({
    url: `/admin/users/update-status/${id}`,
    method: 'PATCH',
    data,
    onSuccess: UserStatusSuccess.type,
    onError: UserStatusFailed.type,
  })

// Users Analytics
export const fetchUsersAnalytics = (start_date: any, end_date: any) =>
  apiCallBegan({
    url: `/admin/users/stats?start_date=${start_date}&end_date=${end_date}`,
    method: 'GET',
    onSuccess: UsersDataSuccess.type,
    onStart: UsersDataPending.type,
    onError: UsersDataFailed.type,
  })
