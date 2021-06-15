import React, { Component } from 'react'
import './PokeItem.css';


export default class PokeItem extends Component {
    render() {
        return (
            <p className="render-pokemon" style={{'borderColor': `${this.props.data.color_1}`}}>
                    <div className="booger">
                    {this.props.data.pokemon}
                    </div>
                    <br></br>
                    <img width="100px" height="100px" src={this.props.data.url_image} alt={this.props.data.pokemon} />
                    <br></br>
                    <div className="type-section">
                    Type:
                    <br></br>
                    {this.props.data.type_1}
                    <br></br>
                    {this.props.data.type_2}
                    </div>
                </p>
        )
    }
}
