/*import React from 'react';
import{Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';


const Auth = (props) => {
    return(
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    Signup
                </Col>
                <Col md="6" className="login-col">
                    Login
                </Col>
            </Row>
        </Container>
    

)
}

export default Auth;*/

//import{Container, Row, Col, Button} from 'reactstrap';
import React, { useState }from 'react';
import './Auth.css';


//const Auth = (props) => {

    const Auth = (props) => {
       // const [loginUp, setLoginUp] = useState(false);
       // const [signupUp, setSignupUp] = useState(false);
      

    //need first, last name, email, password, login(boolean)
   // const [firstName, setFirstName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const title = () => {
        return login ? 'Login' : 'Signup';

    }
    const loginToggle = (event) => {
        event.preventDefault();
        setLogin(!login);
        setEmail('');
        setPassword('');
        //setFirstName('');
        setName('');
    }

    const displaySignupFields = ()=> {
        return !login ? (
            <div>
                
        
                <label htmlFor="name">Name</label>
                <br />

                <input type="text" id= "name" value={name} onChange={(e) => setName(e.target.value)}/>

            </div>
        ): null;
    }

    return (
        <div>
            <div className = "Form">
                <div className ="Container">
                <div className = "Col">
                    <div className = "Row">
        <form action="">
        {/* ToDo: change the title based on what form it is Login/Signup*/}
            <h1>{ title()}</h1>
            {displaySignupFields() }
            <label htmlFor='email'>Email</label>

            <br />

            <input type='text' id='email' value={email} onChange={(event)=>setEmail(event.target.value)}/>
            <br />

            <label htmlFor='password'>Password:</label>
            <br />
            <input type='password' id='password' value={password}onChange={(e)=>setPassword(e.target.value)}/>
            <br />

            <button onClick={loginToggle}>Login/Signup</button>

            <br />

            <button type="submit">Submit User Data</button>

            </form>   
            </div>
            </div> 
        </div>
        </div>
        </div>
    )
}

export default Auth;

