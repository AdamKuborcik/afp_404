import axios from 'axios';
import BookDispatcher from '../dispatcher/BookDispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'

export const ModifyBook = (value) => {
    axios.defaults.timeout = 1500;
    axios.put('/Book/update',
        {
            id:value.modifyID,
            data: {
                author: value.author,
                title: value.title,
                genre: value.genre
            }
        })
        .then((resp) => {
            console.log("was a response")

        })
        .catch((error) => {
                console.log(error);
                BookDispatcher.dispatch(
                    {
                        action: actionConstants.showError,
                        payload: null
                    }
                )
            }
        )
}