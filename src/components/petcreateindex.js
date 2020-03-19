import React from "react";
import { Container, Row, Col } from "reactstrap";
import PetCreate from "./PetCreate";
import PetCreateTable from "./PetCreateTable";

const PetIndex = props => {
  return (
    <Container>
      <Row>
        <Col md="3">
          {/* <PetCreate fetchPets = {fetchPets} token={props.token}/> */}
          <PetCreate
            updateToken={props.updateToken}
            token={props.token}
            setSession={props.setSession}
          />
        </Col>
        <Col md="9">
          {/* <PetCreateTable log={log} fetchPets={fetchPets} */}
          <PetCreateTable updateToken={props.updateToken} token={props.token} />
        </Col>
      </Row>
    </Container>
  );
};

export default PetIndex;
