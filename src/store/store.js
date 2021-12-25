import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import announcmentsSlice from "./announcmentsSlice";
import activitiesSlice from "./activitiesSlice";
import universitiesSlice from "./universitiesSlice";
import clubSlice from "./clubSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import myCalendarSlice from "./myCalendarSlice";
import activitySlice from "./activitySlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    activities: activitiesSlice,
    announcements: announcmentsSlice,
    universities: universitiesSlice,
    club: clubSlice,
    myCalendar: myCalendarSlice,
    activity: activitySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
