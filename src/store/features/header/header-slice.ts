import { createSlice } from '@reduxjs/toolkit'

interface HeaderState {
  hide: boolean;
  isLoading: boolean;
}

const initialState: HeaderState = {
  hide: false,
  isLoading: false,
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleLoader(state, { payload }) {
      state.isLoading = payload
    },
    setHeaderHide(state, { payload }) {
      state.hide = payload
    },
  },
})

// Export the action
export const { toggleLoader, setHeaderHide } = headerSlice.actions

// Export the reducer
export default headerSlice.reducer
