import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Header from "./Header";
import APIURL from "../helpers/environment";
//import css from "./"

const PetCreate = props => {
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState("");
  const [owner, setOwner] = useState("");
  const [userId, setUserId] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${APIURL}/pet/create`, {
      method: "POST",
      body: JSON.stringify({
        animal: animal,
        breed: breed,
        size: size,
        location: location,
        info: info,
        owner: owner,
        userId: userId
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        console.log(logData);
        setAnimal("");
        setBreed("");
        setSize("");
        setLocation("");
        setInfo("");
        setOwner("");
        setUserId(0);
      });
  };

  return (
    <>
      <Header setSession={props.setSession} />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="animal">Animal(Bird, Cat, Dog, etc.)</Label>
          <Input
            name="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="breed">Breed</Label>
          <Input
            name="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="size">Size(Height, Weight)</Label>
          <Input
            name="size"
            value={size}
            onChange={e => setSize(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location">Location(City, State)</Label>
          <Input
            name="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="info">Information(Transport, Foster, etc.)</Label>
          <Input
            name="information"
            value={info}
            onChange={e => setInfo(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="owner">Owner or Rescue name</Label>
          <Input
            name="owner"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Click to submit</Button>
      </Form>
    </>
  );
};

export default PetCreate;
