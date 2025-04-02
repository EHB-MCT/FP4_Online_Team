import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <h1>Welkom</h1>
  )
}

export default App
