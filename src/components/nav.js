import React from "react";
import styled, { withTheme } from "styled-components";
import {Link} from "react-router-dom";

function Nav() {

    const customStyle = {
        textDecoration: "none",
        color: "white"
    }

    return(
        <Container>
            <Header>
                <Name className="Name">MovieFinder</Name>
                <Content className="navcontent">
                    <Link style= {customStyle} to="/"><Home>Home</Home></Link>
                    <Link style= {customStyle} to="/About"><About>About</About></Link>
                    <Link style= {customStyle} to="/Search"><Search>Search</Search></Link>
                </Content>
            </Header>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    color: white;
    padding: 15px 25px;
    font-size: 30px;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 #555;
`
const Name = styled.div`
display: flex;
flex-directions: row;
align-items: center;
`
const Content= styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-right: 100px;
`

const Home = styled.a`
display: flex;
flex-direction: row;
cursor: pointer;
margin-right: 50px;
transition: all .1s ease-in-out;

&:hover{
    transform: scale(1.1);
    color: #035397
}
`
const About = styled.a`
display: flex;
flex-direction: row;
margin-right: 50px;
cursor: pointer;
transition: all .1s ease-in-out;

&:hover{
    transform: scale(1.1);
    color: #035397
}
`
const Search = styled.a`
display: flex;
flex-direction: row;
cursor: pointer;
transition: all .1s ease-in-out;

&:hover{
    transform: scale(1.1);
    color: #035397
}
`;

export default Nav;