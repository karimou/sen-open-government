import axios from 'axios';

const http = axios.create({
    baseUrl: import.meta.env.BASE_API_URL
});

export default http;