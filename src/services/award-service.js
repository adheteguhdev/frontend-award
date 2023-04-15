import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const getAwards = async () => {
  const response = await axios.get(API_URL + '/award', { headers: authHeader() });
  return response;
}

export default getAwards