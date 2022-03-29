import { combineReducers } from 'redux';
import { book, IBook } from './book';
import { contact, ICounter } from './contact';

export interface IRootState {
    book: IBook[],
    contact: ICounter
}

const rootReducer = combineReducers({
    book,
    contact
})

export default rootReducer
