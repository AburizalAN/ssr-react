import axios from 'axios';

export const axiosInstanceClient = axios.create({
  baseURL: '/api',
});

export const axiosInstanceServer = (req) => {
  return axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  })
}