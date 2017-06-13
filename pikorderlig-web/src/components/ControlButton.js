import React, { Component } from "react";

class ControlButton extends Component {

    render() {
        return (
            <button className="ctrl-button" onClick={ this.props.onClick }>
                <img src={ this.props.symbol } alt={ this.props.text } />
                { this.props.text }
            </button>
        );
    }
}

export default ControlButton;