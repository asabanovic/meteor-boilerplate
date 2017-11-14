import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
 

export default class Login extends React.Component {
	componentWillMount() {
		console.log('Login Component DID mount !!');
		console.log(Meteor.userId());
		if (Meteor.userId()) {
			this.props.history.replace('/dashboard');
		}  
	}

	constructor(props) { 
		super(props);
		console.log(props);
		this.state = {
			error: ''
		};
	}

	onSubmit(e){
		e.preventDefault();
		let email = this.refs.email.value;
		let password = this.refs.email.value;


		
		Meteor.loginWithPassword({email}, password, (err) => {
			console.log('Login callback', err);
			if (err) {
				this.setState({error: err.reason});
			} else {
				this.setState({error: ''});
			}
		});


	}

	render() {
		return (
			<div className="boxed-view">
				<div className="boxed-view__box">
					<h1>Login</h1>
					{this.state.error ? <p>{this.state.error}</p> : undefined}
					<form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
						<input type="text" ref="email" placeholder="Email" name="email" />
						<input type="password" ref="password" placeholder="Password" name="password" />
						<button type="submit" className="button">Login</button>
					</form>
					<Link to="/signup">Need an account ?</Link>
				</div>
 			</div>
		);
	};
};