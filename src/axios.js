import axios from 'axios';

const instance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com',
  headers: {'Common': "FROM INSTANCE"}
});

export default instance;