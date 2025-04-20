export const showAllTicketsApi = (builder) =>
	builder.query({
		query: () => ({
			url: "api/user/tickets",
			method: "GET",
		}),
	});

export const showOneTicketApi = (builder) =>
	builder.query({
		query: (id) => ({
			url: `api/user/tickets/${id}`,
			method: "GET",
		}),
	});
export const createTicketApi = (builder) =>
	builder.mutation({
		query: (data) => ({
			url: `api/user/tickets`,
			method: "POST",
			body: data,
		}),
	});

export const updateTicketApi = (builder) =>
	builder.mutation({
		query: ({ id, data }) => ({
			url: `api/user/tickets/${id}`,
			method: "PUT",
			body: data,
		}),
	});
