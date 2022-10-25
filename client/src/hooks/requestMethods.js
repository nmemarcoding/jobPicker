import axios from "axios";

const BASE_URL = "http://localhost:5001/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjBjNjI0MjRhYWM3ZGQ3OTliMmVmOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzA5MjQwMCwiZXhwIjoxNjYzMzUxNjAwfQ.--b1m3uxD67XxEHFVlH0T7nBt9lesropeofRAatjWcM"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})