import { apiSlice } from "../../../app/api/apiSlice";
import * as ticketApi from "./manager.ticket.endPoint";

export const ManagerTicketSlice = apiSlice.injectEndpoints({
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
} = ManagerTicketSlice;