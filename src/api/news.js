import axios from 'axios';

function fetchNews(){
    return axios.get('http://218.54.233.93:3000/news')
}

export default {
    fetchNews
}