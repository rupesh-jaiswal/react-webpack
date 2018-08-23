import React, {Component} from 'react';

export  default class Login extends Component {
	constructor() {
		super();
		this._onSubmit = this._onSubmit.bind(this);
		this.state={};
	}

	_onSubmit(event) {
		//this.props.dispatch()
	}
	render () {
		return (
			<div>
			<h2>For Existing Members </h2>
			<div className='loginContainer'>
			< form onSubmit={this._onSubmit} href='/userSuccessfulLogin'>
				
					<input placeholder='Username' />
				<br/><br/>
				
					<input placeholder= 'Password' type='password' />
				<br/><br/>
				
					<button type='submit'> Login </button>
				<br/><br/>
			</form>
			</div>
			</div>
			);
	}
}