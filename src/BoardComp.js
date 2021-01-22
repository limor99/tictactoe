import React, { Component } from 'react'

import LineComp from './LineComp';
import './BoardComp.css';

import gameLogo from './pics/gameLogo.png';

class BoardComp extends Component {
    constructor(){
        super();
        this.state = {player1Turn : true, player2Turn : false, board :  [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ], numSteps1 : 0, numSteps2 : 0, 
            player1Board :  [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ], player2Board :  [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ], isPlayer1Win : false, isPlayer2Win : false};
    }

    

    getData = async (rowIndex, data) =>{
        let board = this.state.board;
        board[rowIndex] = data.line;
        
        if(this.state.player1Turn){
            let numSteps1 = this.state.numSteps1 + 1;

            let player1Board = this.state.player1Board;
            player1Board[rowIndex] = data.linePlayer1;
            await this.setState({board :board, player1Board : player1Board, player1Turn : false, player2Turn : true, numSteps1: numSteps1});
            if(numSteps1 >=3){
                let isWinning = this.checkWining(this.state.player1Board);
                if(isWinning){
                    this.setState({isPlayer1Win : isWinning})
                }
            }
        }
        else{
            let numSteps2 = this.state.numSteps2 + 1;

            let player2Board = this.state.player2Board;
            player2Board[rowIndex] = data.linePlayer2;
            await this.setState({board :board, player2Board : player2Board, player1Turn : true, player2Turn : false, numSteps2: numSteps2});
            
            if(numSteps2 >=3){
                let isWinning = this.checkWining(this.state.player2Board);
                if(isWinning){
                    this.setState({isPlayer2Win : isWinning}) 
                }
            }
        }
    }

    checkWining = (playerBoard) =>{
        const winningOptions = [ [ [1, 1, 1], [0, 0, 0], [0, 0, 0] ], 
                         [ [0, 0, 0], [1, 1, 1], [0, 0, 0] ],
                         [ [0, 0, 0], [0, 0, 0], [1, 1, 1] ],
                         [ [1, 0, 0], [1, 0, 0], [1, 0, 0] ],
                         [ [0, 1, 0], [0, 1, 0], [0, 1, 0] ],
                         [ [0, 0, 1], [0, 0, 1], [0, 0, 1] ],
                         [ [1, 0, 0], [0, 1, 0], [0, 0, 1] ],
                         [ [0, 0, 1], [0, 1, 0], [1, 0, 0] ] ]
                         
        let isWinning = false;
        let playerBoardChecked = playerBoard.join();
        
        winningOptions.forEach(winningOption => {
            if(!isWinning){
                let winningOptionBoard = winningOption.join();

                if(playerBoardChecked === winningOptionBoard){
                    isWinning = true;
                }
            }
        })

        return isWinning;
    }

    

    render() {
        let msg, winMsg;
        if(!this.state.isPlayer1Win && !this.state.isPlayer2Win)
        {
            if(this.state.player1Turn){
                msg = <h6>Player No. 1 is playing now</h6>
            }
            else{
                msg = <h6>Player No. 2 is playing now</h6>
            }
        }
        else{
            if(this.state.isPlayer1Win){
                winMsg = <h1 class="winMsg">THE WINNER IS: Player No. 1 </h1>
            }
            else{
                winMsg = <h1 class="winMsg">THE WINNER IS: Player No. 2 </h1>
            }

        }
        

        let lines = this.state.board.map((b, index) =>{
            return <LineComp key={index} row={b} player1Turn={this.state.player1Turn} callback={data => this.getData(index, data)} />
        })
        
               
        return (
           
                <div>
                    <img src={gameLogo} alt="Logo" />
                    {lines}
                    {msg}
                    {winMsg}
                </div>
            
        )
    }
}

export default BoardComp;
