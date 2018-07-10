import React { Component} from 'react';

class Content extends Component {
    render () {
    
        const data = this.props.data
        return (
            <p>
            Ladies and Gentelmen, this is <b>{data.color}</b> Barber,
            </p>
        )
    }
}

export default Content;