import React, {Component } from 'react';

export default class Comments extends Component {
	constructor(props){
		super(props);
		this.state={};
	}

	componentWillMount() {
		//this.props.dispatch();
	}
	componentWillReceiveProps() {

	}
	render() {
		return (
			<div>
			Comments
			</div>
			);
	}
}