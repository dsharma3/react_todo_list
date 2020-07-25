import React, {Component} from 'react';

class Game extends React.Component{

    constructor(props){
        super(props);
        this.nodesData = [];
        this.nextStep = "0";
    }
    calculateNextStep(instance){
        this.nextStep = this.nextStep === "X" ? "0" : "X";
        if(!this.nodesData.some(node => node.instance === instance))
            this.nodesData.push({instance:instance, step:this.nextStep});
        return this.nextStep;        
    }

    calculateWinner(){
        var xSteps = this.nodesData.filter(node => node.step === "X");
        var zeroSteps = this.nodesData.filter(node => node.step === "0");
        var xIterations = this.getWinner(xSteps);
        var zeroIterations = this.getWinner(zeroSteps);

        if(xIterations)
            return "X";
        else if(zeroIterations)
            return "0";
    }
    getWinner(steps){ 
      return  this.getDiagonallyCrossedPlayer(steps)
            || this.getHorizontallyCrossedPlayer(steps)
            || this.getVerticallyCrossedPlayer(steps);

    }

    getDiagonallyCrossedPlayer(steps){
        var leftDiagonal = steps.filter(step => step.instance === 0 || step.instance === 4 || step.instance === 8);
        var rightDiagonal = steps.filter(step => step.instance === 2 || step.instance === 4 || step.instance === 6);

        return this.checkWinningStep(leftDiagonal)
                || this.checkWinningStep(rightDiagonal);
    }

    getHorizontallyCrossedPlayer(steps){
        var firstRow = steps.filter(step => step.instance === 0 || step.instance === 1 || step.instance === 2);
        var secondRow = steps.filter(step => step.instance === 3 || step.instance === 4 || step.instance === 5);
        var thirdRow = steps.filter(step => step.instance === 6 || step.instance === 7 || step.instance === 8);

        return this.checkWinningStep(firstRow)
                || this.checkWinningStep(secondRow)
                || this.checkWinningStep(thirdRow);
    }

    getVerticallyCrossedPlayer(steps){
        var firstColumn = steps.filter(step => step.instance === 0 || step.instance === 3 || step.instance === 6);
        var secondColumn = steps.filter(step => step.instance === 1 || step.instance === 4 || step.instance === 7);
        var thirdColumn = steps.filter(step => step.instance === 2 || step.instance === 5 || step.instance === 8);

        return this.checkWinningStep(firstColumn)
                || this.checkWinningStep(secondColumn)
                || this.checkWinningStep(thirdColumn);          
    }
    
    checkWinningStep(winningSteps){
        return winningSteps.length && winningSteps.length === 3
    }
}
export {Game}