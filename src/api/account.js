import axios from 'axios';
import api_url from '../../config/api_url';

function login(user) {
    return axios.post(api_url.login_url, user);
}

export default {
    login
}