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
		verifyUser: builder.mutation({
			query: (credentials) => ({
				url: "/auth/verify_user",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		verifyUserResend: builder.mutation({
			query: (credentials) => ({
				url: "/auth/verify_user/resend",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: { ...credentials },
			}),
		})
	}),
});

export const {
	useRegisterApiMutation,
	useVerifyUserMutation,
	useVerifyUserResendMutation,
	useLoginMutation
} = authApiSlice;
