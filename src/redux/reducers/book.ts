import { ADD_BOOK, GET_BOOKS } from "../constants";
import { IContact } from "./contact";

export interface IBook {
    _id: string,
    name: string,
    description?: string,
    contacts: IContact[],
}

const initialState: IBook[] = [];

const book = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case GET_BOOKS:
            return action.payload;
        case ADD_BOOK:
            return [...state, action.payload];
        default:
            return state;
    }
}

export { book };