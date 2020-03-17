/*import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <h1>Sign Up</h1>
            <Form>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input name="username" value={password}/>
                </FormGroup>
                <Button type="submit">Signup</Button>

            </Form>
        </div>
    )
}

export default Signup;

import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [modal, setModal] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({email: email, password: password, firstName: firstName, lastName: lastName}),
            
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
            props.updateUser(data.user.firstName);
        })
    }

    const toggle = () => setModal(!modal)

*/