import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiConfigs } from "Configs";

export const CardService = createApi({
	reducerPath: "CardService",
	baseQuery: fetchBaseQuery({ baseUrl: ApiConfigs.BASE_PATH }),
	endpoints: (builder) => ({
		getCardService: builder.mutation<string, string>({
			query: (name) => ``,
		}),
	}),
});

export const { useGetCardServiceMutation } = CardService;
