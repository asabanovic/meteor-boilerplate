import React from 'react';
import PrivateHeader from './PrivateHeader';

export default () => {
	return (
		<div>
			<PrivateHeader title="Meteor Boilerplate" />
			<div className="container">
				Dashboard page content
			</div>
		</div>
	);
}