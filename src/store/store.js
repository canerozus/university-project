import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import announcmentsSlice from './announcmentsSlice'
import activitiesSlice from './activitiesSlice'
import universitiesSlice from './universitiesSlice'
export const store = configureStore({
  reducer: {
      user:userSlice,
      activities:activitiesSlice,
      announcements:announcmentsSlice,
      universities: universitiesSlice
  },
})