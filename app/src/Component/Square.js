import React, {Component} from 'react';

class Square extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value : null
        };
    }
    render(){
        return(<button className="Butt" onClick= {() => this.game()}>
                {this.state.value}
             </button>);
    }

    game(){
      var displayValue =  this.props.game.calculateNextStep(this.props.value) ;
      this.setState({'value' : displayValue});
      var winner = this.props.game.calculateWinner();
      if(winner)
        alert("Winner is " + winner);
    }

}

export { Square };