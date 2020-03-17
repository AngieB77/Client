/*import React, {useState} from 'react';
import { Form, FormGroup, Label } from 'reactstrap';

const Login = (props)=> {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    return(
        <div>
            <h1>Login</h1>
            <Form>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input name= "email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" value={"password"}></Input>
                </FormGroup>
            </Form>
        </div>
    )
}


export default Login;
/*
<div className="container">
<form action="/action_page.php">
  <div className="row">
    <h2 style="text-align:center">Login with Social Media or Manually</h2>
    <div className="vl">
      <span className="vl-innertext">or</span>
    </div>

    <div className="col">
      <a href="#" class="fb btn">
        <i class="fa fa-facebook fa-fw"></i> Login with Facebook
      </a>
      
      <a href="#" class="google btn">
        <i class="fa fa-google fa-fw"></i> Login with Google+
      </a>
    </div>

    <div className="col">
      <div className="hide-md-lg">
        <p>Or sign in manually:</p>
      </div>

      <input type="text" name="username" placeholder="Username" required></input>
      <input type="password" name="password" placeholder="Password" required></input>
      <input type="submit" value="Login"></input>
    </div>

  </div>
</form>
</div>

<div className="bottom-container">
<div className="row">
  <div className="col">
    <a href="#" style="color:white" class="btn">Sign up</a>
  </div>
  <div className="col">
    <a href="#" style="color:white" class="btn">Forgot password?</a>
  </div>
</div>
</div>  
  </Row>
        </Container>import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Alert} from 'reactstrap';
import APIURL from '../helpers/environment';

const Login = (props) => {
    console.log(APIURL)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(true);
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json(),
            
        ).then((data) => {
            props.updateToken(data.sessionToken);
            console.log(data.user.firstName);
            props.updateUser(data.user.firstName);      
        }) .catch((err ) =>{
            console.log('no such user');
            setVisible(true);
            
        })
    }

    const toggle = () => setModal(!modal);

return (
    <>
    <Modal isOpen={modal}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input name="username" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                
                <Button color="primary"  onClick={email.type==="email" ? toggle : email.type } type="submit">Submit</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </Form>

    <Alert color="info" isOpen={visible} toggle={onDismiss}>Username and/or password is incorrect.  Please try again, or register.</Alert>
    
        </ModalBody>
    </Modal>
    </>
   
)
}
export default Login;
        
        */
