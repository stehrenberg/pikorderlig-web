import React, {Component} from "react";

class ControlButton extends Component {

    constructor() {
        super();
        this.state = {
            disabled: false,
        };
    }

    disable() {
        this.setState({
            disabled: true,
        });
    }

    enable() {
        this.setState({
            disabled: false,
        });
    }

    render() {
        return (
            <button
                className="ctrl-button"
                disabled={ this.state.disabled ? 'disabled' : '' }
                onClick={ this.props.onClick }
            >
                <img src={ this.props.symbol } alt={ this.props.text }/>
                { this.props.text }
            </button>
        );
    }
}

export default ControlButton;