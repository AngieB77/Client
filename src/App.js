import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import Header from "./components/Header";
//import Home from "./components/Home";
import Auth from "./auth/Auth";
import PetIndex from "./components/petcreateindex";
//import APIURL from './helpers/environment';

/*const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Auth/>
      
  
    </div>
  );
}
*/

/*class App extends Component {
  state = {
    pets: []
  }*/


/*componentDidMount()  {
  fetch(`${APIURL}/pet`)
  .then(response => response.json())
  .then(pets => this.setState({pets}))
}

render (){
  return (
    <div className='App'>
      {this.state.pets.map((pet, i) => {
        return (
          <li key={i}>{pet.id}</li>
        )
      }) }
    </div>
  );
}*/



const App = () =>
 {
  const [sessionToken, setSessionToken] = useState("");
  const [name, setName] =useState('');
  //const [clicks, setclicks] = useState(0);


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken =() => {
    localStorage.clear();
    setSessionToken('')
  }
 let pets = ('');
 let updateUser =('');
 
  const protectedView = () => {
    return (sessionToken ===localStorage.getItem('token') ? <PetIndex token={sessionToken} updateToken={updateToken} updateUser={updateUser} clickLogout={clearToken}/>

    : <Auth updateToken={updateToken} updateUser={updateUser}/>
       )
  }
    return (
    <div>
      {protectedView()}
    </div>
  )
  }
export default App;