import user from "@mocks/profile";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserProfile } from "@src/types";
import { delay } from "@src/utils/time";

export interface UserState {
  user: IUserProfile | null;
  loggedIn: boolean;
  loading: boolean;
  error: string;
  token: string;
}

const initialState: UserState = {
  user: null,
  loggedIn: false,
  loading: false,
  token: "",
  error: "",
};

export const login = createAsyncThunk(
  "user/login",
  async (): Promise<{ user: IUserProfile; token: string }> => {
    // Make async request here
    await delay(3);
    return { user, token: "1234" };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn(state, action: PayloadAction<{ user: IUserProfile; token: string }>) {
      const { token, user } = action.payload;
      state.loading = false;
      state.loggedIn = true;
      state.token = token;
      state.user = user;
    },
    loggedOut(state) {
      state.token = "";
      state.user = null;
      state.loggedIn = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ user: IUserProfile; token: string }>) => {
          const { token, user } = action.payload;
          state.token = token;
          state.user = user;
          state.loading = false;
          state.loggedIn = true;
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
