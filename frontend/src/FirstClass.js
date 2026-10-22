import { Component } from "react";

class FirstClass extends Component {
    constructor() {
        super();
        this.state= {
            stno:1,
            stname:'abhishek',
            count:0

        };

    }
     handleClickInc = () => {
        this.setState({count:this.state.count+1});

    };
     handleClickDec = () => {
        this.setState({count:this.state.count-1});

    };
    render() {
        return(
            <div>
                <h1> This is the First class function</h1>
                {this.state.stno} - {this.state.stname}
                <label>pbm: </label> {this.state.count}
                <button type="button" onClick={this.handleClickInc}>+</button>

                <button type="button" onClick={this.handleClickDec}>-</button>
            </div>
        );
    }

}
export default FirstClass

