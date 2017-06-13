import React, { Component } from 'react';
import ControlButton from './components/ControlButton';
import './App.css';

class App extends Component {

    handleClick() {
        console.log("Hey there!");
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to &Pi;korderlig!</h2>
                </div>
                <ControlButton
                    text="Aufnahme starten"
                    symbol="/img/media-record.svg"
                    onClick={ this.handleClick }
                />
                <ControlButton
                    text="Aufnahme stoppen"
                    symbol="/img/media-playback-stop.svg"
                    onClick={ this.handleClick}
                />
            </div>
        );
    }
}

export default App;
