import axios from 'axios';
import api_url from '../../config/api_url';

function fetchNews(){
    return axios.get(api_url.news_url)
}

export default {
    fetchNews
}