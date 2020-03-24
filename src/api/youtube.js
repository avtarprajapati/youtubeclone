import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
  // params: {
  //   maxResults: 5,
  //   key: 'AIzaSyBFr4ktwpJY002onP9We0VT3xioSud-RTE'
  // }
});
