import React, { Component } from 'react';
import ControlButton from './components/ControlButton';
import './App.css';

class App extends Component {

    componentWillMount() {
        this.startButton = <ControlButton
            text="Aufnahme starten"
            symbol="/img/media-record.svg"
            onClick={ this.startRecording.bind(this) }
        />;
        this.stopButton = <ControlButton
            text="Aufnahme stoppen"
            symbol="/img/media-playback-stop.svg"
            onClick={ this.stopRecording.bind(this) }
        />;
    }

    startRecording() {
        console.log("Hey there again!");
        this.startButton.disable();
    }

    stopRecording() {
        console.log("Hey there again!");
        this.startButton.enable();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to &Pi;korderlig!</h2>
                </div>
                { this.startButton }
                { this.stopButton }
            </div>
        );
    }
}

export default App;
