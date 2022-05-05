import React from "react"
import "./App.css"
import Main from "./Component/main/header"
import Mod from "./Modais/header/modadd.js"
import Perf from "./Modais/header/modperf.js"
import GlobStyle from "./styled"

import User from "./img/user.svg"
import Ico from "./img/ico.svg"
import Sear from "./img/search.svg"


import {BrowserRouter as Router, Routes, Route, Link }from 'react-router-dom'
import Todos from "./pages/todos"
import Favoritos from "./pages/favoritos"
import Vistos from "./pages/vistos"
import Add from "./pages/adicionados"



import styled from "styled-components"
    const Header = styled.div`
        width: 100%;
        padding:1%;
        display: flex;
        justify-content: space-between;`

    const TitleFilmes = styled.section`
        width: 50%;
        display:flex;`

    const H1 = styled.h1`
        font-size:2.5vw;
        font-weight:normal;
        color:red;
        padding:0% 2.5% 1% 9.3%;
        font-family: 'Oswald', sans-serif;`

    const Home = styled(Link)`
        width: 100%;
        position:relative;
        top:2vh;
        left:18%;
        font-size:1.5vw;
        color:white;
        text-decoration:none;
        display: flex;
        align-items:center;
        justify-content: space-around;`

    const Search = styled.section`
        width: 50%;
        display:flex ;
        justify-content:right;
        align-items:center;`

    const SearImg = styled.img`
        width:6%;`

    const DownBtn = styled.div`
        color: white;` 

    const Setimg =styled.img`
        width: 40%;
       `
    
    const Addic = styled.button`
        width:18%;
        padding: 2% 1.5%;
        font-size:1vw;
        background-color:red;
        border:none;
        border-radius:0.4vw;
        color:white;`

    const Box = styled.details`
        width: 10%;
        font-size:1.3vw;
        color:white;
        position: absolute;        
        left:22%;
        z-index:0;`
    const DetSum = styled.summary`
        /* deixa o title alinhado */ 
        width: 60%;
        position:relative;
        top:2vh;
        font-size:1.4vw;
        display: flex;
        align-items:center;

        &&::marker{
            color:transparent;
        }`

    const RoutStyle = styled.ul`
        width:100% ;
        background-color:black;
        position: relative;
        top:2vh;
        display: flex;
        flex-direction:column ;
        justify-content:space-between;`
            
    const List = styled.li`
        width:100%;
        list-style:none;
        padding:5% 0 2% 0 ;`

    const HomeLink = styled(Link)`
        width:100% ;
        padding: 10% 5%;
        font-size:1.3vw;
        color:white;
        text-decoration:none;` 

    const Busc = styled.input`
        width:100%;
        height:100%;
        padding:4% 0 4% 2.8% ;
        background-color:#262626;
        color:white;
        border:none;
        outline:0;`

    const BoxSear = styled.div`
        width:58%;
        display:flex;
        padding-left:1.5% ;
        margin: 0 2.5%;
        border-radius:5px;
        background-color:#262626;`

    const Prof = styled.div`
        width: 10%;
        height:100%;
        display: flex;
        align-items:center;
        margin: 0 5% 0 2%;` 

    const PerfImg = styled.img`
        width:50%;`
 
export default class App extends React.Component{
    state = {
        addMod: false,
        perfMod: false,
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
    handleMod = () => {
        this.setState({ addMod: !this.state.addMod });
    }
    handleperfMod  = () => {
        this.setState({ perfMod: !this.state.perfMod });
    }
    
    render(){
        return(
                <Router>
                    {/* https://xd.adobe.com/view/1b455c60-d418-4576-8729-939693d0f5e2-4e16/specs/ */}
                    <GlobStyle/>
                    <Header>
                        <TitleFilmes>
                            <H1>TODOFLIX</H1>
                            <DownBtn>
                                
                                <Home to="./">Inicio</Home>
                            </DownBtn>
                            <Box>

                                <DetSum>
                                    Categoria <PerfImg src={Ico} alt="icone"/>
                                </DetSum>
            
                                <RoutStyle>
                                    <List>
                                        <HomeLink to="/todos">Todos</HomeLink>
                                    </List>
                                    <List>
                                        <HomeLink to="/favoritos">Favoritos</HomeLink>
                                    </List>
                                    <List>
                                        <HomeLink to="/vistos">Já vistos</HomeLink>
                                    </List>
                                    <List>
                                        <HomeLink to="/adicionados">Adicionados</HomeLink>
                                    </List>
                                </RoutStyle>

                            </Box>
                        </TitleFilmes>
                        <Search>
                            <Addic onClick={this.handleMod}>Adicionar filme</Addic>
                            {this.state.addMod && <Mod/>}
                            <BoxSear>
                                <SearImg src={Sear} alt="Users"/>
                                <Busc type="text" placeholder="Pesquisar"/>
                            </BoxSear>
                            <Prof onClick={this.handleperfMod}>
                            {this.state.perfMod && <Perf/>}
                                    <PerfImg src={User} alt="Users"/>
                                    <Setimg src={Ico} alt="icone"/>
                            </Prof>
                            {/* blob:https://xd.adobe.com/e6c19918-fdf5-4c91-8de1-af4ccd0a4c04 */}
                        </Search>
                    </Header>

                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/todos" element={<Todos/>}/>
                        <Route path="/favoritos" element={<Favoritos/>}/>
                        <Route path="/vistos" element={<Vistos/>}/>
                        <Route path="/adicionados" element={<Add/>}/>
                    </Routes>

                </Router>

        )

    }

}