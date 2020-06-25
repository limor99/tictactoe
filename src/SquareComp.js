import React, { Component } from 'react'

import GameConsumer, { GameProvider } from './GameContext';

import './SquareComp.css';

/*
import whiteLogo from './pics/white.png';
import logo1 from './pics/barcelona.png';
import logo2 from './pics/rialMadrid.png';
*/

class SquareComp extends Component {
    constructor(props){
        super(props);
        this.state = {isClicked : false, logo: 'squareWhiteLogo'};
    }

    getStep = async () =>{
        if(!this.state.isClicked)
        {
          //  console.log("aaaaaa")
            let logo;
            if(this.props.player1Turn){
                logo = "squareLogo1";
            }
            else{
                logo = "squareLogo2";
            } 
            await this.setState({isClicked : true, logo : logo});
          //  console.log("bbbbb")
            this.props.callback({"colIndex" : this.props.colIndex});
           // console.log("ccccccccc")
        }

        
            
    }
    render() {
      //  console.log("GRAND CHILD")
       
                        
                        
                        return(
                        <div className={this.state.logo} onClick={this.getStep}>
                            
  
                        </div>
                        )
                    
                
           
        
    }
}
export default SquareComp