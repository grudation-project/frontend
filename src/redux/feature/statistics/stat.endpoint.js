export const getAdminStat = (builder) =>
	builder.query({
		query: (params) => ({
			url: "api/admin/statistics",
			method: "GET",
			params,
		}),
	});
export const getUserStat = (builder) =>
	builder.query({
		query: (params) => ({
			url: "api/user/statistics",
			method: "GET",
			params,
		}),
	});
export const getTechnicianStat = (builder) =>
	builder.query({
		query: (params) => ({
			url: "api/technician/statistics",
			method: "GET",
			params,
		}),
	});
export const getManagerStat = (builder) =>
	builder.query({
		query: (params) => ({
			url: "api/manager/statistics",
			method: "GET",
			params,
		}),
	});
