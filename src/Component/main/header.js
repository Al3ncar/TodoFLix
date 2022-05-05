import React from "react";
import NukaSlid from "nuka-carousel" 

import BackHeader from "../../img/background-header.png"

  import styled from "styled-components";
  const HeaderCont = styled.header`
  witdh:100%;
  height:50vh;
  `
  const Cartaz = styled.div`
  width:50%;
  padding-top:10%;
  color:white;`
  const Card = styled.section`
  width:100%;
  display:flex;
  `
  const CardTitle = styled.h3`
  color:white;
  font-size:1.3vw;
  padding:3% 0;
  `
  const CardOver = styled.p`
  color:white;
  `
  const CardImg = styled.img`
  width:100%;
  height:30vh;
  object-fit:100%;
  `

  const settings = {

  wrapAround: true,
  dragging: true,
  slidesToShow: 4,
  cellAlign: "center",
  adaptiveHeight: false,
  animation:"zoom",
  }
  const BackImg = styled.img`
  width:40vw;
  height:100%;
  padding:10%;`

  const NukaBox = styled.div`
  width:100%;
  margin:0 0 0 10%;`

export default class Main extends React.Component {
  state = {
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
  render() {
    return (
      <HeaderCont>
        <Card>
          <div>
              <BackImg src={BackHeader} alt=""/>
          </div>
          <div>
              <Cartaz>
                  <h2>Capitão Fantástico</h2>
                  <p> 
                      Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.
                  </p>
                  <p><span>4/5</span></p>
              </Cartaz>
          </div>
        </Card>
        <NukaSlid {...settings}>
          {this.state.filmes.map((item) => (
              <NukaBox>
                  <CardImg src={item.img} alt={item.title} title={item.title}/>
                  <CardTitle>{item.title}</CardTitle>
                  <CardOver>{item.overview}</CardOver>
              </NukaBox>
          ))}
        </NukaSlid>
      </HeaderCont>
    )
  }
}