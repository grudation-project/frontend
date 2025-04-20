import { apiSlice } from "../../../app/api/apiSlice";
import * as ticketApi from "./user.ticket.endPoint";

export const userTicketSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllTicketsApi: ticketApi.showAllTicketsApi(builder),
		getOneTicketApi: ticketApi.showOneTicketApi(builder),
		createTicketApi: ticketApi.createTicketApi(builder),
		updateTicketApi: ticketApi.updateTicketApi(builder),
	}),
});
export const {
	useGetAllTicketsApiQuery,
	useGetOneTicketApiQuery,
	useCreateTicketApiMutation,
	useUpdateTicketApiMutation,
} = userTicketSlice;
