import styled from "styled-components"

function About() {
    return(
        <div>
            <Heading>ABOUT THE WEBSITE</Heading>
            <Line></Line>
            <Para>THIS WEBSITE ALLOWS YOU FIND INFORMATION ABOUT ALL YOUR FAVOURITE MOVIES FROM FLIM INDUSTRIES ACROSS THE WORLD. CLICK ON THE FLIM POSTER TO REVEAL INFO. BE SPECIFIC ABOUT THE MOVIE YOU ARE LOOKING FOR.</Para>
            <Heading>ABOUT ME</Heading>
            <Line></Line>
            <Para>I'AM A FULLSTACK DEVELOPER FROM INDIA CURRENTLY STUDYING IN MICHIGAN.</Para>
            <Copyright>Data is from OMBdb API © Praveen Kumar Devaraj</Copyright>
        </div>
        
    )
}

const Heading = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
font-family: 'Cutive Mono', monospace;
font-size: 25px;
font-weight: 900;
color: red; 
`

const Line = styled.hr`
height: 2px;
width: 91vw;
border: none;
background-color: black;

`
const Para = styled.div`
text-align:center;
font-size: 25px;
padding: 25px 100px;
`
const Copyright = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 90px auto;
opacity: .5;
`

export default About