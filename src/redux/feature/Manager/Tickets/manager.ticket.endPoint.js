export const showAllTicketsApi = (builder) =>
	builder.query({
		query: () => ({
			url: "api/manager/tickets",
			method: "GET",
		}),
	});

export const showOneTicketApi = (builder) =>
	builder.query({
		query: (id) => ({
			url: `api/manager/tickets/${id}`,
			method: "GET",
		}),
	});
export const AssignTicketApi = (builder) =>
	builder.mutation({
		query: (data) => ({
			url: `api/manager/tickets/${data.id}/assign`,
			method: "PATCH",
			body: data,
		}),
	});

export const finishTicketApi = (builder) =>
    builder.mutation({
        query: (id) => ({
            url: `api/manager/tickets/${id}/finish`,
            method: "PATCH",
        }),
    });
