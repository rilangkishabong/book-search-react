import axios from "axios";

export const apiUrl = "http://68.178.162.203:8080/application-test-v1.1/books";

export default axios.create({
    withCredentials: false,
    timeout: 10000,
    baseURL: apiUrl,
});