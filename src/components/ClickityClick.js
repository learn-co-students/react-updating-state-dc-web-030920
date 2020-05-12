// Code ClickityClick Component Here
import React, {Component} from "react"

class ClickityClick extends Component {
    constructor(){
        super()
        //Defining intial state below
        this.state = {
            hasBeenClicked: false,
            currentTheme: "blue"
        }
        console.log(this.state.hasBeenClicked)
    }

    handleClick = (event) => {
        this.setState({
            hasBeenClicked: true
        })
    }

    render(){
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick