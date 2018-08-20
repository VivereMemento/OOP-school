import React from 'react';

export default class NavItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className='nav__item'>
				<a className='nav__link'>
					{this.props.text}
				</a>
			</li>
		);
	}
}