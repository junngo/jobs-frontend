import axios from 'axios';


let BASE_URL = 'http://localhost:8080';
if (process.env.NODE_ENV === "production") {
    BASE_URL = "http://localhost:8080";
}

const client = axios.create({
    baseURL: BASE_URL
});

export default client;
