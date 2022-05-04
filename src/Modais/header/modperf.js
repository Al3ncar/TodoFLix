import React from "react";
import Perf from "../../img/user.svg";
import styled from "styled-components";

const Container = styled.div`
  padding:0.5% 1%;
  box-shadow:0px 0px 3px 2px #242424af;
  width: 9%;

  color: white;
  position: absolute;
  top: 10%;
  right: 2%;
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
