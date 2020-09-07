import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        common: {
            Authorization: 'Auth from axiosInstance'
        }
    }
});

axiosInstance.interceptors.request.use(request => {
    // console.log(request);
    return request;
})
export default axiosInstance;