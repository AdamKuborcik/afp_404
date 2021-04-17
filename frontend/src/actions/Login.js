import axios from 'axios';
import BookDispatcher from '../dispatcher/BookDispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'

export const Login = ({email,passwd}) => {
    axios.defaults.timeout = 1500;
    axios.post('/login',
        {
            email: email,
            passwd:passwd
        })
        .then(() => {
            BookDispatcher.dispatch({action: actionConstants.clearError});
        })
        .catch((err) => {
            BookDispatcher.dispatch({
                action: actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });

        });
}