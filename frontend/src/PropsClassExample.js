
import { Component } from "react";

class PropsClassExample extends Component {
    render() {
        const { trainer1, trainer2 } = this.props;

        return (
            <div>
                <p>This is the PropsClassExample</p>
                <p>
                    {trainer1} and {trainer2} are the Vcube lecturers
                </p>
            </div>
        );
    }
}

export default PropsClassExample;