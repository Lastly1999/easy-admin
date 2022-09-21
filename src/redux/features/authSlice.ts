import { createSlice } from '@reduxjs/toolkit'

type AuthState = {
  accessToken: string | null
}

const initialState: AuthState = {
  accessToken: null
}

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
