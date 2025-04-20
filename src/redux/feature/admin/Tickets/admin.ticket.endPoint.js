export const showAllTicketsApi = (builder) =>
    builder.query({
        query: () => ({
            url: "api/admin/tickets",
            method: "GET",
        }),
    });

export const showOneTicketApi = (builder) =>
    builder.query({
        query: (id) => ({
            url: `api/admin/tickets/${id}`,
            method: "GET",
        }),
    }); 