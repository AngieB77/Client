import React, { useState, useEffect } from "react";
import { Table, Button, Input } from "reactstrap";
import APIURL from "../helpers/environment";
import PetCreate from "./PetCreate";

const PetCreateTable = props => {
  const [updateActive, setUpdateActive] = useState(false);
  const [petUpdate, setPetToUpdate] = useState({});
  const [pets, setPets] = useState([]);

  const deletePet = pet => {
    fetch(`${APIURL}/pet/${pet.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "appplication/json",
        Authorization: props.token
      })
    }).then(() => findPets());
  };

  const findPets = pets => {
    fetch(`${APIURL}/pet/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(pets => {
        setPets(pets);
        console.log(pets);
        // PetMapper();
      })
      .catch(err => err.message);
  };

  const PetMapper = () => {
    return pets.map(pet => {
      return (
        <tr key={pet.id}>
          <td>{pet.animal}</td>
          <td>{pet.breed}</td>
          <td>{pet.size}</td>
          <td>{pet.location}</td>
          <td>{pet.info}</td>
          <td>{pet.owner}</td>
          <td>{pet.userId}</td>

          <td>
            <Button color="warning">Update</Button>
          </td>
          <td>
            <Button
              color="danger"
              onClick={() => {
                deletePet(pet);
                // findPets(pets);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
    //  <Button color="warning">Update</Button>
    //<Button color="danger" onClick={() =>{deletePet(Pet)}}>Delete</Button>
  };

  useEffect(() => {
    findPets();
  }, []);

  const PetCreate = petUpdate => {
    console.log(petUpdate);
    setPetToUpdate(petUpdate);
    setUpdateActive(true);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

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
            <th>User</th>
          </tr>
        </thead>
        <tbody>{PetMapper()}</tbody>
      </Table>
    </>
  );
};

export default PetCreateTable;
