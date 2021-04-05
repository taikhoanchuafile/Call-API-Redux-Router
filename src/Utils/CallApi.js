
import axios from 'axios';
import {API_URL} from '../Constants/Config';

const callApi = (endpoint, method, body) => {
    return (
        axios({
            url: `${API_URL}/${endpoint}`,
            method: method,
            data: body
        }).catch((err) => {
            console.log(err);
        })
    );
}

export default callApi;