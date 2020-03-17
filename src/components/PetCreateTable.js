import React, {useState} from "react";
import { Table, Button, Input } from "reactstrap";
import APIURL from "../helpers/environment";
import PetCreate from "./PetCreate";


const PetCreateTable = props => {
  const [updateActive, setUpdateActive] = useState(false);
  const [petUpdate, setPetToUpdate] = useState({});

  const deletePet = pet => {
    fetch(`${APIURL}/${pet.name}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "appplication/json",
        Authorization: props.token
      })
    }).then(() => props.fetchPet());
  };

  const PetMapper = () => {
    return props.pet.map((pet, index) => {
      return (
        <tr key={index}>
          <th scope="row">{pet.animal}</th>
          <td>{pet.breed}</td>
          <td>{pet.size}</td>
          <td>{pet.location}</td>
          <td>{pet.info}</td>
          <td>{pet.owner}</td>
          <td>{pet.userId}</td>
          <Button color="warning">Update</Button>
          <Button color="danger" onClick={() =>{deletePet(pet)}}>Delete</Button>
        </tr>
      )
    })
   //  <Button color="warning">Update</Button>
    //<Button color="danger" onClick={() =>{deletePet(Pet)}}>Delete</Button>
  
  }

  const PetCreate = (petUpdate) => {
    console.log(petUpdate);
    setPetToUpdate(petUpdate);
    setUpdateActive(true);
  }

  const updateOn = () => {
    setUpdateActive(true);
  }



  return (
    <>
      <h3>Animal Log</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Breed</th>
            <th>Size</th>
            <th>Location</th>
            <th>Information</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
};

export default PetCreateTable;

