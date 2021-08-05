import styled from "styled-components"
import MovieComponent from "./MovieComponent"
import Flippy, {FrontSide, BackSide} from "react-flippy";
import myMovies from "../movieList";

function MovieSuggestion(){

    return(
    <div>
        <SearchHead>
            <Header>MOVIE SUGGESTIONS FROM DEVELOPER</Header>
        </SearchHead>
        <Line></Line>
        <MovieContent>
        {myMovies.map( myMovie => (
            <MovieContainer>
            <Flippy className="flippy"
            flipOnHover={false} 
            flipOnClick={true} 
            flipDirection="horizontal"
            >
            <FrontSide>
                <CoverImage src={myMovie.Poster}/>
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#FFEEDB'}}>
              <MovieName>{myMovie.Title}</MovieName>
              <MovieInfo>
                  <ReleaseYear>Year: {myMovie.Year}</ReleaseYear>
                  <MovieType>Type: {myMovie.Type}</MovieType>
              </MovieInfo>
            </BackSide>
          </Flippy>
          </MovieContainer>
        )
        
        )}
        </MovieContent>
        
    </div>
    )
}

const SearchHead = styled.div`
display: felx;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 50px;
`

const Line = styled.hr`
    background-color: black;
    width: 80vw;
    margin-top: 30px;
`

const Header = styled.div`
    margin-top: 50px;
    font-size: 25px;
    font-family: 'Mate SC', serif;
`
const MovieContent = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    justify-content: space-evenly;
`

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

export default MovieSuggestion;
