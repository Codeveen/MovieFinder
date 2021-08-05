import Flippy, {FrontSide, BackSide} from "react-flippy";
import styled from "styled-components";

const MovieComponent = (props) => {
    const { Title, Year,imbdID , Type, Poster,} = props.movie;
    return (
        <MovieContainer>
        <Flippy className="flippy"
        flipOnHover={false} 
        flipOnClick={true} 
        flipDirection="horizontal"
        >
        <FrontSide>
            <CoverImage src={Poster}/>
        </FrontSide>
        <BackSide
          style={{ backgroundColor: '#FFEEDB'}}>
          <MovieName>{Title}</MovieName>
          <MovieInfo>
              <ReleaseYear>Year: {Year}</ReleaseYear>
              <MovieType>Type: {Type}</MovieType>
          </MovieInfo>
        </BackSide>
      </Flippy>
      </MovieContainer>
    )
}

const MovieContainer = styled.div`
display:flex;
flex-direction: column;
width: 350px;
cursor: pointer;
transition: transform .2s; 
margin: 7px;

&:hover{
    transform: scale(1.1);
}
`

const CoverImage = styled.img`
    display: flex;
    width: 300px;
    height: 460px;
    position: relative;
`
const MovieName = styled.div`
font-family: 'Mate SC', serif;
text-align: center;
font-size: 25px;
text-decoration: underline;
`

const MovieInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-family: 'Mate SC', serif;
font-size: 30px;
margin: 120px 5px;
line-height: 65px;

`
const ReleaseYear = styled.div``

const MovieType = styled.div``


export default MovieComponent