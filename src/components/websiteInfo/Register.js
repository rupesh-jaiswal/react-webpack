import React, {Component} from 'react';
import {addMember} from '../../actions/action';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
export class Register extends Component {
	constructor() {
		super();
		this._onSubmit = this._onSubmit.bind(this);
		this._onChange = this._onChange.bind(this);
		this.state={
			registerProfile:{}
		};
	}
	_onChange(event) {
		const registerProfile=this.state.registerProfile;
		registerProfile[event.currentTarget.name]=event.currentTarget.value;
		this.setState({registerProfile});
	}
	_onSubmit(event) {
		event.preventDefault();
		console.log(this.state.registerProfile);
		this.props.dispatch(addMember(this.state.registerProfile));
		browserHistory.push('/userSuccessfulLogin');

	}
	render () {
		return (
			<div>
				<h2>For New Members</h2>
				<div className='registerContainer'>
					<form onSubmit={this._onSubmit}>
						<br/>
							<input placeholder='Flat no' name='flatNo' onChange={this._onChange}/>
						<br/>
						<br/>
							<input placeholder='Blg no' name='blgNo' onChange={this._onChange}/>
						<br/>
						<br/>
							<input placeholder='Contact No' name='contactNo' onChange={this._onChange}/>
						<br/>
						<br/>
							<input placeholder='username' name='username' onChange={this._onChange}/>
						<br/>
						<br/>
							<input placeholder= 'password' name='password' type='password' onChange={this._onChange}/>
						<br/>
						<br/>
							<input placeholder= 'confirm password' name='confirmpassword' type='password' onChange={this._onChange}/>
						<br/>
						<br/>
							<button type='submit'> Register </button>
						<br/>
					</form>
				</div>
			</div>
			);
	}
}

//const select=(state,props)=>{};
export default Register;
//export default connect()(Register);