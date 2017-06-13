import Component from "react";

class ControlButton extends Component {

    constructor(props) {
        this.state = {
            text: props.text,
            onClick: props.handleClick,
            symbol: props.symbol,
        }
    }

    render() {
        return (
            <button className="ctrl-button" onClick={ this.state.handleClick }>
                <img src={this.state.symbol} />
                { this.state.text }
            </button>
        );
    }
}

export default ControlButton;