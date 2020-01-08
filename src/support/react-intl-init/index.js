import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Translation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Eric',
			unreadCount: 1,
		};
	}

	render() {
		const {name, unreadCount} = this.state;

		return (
			<p>
				<FormattedMessage
					id="welcome"
					defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
					values={{name: <b>{name}</b>, unreadCount}}
				/>
			</p>
		);
	}
}
export default Translation;