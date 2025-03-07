import { apiSlice } from "../../app/api/apiSlice";
export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		registerApi: builder.mutation({
			query: (credentials) => ({
				url: "/auth/register/user",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useRegisterApiMutation } = authApiSlice;
