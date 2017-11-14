import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {routes, onAuthChange } from './../imports/routes/routes.js';
import { Tracker } from 'meteor/tracker';
import './../imports/startup/simple-schema-configuration';
import { Session } from 'meteor/session'

Meteor.startup(() => {
	ReactDOM.render(routes, document.getElementById('app'));
});

Tracker.autorun(() => {
	const isAuthenticated = !!Meteor.userId();
	onAuthChange(isAuthenticated);
});