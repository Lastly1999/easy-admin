import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getSystemMenus } from '@/api/common/auth'

type AuthState = {
  accessToken: string | null
  menus: any[]
}

const initialState: AuthState = {
  accessToken: null,
  menus: []
}

export const fetchSystemAuthMenus = createAsyncThunk('auth/fetchsystemauthmenus', async () => await getSystemMenus())

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state: AuthState, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSystemAuthMenus.fulfilled, (state, action) => {
      state.menus = action.payload.data
    })
  }
})

export const { setToken } = AuthSlice.actions
export const { name } = AuthSlice
export default AuthSlice.reducer
