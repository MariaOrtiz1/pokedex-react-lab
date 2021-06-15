import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>Pokedex</div>
                <div className="links">
                    <NavLink className="nav-link" exact to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/pokemon">
                        Pokemon
                    </NavLink>
                </div>
            </div>
        );
    }
}