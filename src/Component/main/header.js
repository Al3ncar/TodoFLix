import React from "react"
import styled from "styled-components"
const HeaderCont = styled.header`
witdh:100%;
height:50vh;
color:white;
`
export default class Header extends React.Component{
    state={
        
            filmes:[
                {
                    title:"M8-Quando a morte socorre a vida",
                    img:"",
                    overview:"", 
                }
            ]
        
    }
    render(){
        const {title,img,overview} = this.state.filmes
        return(
            <HeaderCont>
                <div>

                </div>
                <div>
                    <div>
                        <h2>{title}</h2>
                        <img src={img} alt={title}/>
                        <p>{overview}</p>
                    </div>
                </div>
            </HeaderCont>
        )
    }
}