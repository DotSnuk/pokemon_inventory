import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import axios from 'axios';

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:3000/');
    setData(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <Outlet />
    </div>
  );
}
