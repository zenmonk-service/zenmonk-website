import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ContactSubmittingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface HeaderState {
  hide: boolean;
  isLoading: boolean;
  isContactModalOpen: boolean;
  contactModalTitle?: string;
  isContactSubmitting: boolean;
  currentContactSubmittingData: ContactSubmittingData | null;
  contactBackgroundToast: { message: string; type: 'success' | 'error' } | null;
}

const initialState: HeaderState = {
  hide: false,
  isLoading: false,
  isContactModalOpen: false,
  contactModalTitle: undefined,
  isContactSubmitting: false,
  currentContactSubmittingData: null,
  contactBackgroundToast: null,
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
    setContactSubmitting(state, action: PayloadAction<{ isSubmitting: boolean; data?: ContactSubmittingData | null }>) {
      state.isContactSubmitting = action.payload.isSubmitting
      if (action.payload.data !== undefined) {
        state.currentContactSubmittingData = action.payload.data
      }
    },
    setContactBackgroundToast(state, action: PayloadAction<{ message: string; type: 'success' | 'error' } | null>) {
      state.contactBackgroundToast = action.payload
    },
    clearContactBackgroundToast(state) {
      state.contactBackgroundToast = null
    },
    resetContactSubmitting(state) {
      state.isContactSubmitting = false
      state.currentContactSubmittingData = null
    },
  },
})

// Export the action
export const {
  toggleLoader,
  setHeaderHide,
  openContactModal,
  closeContactModal,
  setContactSubmitting,
  setContactBackgroundToast,
  clearContactBackgroundToast,
  resetContactSubmitting,
} = headerSlice.actions

// Export the reducer
export default headerSlice.reducer

