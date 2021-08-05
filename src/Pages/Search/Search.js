import axios from "axios";
import { useState } from "react"
import styled from "styled-components"
import MovieComponent from "../../components/MovieComponent"
import MovieSuggestion from "../../components/MovieSuggestions";

const API_KEY = "2a014e30";

function Search() {
    const [searchQuery, updateSearchQuery] = useState();
    const [timeoutId, updateTimeoutId] = useState();
    const [movieList, updateMovieList] = useState([]);

    const fetchData = async (searchString)=>{
        const response = await axios.get(
            'http://www.omdbapi.com/?S=' + searchString + '&apikey=' + API_KEY
        )
        updateMovieList(response.data.Search)
    }

    const onTextChange = (event) => {
        clearTimeout(timeoutId);
        updateSearchQuery(event.target.value);
        const timeout = setTimeout(() => fetchData(event.target.value), 500);
        updateTimeoutId(timeout)
    }
    return(
        <Container>
            <SearchBox>
                <SearchIcon src="/images/search-img.png"/>
                <Input placeholder="SEARCH" onChange={onTextChange} value={searchQuery}/>
            </SearchBox>
            <MovieContainer>
                {movieList?.length? movieList.map((movie, index) => <MovieComponent key={index} movie={movie}/>)
                : <MovieSuggestion/>}
                
            </MovieContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SearchBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px 12px;
    width: 70vw;
    border-radius: 30px;
    background-color: #E3E7F1;
    margin-top: 15vh;
    transition: box-shadow 0.3s ease-in-out;

    &:hover{
        box-shadow: 10px 10px 8px #888888;
    }
    
`
const SearchIcon = styled.img`
    width: 20px;
    heignt: 20px;
    margin-left: 5px;
`

const Input = styled.input`
    color: black;
    font-size: 16px;
    border: none;
    background-color: transparent;
    outline: none;
    margin-left: 15px;
    width: 100%;
    text-transform: uppercase;
`

const MovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    justify-content: space-evenly;
`
export default Search