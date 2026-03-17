import { configureStore } from '@reduxjs/toolkit'
import { assessmentsApi } from './api/assessmentsApi'

export const store = configureStore({
  reducer: {
    [assessmentsApi.reducerPath]: assessmentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(assessmentsApi.middleware),
})
