import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});


export default api;

//https://api.themoviedb.org/3/ 
//https://api.themoviedb.org/3/movie/now_playing?api_key=b0a0c8bfa3379431090ea52c3bb2110e