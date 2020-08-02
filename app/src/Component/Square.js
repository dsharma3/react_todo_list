import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
class Square extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value : null
        };
    }
    render(){
        return(<Button className="Butt" onClick= {() => this.game()}>
                {this.state.value}
             </Button>);
    }

    game(){
        if(!this.state.value){
            var displayValue =  this.props.game.calculateNextStep(this.props.value) ;
            this.setState({'value' : displayValue});
            var winner = this.props.game.calculateWinner(); 
            if(winner){
                var handler = this.props.handler;
                handler(winner);
            }
        }
    }
}

export { Square };