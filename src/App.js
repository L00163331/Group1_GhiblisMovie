import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from "axios"

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  const handleApi=()=>{
    console.log({email,password}) 
    axios.post("https://reqres.in/api/login",{
      email : email,
      password: password
    })
    .then(result =>{
      console.log(result)

    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="App">
    Email :  <input value={email} onChange={handleEmail} type="text"/>
    
    Password: <input value={password} onChange={handlePassword} type="text"/>
    <button onClick={handleApi}> Login</button>
    </div>
  );
}

export default App;
