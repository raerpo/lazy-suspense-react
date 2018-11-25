import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PokemonWrapper = styled.section`
    display: flex;
    & > div {
        width: 50%;
    }
`;

const PokemonImage = styled.div`
    text-align: center;
    & > img {
        border: 1px solid #CCCCCC;
        width: 40%;
    }
`;

const PokemonDescription = styled.div`
    color: #666;
    font-family: 'sans-serif', arial;
    h4 {
        margin: 0 0 .7rem 0;
    }
    ul {
        list-style: none;
        margin: 0px;
        padding: 0px;
        li {
            margin: 0 0 .5rem ;
        }
    }
`;

class Pokemon extends React.Component {
    state = {
        pokemonData: null
    }
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/charmander/')
        .then(res => res.data)
        .then(pokemonData => this.setState({pokemonData}))
    }
    render() {
        const { pokemonData } = this.state;
        console.log(pokemonData);
        if (!pokemonData) return <p>Loading...</p>;
        return <PokemonWrapper>
            <PokemonImage>
                <img alt={pokemonData.name} src={pokemonData.sprites.front_default} />
            </PokemonImage>
            <PokemonDescription>
                <h2>{ pokemonData.name }</h2>
                <h4>Moves</h4>
                <ul>
                    {pokemonData.moves.map(move => <li key={move.move.name}>{move.move.name}</li>)}
                </ul>
            </PokemonDescription>
        </PokemonWrapper>
    }
}

export default Pokemon;