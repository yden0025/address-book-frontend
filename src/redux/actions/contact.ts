import { message } from "antd";
import { http } from "../../utils/http";
import { GET_COUNTER } from "../constants";
import { IContact, ICounter } from "../reducers/contact";

const getNameCount = (counter: ICounter) => ({ type: GET_COUNTER, payload: counter });

const createContact = (contact: IContact, book_id: string) => {
    return () => {
        http.post(`contact/${book_id}`, contact)
            .then((response) => {
                message.success('contact is successfully created!');
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    }
}

const fetchNameCount = () => {
    return async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
        const res = await http.get('contact/count/all');
        dispatch(getNameCount(res.data));
    }
}

export { createContact, fetchNameCount };