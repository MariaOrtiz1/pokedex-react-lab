import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.event}>
                    <option value=''>Any</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
            </div>
        )
    }
}
