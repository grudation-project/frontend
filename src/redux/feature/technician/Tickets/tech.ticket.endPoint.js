export const showAllTicketsApi = (builder) =>
	builder.query({
		query: () => ({
			url: "api/technicians/tickets",
			method: "GET",
		}),
	});

export const showOneTicketApi = (builder) =>
	builder.query({
		query: (id) => ({
			url: `api/technicians/tickets/${id}`,
			method: "GET",
		}),
	});

export const finishTicketApi = (builder) =>
	builder.mutation({
		query: (id) => ({
			url: `api/technicians/tickets/${id}/finish`,
			method: "PATCH",
		}),
	});
