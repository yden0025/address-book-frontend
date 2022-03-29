import { http } from "../../utils/http";
import { IBook } from "../reducers/book";
import { ADD_BOOK, GET_BOOKS } from "../constants";
import { IRootState } from "../reducers";
import { message } from "antd";

const getBooks = (books: IBook[]) => ({ type: GET_BOOKS, payload: books });
const addBooks = (book: IBook) => ({ type: ADD_BOOK, payload: book });

const getAllBooks = () => {
    return async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
        const res = await http.get('book');
        await dispatch(getBooks(res.data));
    }
}

const createBook = (book: IBook) => {
    return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
        http.post('book', book)
            .then((response) => {
                dispatch(addBooks(response.data));
                message.success('book is successfully created!');
            })
            .catch((error) => {
                message.error(error.response.data.message);
            });
    }
}

export { getAllBooks, createBook }