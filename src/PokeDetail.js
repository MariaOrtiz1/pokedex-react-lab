import { Component } from 'react';
import request from 'superagent';

export default class PokeDetail extends Component {
    state = {
        pokeDetail: {},
        loading: false,
    };
    componentDidMount() {
        this.fetchDetail();
    }

    fetchDetail = async () => {
        this.setState({ loading: true });
        // https://pokedex-alchemy.herokuapp.com/api/pokedex/<pokeId>
        const apiId = this.props.match.params.id;
        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex/${apiId}`
        );
        this.setState({ pokeDetail: data.body });
        this.setState({ loading: false });
    };
    render() {
        console.log(this.props);
        return (
            <div>
                {this.state.loading && <h1>Loading!</h1>}
                {!this.state.loading && (
                    <>
                        <h2>Welcome to Poke Details Page</h2>
                        <h3>{this.props.match.params.pokeId}</h3>

                        <h3>{this.state.pokeDetail.pokemon}</h3>
                    </>
                )}
            </div>
        );
    }
}