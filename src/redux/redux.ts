import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

interface ReduerCombineOpt {
  [index: string]: any
}

// auto import reducers 导入全部的splice
const appImportReducers = import.meta.glob('./features/*.ts', { eager: true })
const reduerCombine: ReduerCombineOpt = {}
Object.values(appImportReducers).map((item: any) => {
  reduerCombine[item.name] = item.default
})

// 合并reducers
const reduers = combineReducers(reduerCombine)

// 配置redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

// 持久化reducers
const persistReducers = persistReducer(persistConfig, reduers)

// 创建store
export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoreActions: true } })
})

// redux-persist 持久化
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
