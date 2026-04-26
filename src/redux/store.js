import { configureStore } from "@reduxjs/toolkit";

import { todosReducer } from "./todos/todosSlice";
import { filtersReducer } from "./filters/filtersSlice";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
    },
});