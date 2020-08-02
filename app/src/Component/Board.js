import React, { Component } from 'react';
import { Square } from "./Square";
import { Game } from "./Game";
import '../App.css'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
class Board extends React.Component {
    
    constructor(props){
        super(props);
        this.game = new Game(props);
        this.handler = this.handler.bind(this);
    }
    handler(winner) {
        this.setState({
          winner: winner
        })
      }
    
    renderSquare(i){
        return <Square value={i} handler = {this.handler} game = {this.game}/>; 
    }
    handleFormReset(){
        window.location.reload();
    }
    render(){
        var board = (
                   <Form id ="form">
                    <FormGroup>
                            <div className ="Container">
                                <div className="First">
                                    <div className="Row">
                                        <div className="Column">{this.renderSquare(0)}</div>
                                        <div className="Column">{this.renderSquare(1)}</div>
                                        <div className="Column">{this.renderSquare(2)}</div>
                                    </div>
                                    <div className="Row">
                                        <div className="Column">{this.renderSquare(3)}</div>
                                        <div className="Column">{this.renderSquare(4)}</div>
                                        <div className="Column">{this.renderSquare(5)}</div>
                                    </div>
                                    <div className="Row">
                                        <div className="Column">{this.renderSquare(6)}</div>
                                        <div className="Column">{this.renderSquare(7)}</div>
                                        <div className="Column">{this.renderSquare(8)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className = "Second">
                               {this.state && this.state.winner ? "The winner is " + this.state.winner: ""} 
                            </div>

                         </FormGroup>
                         <Button onClick= {() => this.handleFormReset()}>Reset</Button>

                    </Form>);
        return (board);
    }
}
export default Board;