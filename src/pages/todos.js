import React from "react";
import Sear from "../img/search.svg"

import styled from "styled-components"
    const Adic = styled.h3`
      color: white;
      font-size:2.5vw;
    `
    const Busc = styled.input`
    width:26%;
    padding:4% 0 4% 2.8% ;
    background-color:#262626;
    color:white;
    border:none;
    outline:0;`
    const BoxSear = styled.div`
        width:28.4%;
        display:flex;
        padding-left:1% ;
        margin: 0 2.5%;
        border-radius:5px;
        background-color:#262626;
        position:absolute;
        top:2.7%;
        left:58.5%;
        `
    const Filmes = styled.div`
    width:58%;
    background-color:red;
    position:relative;
   `
   const SearImg = styled.img`
   width:6%;`

    const CardTitle = styled.h3`
    color:white;
    font-size:1.5vw;
    padding:3%;
    `
    const CardOver = styled.p`
    color:white;
    `
    const CardImg = styled.img`
    width:100%;
    object-fit:100%;
    `
    const NukaBox = styled.div`
    width:25%;
    padding-left:2%;`

export default class Todos extends React.Component {
  state={
    filmBusc:[],
    filmes:[

      {
          title:"Monster Hunter",
          img: "https://www.hometheaterforum.com/community/media/2020-monster-hunter-poster-jpg.9157/full",
          overview:"A tenente Artemis e seus leais soldados são transportados para um novo mundo, dominado por monstros perigosos ...", 
      },{
          title:"Assassin's creed",
          img: "https://miro.medium.com/max/1400/1*DLgqkUV4NQ37pHLghGWZBQ.jpeg",
          overview:"Callum Lynch descobre que é descendente de um membro da Ordem dos Assassinos ...", 
      },{
          title:"Uncharted",
          img: "https://empireweekly.com/wp-content/uploads/2022/02/share.jpeg",
          overview:"Nathan Drake e seu parceiro canastrão Victor Sully Sullivan embarcam em uma perigosa busca para encontrar o maior tesouro jamais encontrado ..."
      },{
          title:"Tomb Raider",
          img: "https://www.10wallpaper.com/wallpaper/1366x768/1712/Tomb_Raider_2018_movies_4K_HD_Poster_1366x768.jpg",
          overview:"Lara Croft busca seu pai que desapareceu, com a esperança de resolver o mistério do desaparecimento de seu pai ... ", 
      },{
          title:"Mortal Kombat",
          img: "https://1.bp.blogspot.com/-3mosQj6Gmig/YHAqvasHCmI/AAAAAAAAIWY/t7TsO6w17mgtql7LNDoHbi86p47R9L2XgCLcBGAsYHQ/s1200/mk.jfif.jpg",
          overview:"O lutador de MMA Cole Young não conhece sua herança, nem sabe o motivo do Imperador da Exoterra ter enviado seu melhor guerreiro, Sub-Zero, para ir atrás dele ...", 
      },{
          title:"Spider-Man: Miles Morales",
          img: "https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/8/a/1/2/8a127f024f0a43f5b1268a2c4576a69d.jpg",
          overview:"Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o Homem-Aranha, inspirado no legado do já falecido Peter Parker ...", 
      }

  ]
  }
    filter = (event) => {
      const {filmes} = this.state
      
      const  filmfilter = filmes.
      filter((item) =>{
              
        if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
            return true;
            
        }
    })
    this.setState({
        filmBusc:filmfilter,
        filmBusc: filmes
    })
    
  }
  
  render() {
    return (
      <main>
        <Adic>Todos</Adic>

        <BoxSear>
          <SearImg src={Sear} alt="Users"/>
          <Busc onChange={this.filter}type="text" placeholder="Pesquisar"/>
        </BoxSear>

        <div>
          {this.state.filmBusc.map((item) => (
            <NukaBox>
              <CardTitle>{item.title}</CardTitle>
              <CardImg src={item.img} alt={item.title} title={item.title}/>
          
                <CardOver>{item.overview}</CardOver>
            </NukaBox>
          ))}
        </div>
      </main>
    );
  }
}
