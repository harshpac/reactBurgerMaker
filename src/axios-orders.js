import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-17457-default-rtdb.firebaseio.com/'
});

export default instance;