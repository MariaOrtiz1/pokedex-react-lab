import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner';
import Sort from './Sort';
import PokeList from './PokeList';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class Pokemon extends Component {

    state = {
        pokemonData: [],
        loading: false,
        query: '',
        sortOrder: 'asc',
        page: 1,
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

    handleSort = async (e) => {
        this.setState({sortOrder: e.target.value})
    }

    setPage = async (e) => {
        const number = Number(this.state.page) + Number(e.target.value)
        await this.setState({page: number})
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true});
        const searchParams = new URLSearchParams({
            sort: 'pokemon',
            direction: this.state.sortOrder,
            page: this.state.page,
        });
        if (this.state.query) {
            searchParams.set('pokemon', this.state.query);
        }
        const {
            body: { results: data },
        } = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParams.toString()}`
        );
        await sleep(1000)
        this.setState({ loading: false });
        this.setState({ pokemonData: data });
    };

    render() {
        return (
            <div className="center">
                <div className="pokemon-input">
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}> Fetch! </button>
                </div>
                <Sort event={this.handleSort}/>
                {(this.state.page >= 2)
                    ? <button onClick={this.setPage} value="-1">Previous Page ({this.state.page - 1})</button>
                    : <div></div>                    
                    }
                    <button onClick={this.setPage} value="1">Next Page ({this.state.page + 1})</button>
                {this.state.loading
                ? <Spinner />
                : this.state.pokemonData.map(pokemon =>
                    <div>
                        <PokeList pokemonData={this.state.pokemonData} />
                    </div>
                )}
            </div>
        )
    }
}
