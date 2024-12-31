import axios from 'axios';

export async function getTrainers() {
  const response = await axios.get('http://localhost:3000/');
  return response.data;
}
