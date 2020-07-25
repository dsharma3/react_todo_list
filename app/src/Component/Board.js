import React, { Component } from 'react';
import { Square } from "./Square";
import { Game } from "./Game";
import '../App.css'
class Board extends React.Component {
    
    constructor(props){
        super(props);
        this.game = new Game(props);
    }
    renderSquare(i){
        return <Square value={i} game = {this.game}/>; 
    }
    render(){
        var board = (
                    <div>
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
                    </div>);
        return (board);
    }
}
export default Board;