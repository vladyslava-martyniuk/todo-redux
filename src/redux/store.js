import { configureStore } from "@reduxjs/toolkit";

import { todosReducer } from "./todos/todosSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { userReducer } from "./users/usersSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token']
}
const persistedReducer = persistReducer(persistConfig, userReducer)
export const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
        users: persistedReducer
    },
});
 export let persistor = persistStore(store)