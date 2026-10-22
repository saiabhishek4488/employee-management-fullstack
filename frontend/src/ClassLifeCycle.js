import { Component } from "react";

class ClassLifeCycle extends Component {

    constructor() {
        super();

        this.state = {
            count: 0
        };

        console.log("constructor is called");
    }

    static getDerivedStateFromProps() {
        console.log("I am getDerivedStateFromProps");
        return null;
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>

                <button
                    type="button"
                    onClick={() => {
                        this.setState((prevState) => ({
                            count: prevState.count + 1
                        }));
                    }}
                >
                    Click
                </button>
            </div>
        );
    }

    componentDidMount() {
        console.log("I am componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("I am shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("I am getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("I am componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("compnent will unamount");
    }
}

export default ClassLifeCycle;