import { apiSlice } from "../../../app/api/apiSlice";
import * as ticketApi from "./tech.ticket.endPoint";

export const techTicketSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllTicketsApi: ticketApi.showAllTicketsApi(builder),
		getOneTicketApi: ticketApi.showOneTicketApi(builder),
		assignTicketApi: ticketApi.AssignTicketApi(builder),
		finishTicketApi: ticketApi.finishTicketApi(builder),
	}),
});
export const {
    useGetAllTicketsApiQuery,
    useGetOneTicketApiQuery,
} = techTicketSlice;