import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
//import Header from './Header';
import APIURL from '../helpers/environment';
//import css from "./"

const PetCreate = (props) => {
    const[animal, setAnimal] = useState('');
    const[breed, setBreed] = useState('');
    const[size, setSize] = useState('');
    const[location, setLocation] = useState('');
    const[information, setInformation] = useState('');
    const[owner, setOwner] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        fetch(`${APIURL}/pets/`,{
            method: 'POST',
            body: JSON.stringify({log: {animal: animal, breed: breed, size: size, location: location, information: information, owner: owner}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData)=> {
            console.log(logData);
            setAnimal('');
            setBreed('');
            setSize('');
            setLocation('');
            setInformation('');
            setOwner('');
        })
    }

    return(
        <>
        <Form>
            <FormGroup>
                <Label htmlFor="animal">Animal(Bird, Cat, Dog, etc.)</Label>
                <Input name="animal" value={animal} onChange={(e)=> setAnimal(e.target.value)}/>

            </FormGroup>
            <FormGroup>
                <Label htmlFor="breed">Breed</Label>
                <Input name="breed" value={breed} onChange={(e)=> setBreed(e.target.value)}/>
                
            </FormGroup>
            <FormGroup>
                <Label htmlFor="size">Size(Height, Weight)</Label>
                <Input name="size" value={size} onChange={(e)=> setSize(e.target.value)}/>
                
            </FormGroup>
            <FormGroup>
                <Label htmlFor="location">Location(City, State)</Label>
                <Input name="location" value={location} onChange={(e)=> setLocation(e.target.value)}/>
                
            </FormGroup><FormGroup>
                <Label htmlFor="info">Information(Transport, Foster, etc.)</Label>
                <Input name="information" value={information} onChange={(e)=> setInformation(e.target.value)}/>
                
            </FormGroup>
            <FormGroup>
                <Label htmlFor="owner">Owner or Rescue name</Label>
                <Input name="owner" value={owner} onChange={(e)=> setOwner(e.target.value)}/>
                
            </FormGroup>
            <Button type="submit">Click to submit</Button>
        </Form>
</>
    )
}

export default PetCreate;
