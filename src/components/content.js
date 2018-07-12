import React, {Component} from 'react';

class Content extends Component {
    render() {
    
        const data = this.props.data
        return(
            <div className="card__content">
                <p>
                    Ladies and Gentelmen, this is <b>{data.color}</b> Barber,your sportscaster, 
                </p>    
            </div>
        )
    }
}

export default Content;