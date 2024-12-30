import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:3000/');
    setData(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return <></>;
}

export default App;
