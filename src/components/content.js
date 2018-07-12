import React, {Component} from 'react';

class Content extends Component {

    cunstructor() {
        super()
        this.count = 1;
    }

    ComponentWillReceiveProps() {
        this.count = 1;
    }

    renderLabel(data) {
        return [
            <div className="card__contnent__label">{this.count++}</div>,
            <b>{data}</b>
        ]
    }


    render() {
    
        const data = this.props.data
        return(
            <div className="card__content">
                <p>
                    Ladies and Gentelmen, this is {this.renderLabel(data.color)} Barber,your sportscaster, bringing of the game between the Cleveland {this.renderLabel(data.pluralNoun)} and the {this.renderLabel(data.adjectiveOne)} Yankees. {this.renderLabel(data.celebOne)} is pitching for the Yankees. Here's the pitch! it is a low {this.renderLabel(data.adjectiveTwo)} ball that just cuts the inside of the {this.renderLabel(data.nounOne)} for a strike. That makes the count {this.renderLabel(data.numberOne)} strikes and {this.renderLabel(data.numberTwo)} balls. Now here this is the next pitch. The batter swings and connects. it's a long, hight {this.renderLabel(data.nounTwo)} out to {this.renderLabel(data.adjectiveThree)} field. But {this.renderLabel(data.celebTwo)} is comming up fast and has it for the second outerHeight. The next battr up is {this.renderLabel(data.celebThree)} the Cleveland {this.renderLabel(data.adjectiveFour)} stop. Here's the pitch....a short grond ball to third {this.renderLabel(data.nounThree)}. {this.renderLabel(data.celebFour)} scoops it up throws it to first base for an out, and the game is over. And the Yankees move into the second place in the {this.renderLabel(data.adjectiveFive)} League!!!  
                </p>    
            </div>
        )
    }
}

export default Content;