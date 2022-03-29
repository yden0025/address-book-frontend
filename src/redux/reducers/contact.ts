import { GET_COUNTER } from "../constants";

export interface IContact {
    _id: string,
    name: string,
    phone: string,
    description?: string,
}

export interface ICounter {
    [name: string]: number
}

const initialState: ICounter = {};

const contact = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case GET_COUNTER:
            return action.payload;
        default:
            return state;
    }
}

export { contact };