import React, { Component } from 'react'

import SquareComp from './SquareComp';

class LineComp extends Component {
    constructor(){
        super();
        this.state={line : [ 0, 0, 0 ], linePlayer1 : [ 0, 0, 0 ], linePlayer2 : [ 0, 0, 0 ]};
    }

    getSquareData = async (colIndex) =>{
        let line = this.state.line;
        let linePlayer1 = this.state.linePlayer1;
        let linePlayer2 = this.state.linePlayer2;

        line[colIndex] = 1;
        if(this.props.player1Turn){
            linePlayer1[colIndex] = 1;
        }
        else{
            linePlayer2[colIndex] = 1;
        }
        await this.setState({line : line, linePlayer1 : linePlayer1, linePlayer2 : linePlayer2});

        this.props.callback({"line" : this.state.line,
                            "linePlayer1" : this.state.linePlayer1,
                            "linePlayer2" : this.state.linePlayer2 })
    }

    

    render() {
        let col = this.props.row.map((r, index) =>{
            return <SquareComp key={index} colIndex={index} player1Turn={this.props.player1Turn} callback={() => this.getSquareData(index)} />
        })
       
        return (
            <div>
            {col}
            </div>
        )
    }
}

export default LineComp
