import React, { Component } from 'react'
import PokeItem from './PokeItem'
import './PokeList.css'
import { Link } from 'react-router-dom'

export default class PokeList extends Component {
    render() {
        return (
            <div className="list">
                {this.props.pokemonData.map((pokemon) => 
                <Link key={pokemon.id} to={`pokemon/${pokemon._id}`}>
                    <PokeItem data={pokemon}/>
                </Link>
                )}
            </div>
        )
    }
}

