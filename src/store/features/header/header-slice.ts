import { createSlice } from '@reduxjs/toolkit'

interface HeaderState {
  hide: boolean;
  isLoading: boolean;
}

const initialState: HeaderState = {
  hide: false,
  isLoading: false,
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleHeader(state) {
      state.hide = !state.hide
    },
    toggleLoader(state, { payload }){
      state.isLoading = payload
    }
  },
})

// Export the action
export const { toggleHeader, toggleLoader } = headerSlice.actions

// Export the reducer
export default headerSlice.reducer
