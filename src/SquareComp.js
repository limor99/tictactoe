import React, { Component } from 'react'
import './SquareComp.css';

class SquareComp extends Component {
    constructor(){
        super();
        this.state = {isClicked : false, logo: 'squareWhiteLogo'};
    }

    getStep = () =>{
        if(!this.state.isClicked)
        {
          let logo;
          if(this.props.player1Turn){
              logo = "squareLogo1";
          }
          else{
              logo = "squareLogo2";
          } 
          this.setState({isClicked : true, logo : logo});
          this.props.callback();
          
        }
    }
    render() {
      return(
        <div className={this.state.logo} onClick={this.getStep}>
        </div>
      )
    }
}
export default SquareComp