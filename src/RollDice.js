import React, {Component} from "react";
import Die from "./die";
import "./RollDice.css"

class RollDice extends Component{
    static defaultProps={
        sides:["one","two","three","four","five","six"]
    };
    constructor(props){
        super(props);
        this.state={
            die1:"one",
            die2:"two",
            rolling:false
        };
        this.roll=this.roll.bind(this)
    }
    roll(){
        //pick2 new rolls
        const newdie1=this.props.sides[Math.floor(Math.random()*this.props.sides.length)]
        const newdie2=this.props.sides[Math.floor(Math.random()*this.props.sides.length)]
        //side state with new roll
        this.setState({die1:newdie1,die2:newdie2,rolling:true})
        //wait 1 second then set rolling to fales
        setTimeout(() => {
            this.setState({rolling:false});
        }, 1000);
    }
    render(){
        return(
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling?"Rolling":"Roll Dice"}
                </button>
            </div>
        )
    }
}
export default RollDice