import axios from 'axios';
import BookDispatcher from '../dispatcher/BookDispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'

export const GetBooks = () => {
    axios.defaults.timeout = 1500;
    axios.get('/getAll').then((resp) => {
        BookDispatcher.dispatch({
            action: actionConstants.refresh,
            payload: resp.data
        })
    })
}