/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type PopupState = {
  isVisible: boolean;
  content: React.ReactNode | null;
  popupName: 'Auth' | 'create_services';
};

const initialState: PopupState = {
  isVisible: false,
  content: null,
  popupName: 'Auth',
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopupName: (
      state,
      action: PayloadAction<'Auth' | 'create_services'>
    ) => {
      state.popupName = action.payload;
    },
    showPopup: (state, action: PayloadAction<React.ReactNode>) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    hidePopup: (state) => {
      state.isVisible = false;
      state.content = null;
    },
  },
});

export const { showPopup, hidePopup, setPopupName } = popupSlice.actions;

export default popupSlice.reducer;
