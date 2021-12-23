import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import announcmentsSlice from "./announcmentsSlice";
import activitiesSlice from "./activitiesSlice";
import universitiesSlice from "./universitiesSlice";
import clubSlice from "./clubSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userSlice,
    activities: activitiesSlice,
    announcements: announcmentsSlice,
    universities: universitiesSlice,
    club: clubSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
