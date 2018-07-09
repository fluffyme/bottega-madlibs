import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super ()

        this.state = {
            color:''
            pluralNoun:''
        }
    }

    handleInputChange () {
        this.setState( { color: 'red'})
    }

    render () {

        return (
            <div className="card">
            <h1>{this.state.color}</h1>
            <input />
            </div>
        )

        return (
            <div className="card">
            <h1>{this.state.color}</h1>
            { Input('color') }
            { Input('plural noun') }
            </div>
        )
    }
}

export default Card;