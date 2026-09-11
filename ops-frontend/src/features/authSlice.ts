// File: src/features/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { login as apiLogin } from '../api/authService'; //apiLogin is an alias for the named export(login)
import type { LoginRequest } from '../types/LoginRequest';
import { saveToken, clearToken, getToken } from '../utils/auth';

interface AuthState {
  token: string | null;
  userId: string | null;
  username: string | null;
  userRole: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Initial state checks localStorage for a persistent token shell
const initialState: AuthState = {
  token: getToken(),
//   token: null,
  userId: null,
  username: null,
  userRole: null,
  isAuthenticated: !!getToken(),
  isLoading: false,
  error: null,
};

// Async Thunk Middleware for login API call
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await apiLogin(loginData);  //login(loginData)
      // Assuming your backend responds with { token, userId, username, userRole }
      const data = response.data;
      
      // Persist the token in localStorage
      saveToken(data.token);
      
      return data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || 'Invalid Username or Password'
      );
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      clearToken();
      state.token = null;
      state.userId = null;
      state.username = null;
      state.userRole = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.username = action.payload.username;
        state.userRole = action.payload.userRole;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
