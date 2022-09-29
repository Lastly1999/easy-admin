import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './features/authSlice'

// 暂未解决利用导入 类型会失效的问题
// interface ReduerCombineOpt {
//   auth?: typeof authSlice
// }
// const appImportReducers = import.meta.glob('./features/*.ts', { eager: true })
// const reduerCombine: ReduerCombineOpt = {}
// Object.values(appImportReducers).map((item: any) => {
//   reduerCombine[item.name] = item.default
// })

// 合并reducers
const rootReduers = combineReducers({
  auth: authSlice
})

// 配置redux-persist
const persistConfig = {
  key: 'root',
  storage,
  devTools: true,
  whitelist: ['auth']
}

// 持久化reducers
const persistReducers = persistReducer(persistConfig, rootReduers)

// 创建store
export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

// redux-persist 持久化
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
