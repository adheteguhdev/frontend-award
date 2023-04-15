import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const singIn = async (email) => {
  const response = await axios.post(API_URL + '/user/signin', {
    email
  });

  if (response.data.token) {
    localStorage.setItem('token', JSON.stringify(response.data));
  }

  return response.data
}

const logout = async () => {
  localStorage.removeItem('token');
}

const authService = {
  singIn,
  logout
}
export default authService