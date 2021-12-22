import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import { Router, Switch } from 'react-router-dom';
import { useState } from "react";
function App() {

  const adminUser = {
    username: 'admin',
    password: '1234'
  }
  const [user, setUser] = useState({ username: '', password: '' });
  const [Isloggedin, setIsloggedin] = useState(false)

  const login = details => {
    console.log(details)
    if (details.username == adminUser.username && details.password == adminUser.password) {
      console.log('logged in');
      setUser({
        username:details.username,
        password: details.password
      })
      
    } else {
      console.log('Details not match!')
    }
  }
  return (
    <div className="App">
      {(user.username !== '') ? (
        <Navbar />
      ) : (
        <Login Login={login} />
      )}
    </div>
  );
}

export default App;
