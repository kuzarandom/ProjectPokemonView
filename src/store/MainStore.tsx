import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat();
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;