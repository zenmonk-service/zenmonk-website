import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HeaderState {
  hide: boolean;
  isLoading: boolean;
  isContactModalOpen: boolean;
  contactModalTitle?: string;
}

const initialState: HeaderState = {
  hide: false,
  isLoading: false,
  isContactModalOpen: false,
  contactModalTitle: undefined,
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleLoader(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload
    },
    setHeaderHide(state, { payload }: PayloadAction<boolean>) {
      state.hide = payload
    },
    openContactModal(state, action: PayloadAction<string | undefined>) {
      state.isContactModalOpen = true
      state.contactModalTitle = action.payload
    },
    closeContactModal(state) {
      state.isContactModalOpen = false
      state.contactModalTitle = undefined
    },
  },
})

// Export the action
export const {
  toggleLoader,
  setHeaderHide,
  openContactModal,
  closeContactModal,
} = headerSlice.actions

// Export the reducer
export default headerSlice.reducer

