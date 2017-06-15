import React, { Component } from 'react';
import ControlButton from './components/ControlButton';
import './App.css';
import $ from 'jquery';

const REST_PORT = '8080';

class App extends Component {

	constructor(props) {
		super(props);
		this.baseUrl = `${document.location.protocol}//${document.location.hostname}:${REST_PORT}`;
		this.state = {
			isRecording: false,
		};
	}

    startRecording() {
		const url = this.baseUrl + '/recording/start';
		$.ajax(url, {
			method: 'GET',
			success: () => {
				this.setState({isRecording: true});
			}
		});
    }

    stopRecording() {
		const url = this.baseUrl + '/recording/stop';
		$.ajax(url, {
			method: 'GET',
			success: () => {
				this.setState({isRecording: false});
			}
		});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to &Pi;korderlig!</h2>
                </div>
				<ControlButton
					disabled={this.state.isRecording}
					text="Aufnahme starten"
					symbol="/img/media-record.svg"
					onClick={ this.startRecording.bind(this) }
				/>
				<ControlButton
					disabled={!this.state.isRecording}
					text="Aufnahme stoppen"
					symbol="/img/media-playback-stop.svg"
					onClick={ this.stopRecording.bind(this) }
				/>
            </div>
        );
    }
}

export default App;
