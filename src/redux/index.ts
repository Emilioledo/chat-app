import { configureStore } from "@reduxjs/toolkit";
import commonComponentReducer from "./commonComponents";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: { commonComponents: commonComponentReducer, userSlice: userSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
