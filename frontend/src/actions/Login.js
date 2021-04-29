import axios from 'axios';
import LoginDispatcher from '../dispatcher/LoginDispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import * as resp from "mongodb";

export const Login = ({email,passwd}) => {
    axios.defaults.timeout = 1500;
    axios.post('/login',
        {
            email: email,
            passwd: passwd
        })
        .then(() => {
            LoginDispatcher.dispatch({
                action: actionConstants.refresh,
                payload: resp.data
            })
        })
        .catch((err) => {
            LoginDispatcher.dispatch({
                action: actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });

        });
}
