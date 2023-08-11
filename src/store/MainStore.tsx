import { configureStore } from "@reduxjs/toolkit";
import { CardService } from "Service/CardService";

const store = configureStore({
	reducer: {
		[CardService.reducerPath]: CardService.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(CardService.middleware);
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
