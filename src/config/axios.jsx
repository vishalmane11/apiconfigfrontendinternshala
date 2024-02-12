import axios from "axios";

const instance = axios.create({
    baseURL:
        "https://restful-api-w35e.onrender.com" || "http://localhost:8080/",
    withCredentials: true,
});

export default instance;
