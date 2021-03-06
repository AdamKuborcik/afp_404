import axios from 'axios';
import BookDispatcher from '../dispatcher/BookDispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'

export const DeleteBook = ({id}) =>{
    axios.delete('book/delete/'+id)
        .then(() => {
            BookDispatcher.dispatch({action : actionConstants.refresh});
        })
        .catch((err) => {
            BookDispatcher.dispatch({
                action : actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });

        });
}