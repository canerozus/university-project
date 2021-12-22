import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import announcmentsSlice from './announcmentsSlice'
import activitiesSlice from './activitiesSlice'
export const store = configureStore({
  reducer: {
      user:userSlice,
      activities:activitiesSlice,
      announcements:announcmentsSlice
  },
})