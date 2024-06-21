import { configureStore } from "@reduxjs/toolkit"
import servicesSlice from "@/redux/features/servicesSlice";

const rootReducer = {
    services: servicesSlice,
}

export const store = configureStore({
    reducer:rootReducer,
})

