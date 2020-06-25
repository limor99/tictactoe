import React, { Component } from 'react'

import SquareComp from './SquareComp';
const numSquareAndRows = 3;

class LineComp extends Component {
    constructor(){
        super();
      this.state={line : [ 0, 0, 0 ], linePlayer1 : [ 0, 0, 0 ], linePlayer2 : [ 0, 0, 0 ]};
    }

    getData = async (data) =>{
        let line = this.state.line;
        let linePlayer1 = this.state.linePlayer1;
        let linePlayer2 = this.state.linePlayer2;

        line[data.colIndex] = 1;
        if(this.props.player1Turn){
            linePlayer1[data.colIndex] = 1;
        }
        else{
            linePlayer2[data.colIndex] = 1;
        }
        await this.setState({line : line, linePlayer1 : linePlayer1, linePlayer2 : linePlayer2});

        this.props.callback({"rowIndex" : this.props.rowIndex,
                            "line" : this.state.line,
                            "linePlayer1" : this.state.linePlayer1,
                            "linePlayer2" : this.state.linePlayer2 })
    }

    

    render() {
      //  console.log("CHILD")
        let col = this.props.row.map((r, index) =>{
            return <SquareComp key={index} colIndex={index} player1Turn={this.props.player1Turn} callback={data => this.getData(data)} />
        })
       
        return (
            <div>
            {col}
            </div>
        )
    }
}

export default LineComp
