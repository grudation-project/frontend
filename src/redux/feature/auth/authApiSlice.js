import { apiSlice } from "../../app/api/apiSlice";
import { registerApi } from "./register/registerApi";
import { verifyUserApi } from "./register/verifyUserApi";
import { verifyUserResendApi } from "./register/verifyUserResend";
import { loginApi } from "./login/LoginApi";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		registerApi: registerApi(builder),
		verifyUser: verifyUserApi(builder),
		verifyUserResend: verifyUserResendApi(builder),
		login: loginApi(builder),
	}),
});

export const {
	useRegisterApiMutation,
	useVerifyUserMutation,
	useVerifyUserResendMutation,
	useLoginMutation,
} = authApiSlice;
