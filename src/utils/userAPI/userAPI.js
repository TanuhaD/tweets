import axios from 'axios';

const endpoint = 'https://6465d0b39c09d77a62f4ad85.mockapi.io/';

export const getUsers = async ({ page = 1, limit = 3 } = {}) => {
  const { data } = await axios.get('users', {
    baseURL: endpoint,
    params: { page, limit },
  });
  return data;
};
