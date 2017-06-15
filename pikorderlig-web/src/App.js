import React, { Component } from 'react';
import ControlButton from './components/ControlButton';
import RecordingInfo from './components/RecordingInfo'
import './App.css';
import $ from 'jquery';
import moment from 'moment';

const REST_PORT = '8080';
const recordingTimeMock = {format: () => {}};

class App extends Component {

	constructor(props) {
		super(props);

		this.baseUrl = this._getBaseUrl();
		this.clockTickInterval = null;

		this.state = {
			isRecording: false,
			recordingTime: recordingTimeMock,
		};

		this._getRecordingStatusFromRemote()
	}

	_getBaseUrl() {
		let hostname = document.location.hostname;
		if (hostname.toLowerCase() === 'localhost') {
			hostname = 'pikorderlig'
		}
		return `${document.location.protocol}//${hostname}:${REST_PORT}`;
	}

	_getRecordingStatusFromRemote() {
		const url = this.baseUrl + '/recording/status';
		$.ajax(url, {
			method: 'GET',
			success: response => this._parseRecordingStatus(response)
		})
	}

	_parseRecordingStatus(recording_status) {
		let recordingTime;

		const hasRecordingStart = recording_status.recording_start !== null;

		if (!hasRecordingStart) {
			recordingTime = recordingTimeMock;
		} else {
			const recording_start = parseInt(recording_status.recording_start * 1000);
			recordingTime = moment().subtract(recording_start).subtract(1, 'h');
		}

		this.setState({
			isRecording: recording_status.recording,
			recordingTime: recordingTime,
		}, () => {
			if (hasRecordingStart) {
				this._startClockTick();
			}
		});

	}

	_startClockTick() {
		this.clockTickInterval = window.setInterval(() => {
			const currentRecordingTime = this.state.recordingTime;
			currentRecordingTime.add(1, 's');
			this.setState({
				recordingTime: currentRecordingTime
			})
		}, 1000);
	}

	_stopClockTick() {
		window.clearInterval(this.clockTickInterval);
	}

    startRecording() {
		const url = this.baseUrl + '/recording/start';
		$.ajax(url, {
			method: 'GET',
			success: response => {
				this.setState({isRecording: true});
				this._parseRecordingStatus(response)
			}
		});
    }

    stopRecording() {
		const url = this.baseUrl + '/recording/stop';
		$.ajax(url, {
			method: 'GET',
			success: () => {
				this.setState({
					isRecording: false,
					recordingTime: recordingTimeMock,
				});

				this._stopClockTick();
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
				<RecordingInfo recordingTime={this.state.recordingTime} />
            </div>
        );
    }
}

export default App;
