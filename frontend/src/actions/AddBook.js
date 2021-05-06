import axios from 'axios';
import BookDispatcher from '../dispatcher/BookDispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import {GetBooks} from "./GetBooks";

export const AddBook = (value) => {
    axios.defaults.timeout = 1500;
    axios.post('/book/add',
        {
            author: value.author,
            title: value.title,
            genre: value.genre
        })
        .then((resp) => {
            console.log("response")
            console.log(resp)
            GetBooks();
        })
        .catch((error) => {
                console.log(error);
                dispatcher.dispatch(
                    {
                        action: actionConstants.showError,
                        payload: null
                    }
                )
            }
        )
}