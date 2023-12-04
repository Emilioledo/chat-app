import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ErrorModalState = {
  show: boolean;
  title?: string;
  message?: string;
};

export type commonComponentsState = {
  errorModal: ErrorModalState;
};

const initialState: commonComponentsState = {
  errorModal: {
    show: false,
    title: "",
    message: "",
  },
};

const commonComponents = createSlice({
  name: "commonComponents",
  initialState,
  reducers: {
    setAppErrorModal: (state, action: PayloadAction<ErrorModalState>) => {
      const { title = "", message = "" } = action.payload;
      state.errorModal.show = action.payload.show;
      state.errorModal.title = title;
      state.errorModal.message = message;
    },
    hideErrorModal: (state) => {
      state.errorModal.show = false;
    },
  },
});

export const { setAppErrorModal, hideErrorModal } = commonComponents.actions;

export default commonComponents.reducer;
