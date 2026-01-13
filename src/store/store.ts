import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './features/header/header-slice'
import jobsReducer from './features/jobs/jobs-slice'
import applicationsReducer from './features/applications/applications-slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      header: headerReducer,
      jobs: jobsReducer,
      applications: applicationsReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']