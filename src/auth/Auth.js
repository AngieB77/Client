import React, { useState } from "react";
import "./Auth.css";
import APIURL from "../helpers/environment";

const Auth = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const data2 = {
    email: email,
    password: password
  };

  const title = () => {
    return login ? "Login" : "Signup";
  };
  const loginToggle = event => {
    event.preventDefault();
    setLogin(!login);
    setEmail("");
    setPassword("");
    //setFirstName('');
    setName("");
  };

  const displaySignupFields = () => {
    return !login ? (
      <div>
        <label htmlFor="name">Name</label>
        <br />

        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
    ) : null;
  };
  const handleSignup = e => {
    e.preventDefault();
    console.log("Signup");
    fetch(`${APIURL}/signin/signup`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(json => props.updateToken(json.sessionToken))
      .catch(err => console.log(err));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Signin");
    fetch(`${APIURL}/signin/login`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(data2)
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(json => props.updateToken(json.sessionToken))
      .catch(err => console.log(err));
  };

  const whichSubmit = e => {
    e.preventDefault();
    return;
  };

  return (
    <div>
      <div className="Form">
        <div className="Container">
          <div className="Col">
            <div className="Row">
              <form
                onSubmit={e => {
                  login ? handleSubmit(e) : handleSignup(e);
                }}
              >
                {/* ToDo: change the title based on what form it is Login/Signup*/}
                <h1>{title()}</h1>
                {displaySignupFields()}
                <label htmlFor="email">Email</label>

                <br />

                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                <br />

                <label htmlFor="password">Password:</label>
                <br />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
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
  );
};

export default Auth;
