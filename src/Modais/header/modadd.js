import React from "react";
import Todos from "../../pages/todos" 
import Back from "../../img/back.png"
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const Container = styled.div`
  
  width: 100vw;
  height: 100%;
  padding-top:1%;
  background-color:#00000081;
  display:flex;
  justify-content:center;
  align-items:center;
  color: white;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index:2;
`
const Box = styled.div`
  
  width: 55%;
  height: 80%;
  padding:3.5%;
  box-shadow:0px 0px 3px 2px #242424af;
  border-radius: 0.5vw;
  background-color:black;
  color: white;
  z-index:10;
 `
const H2 = styled.h2`
  width:100%;
  padding-bottom:5%;
  font-weight: 100;
  font-size:2.3vw;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    `
const BoxAddic = styled.div`
display:flex;
justify-content:space-between;`
const Formu = styled.form`
  width:60%;
  `

const Dados =styled.div`
  width:80%;
  display:flex;
  flex-direction:column;`
  
const NamMark  = styled.label`
  width:100%;
  padding:4% 0 ;
  font-size:1.3vw;
  font-weight:bolder;
  `

const NameInp =  styled.input`
  background-color:#323232;
  color:white;
  outline:0;
  padding:2.5% 3%;
  border:none;
  border-radius:2px;
`
const NameAre =  styled.textarea`
  background-color:#323232;
  color:white;
  outline:0;
  padding:2% 3%;
  border:none;
  border-radius:2px;
`
const H3 = styled.h3`
  padding:5% 0 3% 0 ;
  font-size:1.3vw;
`
const StausView = styled.label`
  padding-right:3%;`
const FormFile = styled.form`
  width:40%;
  display:flex;
  flex-direction:column;`
  
  const FileImg = styled.img`
  width:100%;

  ;
`
const File = styled.input`
  width:100%;

  ;
`
export default class Modal extends React.Component {
  state ={
    cancel: false
  }
  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  handleCanc =() => {
    this.setState({cancel: !this.state.cancel})
  }
  render() {
    return (
      <Container>
        <Box>
          <H2>Adicionar filme</H2>
          <BoxAddic>
            
            <Formu>
            
              <Dados>
                <NamMark for="name">Nome</NamMark>
                <NameInp type="text" id="name" name="nome"/>
              </Dados>
              <Dados>
                <NamMark for="name">Descriçao</NamMark>
                <NameAre type="text" id="name" name="descriçao"/>
              </Dados>
              <H3>Status</H3>
              <StausView>
                <input type="radio" name="já assisti"/>
                Já Assisti
              </StausView>
              <StausView>
                <input type="radio" name="nunca assisti"/>
                Nunca Assisti
              </StausView>
              <H3>Nota</H3>
              <ReactStars
                count={5}
                onChange={this.ratingChanged}
                size={35}
                emptyIcon = ""
                activeColor="#ffd700"
                a11y= {true}
              />
            </Formu>
            <FormFile>
              <H3>Imagem</H3>
              <label for="addfile">
                <FileImg src={Back} alt=""/>
                <File type="file" id="addfile" name="Já asssisti" accept={Back} />
                
              </label>
              <button>Selecionar</button>
            </FormFile>
          </BoxAddic>
          <div>
            <button onCLick={this.handleCanc}>Cancel</button>
            {this.state.cancel && <Todos/>}
            <button>Confirmar</button>
          </div>
        </Box>
      </Container>
    );
  }
}
