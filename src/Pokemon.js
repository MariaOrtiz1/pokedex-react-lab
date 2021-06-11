import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner';
import Sort from './Sort';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class Pokemon extends Component {

    state = {
        pokemonName: [],
        loading: false,
        query: '',
        sortOrder: '',
    }

    componentDidMount = async () => {
        await this.fetchData();
    }

    handleClick = async () => {
        await this.fetchData();
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value});
    }

    fetchData = async () => {
        this.setState({ loading: true });


        const URL = this.state.query
        ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}`
        : `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${this.state.sortOrder}`;

        const data = await request.get(URL)
        await sleep(1000)

        this.setState({ loading: false });
        this.setState({ pokemonName: data.body.results, sortOrder: data.body.sort });

    }

    handleSort = async (e) => {
        this.setState({sortOrder: e.target.value})
    }

    render() {
        return (
            <div className="center">
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}> Fetch! </button>
                <Sort event={this.handleSort}/>
                {this.state.loading
                ? <Spinner />
                : this.state.pokemonName.map(pokemon =>
                <p>
                    {pokemon.pokemon}
                    <br></br>
                    <img width="100px" height="100px" src={pokemon.url_image} alt={pokemon.pokemon} />
                    <br></br>
                    Type:
                    <br></br>
                    {pokemon.type_1}
                    <br></br>
                    {pokemon.type_2}
                </p>
                )}
            </div>
        )
    }
}
