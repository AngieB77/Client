import React from "react"; 
import { Container, Row, Col } from "reactstrap";
import PetCreate from "./PetCreate";
import PetCreateTable from "./PetCreateTable";

const PetIndex = () => {
  return (
    <Container>
      <Row>
        <Col md="3">
          {/* <PetCreate fetchPets = {fetchPets} token={props.token}/> */}
          <PetCreate />
        </Col>
        <Col md="9">
          {/* <PetCreateTable log={log} fetchPets={fetchPets} */}
          <PetCreateTable />
        </Col>
      </Row>
    </Container>
  );
};

export default PetIndex;
