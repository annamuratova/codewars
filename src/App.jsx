import { Route, Routes, useNavigate } from "react-router-dom"
import './App.css'
import Home from './pages/home'
import Dashboard from "./pages/dashboard"
import Error from "./pages/error"
import { createContext, useContext, useState } from 'react';

export const ApiContext = createContext();

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    let promise = fetch(`https://www.codewars.com/api/v1/users/${name}`);
    promise.then( response =>{
      return response.json();
    }).then((data) => {
      setData(data);
      navigate('/dashboard');
   })
   .catch(error => {
    console.log(error);
    navigate('/error')});
   
  //  setName("");
  }

  

  return (
    <ApiContext.Provider value={{name, setName, handleSubmit, data, setData}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </ApiContext.Provider>
  )
}

export default App
