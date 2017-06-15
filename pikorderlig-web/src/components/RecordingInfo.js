import React from 'react';

class RecordingInfo extends React.Component {
	render() {
		return (
			<div>{this.props.recordingTime.format('HH:mm:ss')}</div>
		)
	}
}

export default RecordingInfo;