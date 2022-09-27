import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSystemMenus } from '@/api/common/auth'

type AuthState = {
  accessToken: string | null
}

const initialState: AuthState = {
  accessToken: null
}

const fetchSystemAuthMenus = createAsyncThunk('auth/fetchsystemauthmenus', async () => getSystemMenus())

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload
    }
  }
})

export const { setToken } = AuthSlice.actions

export default AuthSlice.reducer
