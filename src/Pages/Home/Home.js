import React, {useState} from "react";
import Typewriter from "typewriter-effect"
import styled from "styled-components";
import {Link} from "react-router-dom";
import "./home.css"


function Home(){

    const [state] = useState({
        title: "FIND INFO ABOUT",
        titletwo: "YOUR FAVOURITE",
        titlethree: "MOVIES.",
        titlefour: "FROM",
        image: "/images/avatar_PNG9.png"
    });

    return (
        <div>
        
        <Info className="info">

                <Heading2>
                    <div>{state.title}</div>
                    <div>{state.titletwo}</div>
                    <div>{state.titlethree}</div>
                    <div className="titlefour">{state.titlefour}</div>
                </Heading2>

                <Effect>
                <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings:[
                        "Hollywood.",
                        "Bollywood.",
                        "Kollywood.",
                        "And More."
                    ],
                }}
                />
                </Effect>
                <Link to="/search" style={{textDecoration:"none"}}><SearchButton>Search</SearchButton></Link>
                <Homeimg className="home-image"><img src={state.image}/></Homeimg>
        </Info>
        </div>
      );
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 50px;
    font-size: 40px;
`
const Heading2 = styled.div`
display: flex;
flex-direction: column;
text-align: left;
line-height: 1.3;
justify-content: center;
`
const Effect = styled.div`
color:red;
`

const SearchButton = styled.a`
display: flex;
flex-direction: column;
border: 3px solid black;
margin-top: 35px;
color: black;
align-items: center;
font-size: 20px;
width: 220px;
padding: 10px 15px;
border-radius: 30px;
cursor:pointer;
transition: all .4s ease-in-out;


&:hover{
    transform: scale(1.1);
    color: white;
    background-color:black;
}

`

const Homeimg = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    height: 70%;
    top: auto;
    bottom: 90px;
    right: 150px;
`

export default Home