import React from "react";
import Perf from "../../img/user.svg";
import styled from "styled-components";

const Container = styled.div`
  border: solid white;
  width: 9%;

  color: white;
  position: absolute;
  top: 8%;
  right: 0%;
`;
const Names = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;
  cursor: pointer;
`;
export default class Modal extends React.Component {
  render() {
    return (
      <Container>
        <Names>
          <img src={Perf} alt="Dan" />
          <p>Dan</p>
        </Names>
        <Names>
          <img src={Perf} alt="Marlon" />
          <p>Marlon</p>
        </Names>
        <Names>
          <img src={Perf} alt="Fernando" />
          <p>Fernando</p>
        </Names>
      </Container>
    );
  }
}
