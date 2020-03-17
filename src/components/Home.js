import React from 'react';
//import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../auth/Auth';
//import "../auth/Signup";
//import "../auth/Login";



const Home = (props) => {

    console.log(`HOME PROPS: `, props)

    return (
        
        <div className="main">
            
            <div className="mainDiv">
            
                <div className="jumbotron fluid"> 
                <div className="container">

                        <h1>{props.token}</h1>
                        <h1>Welcome to Rescue!</h1>

                        <p>Please sign in to see how you can help or need to request help!</p>
                    <ul>
                        <li>Looking for a pet?</li>
                        <li>Need transport help?</li>
                        <li>Need a rescue to help?</li>
                    </ul>
                    </div>
                    <div className="container">
                    <div className="auth"></div>
                    </div>
                </div>
            </div>

            
        </div> 
    )
}

export default Home;