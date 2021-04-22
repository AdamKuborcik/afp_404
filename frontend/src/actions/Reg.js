import axios from 'axios';
import RegDispatcher from '../dispatcher/RegDispatcher';
import * as actionConstants from '../dispatcher/ActionConstans'
import * as resp from "mongodb";

export const Reg = ({userName,email,passwd}) => {
    axios.defaults.timeout = 1500;
    axios.post('/register',
        {
            userName:userName,
            email: email,
            passwd: passwd
        })
        .then(() => {
            RegDispatcher.dispatch({
                action: actionConstants.refresh,
                payload: resp.data
            })
        })
        .catch((err) => {
            RegDispatcher.dispatch({
                action: actionConstants.showError,
                payload: `${err.response.status}-${err.response.statusText}: ${err.response.data.message}`
            });

        });
}