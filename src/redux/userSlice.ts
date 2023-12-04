import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  isLogged: boolean;
};

export type userSlice = {
  userState: UserState;
};

const initialState: userSlice = {
  userState: {
    isLogged: false,
  },
};

const userSlice = createSlice({
  name: "commonComponents",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<UserState>) => {
      const { isLogged = false } = action.payload;
      state.userState.isLogged = isLogged;
    },
  },
});

export const { setUserState } = userSlice.actions;

export default userSlice.reducer;
