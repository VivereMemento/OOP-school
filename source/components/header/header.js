import React from 'react';
import NavList from '../navigation/NavList';

export default class Header extends React.Component {

	render() {
		return (
			<header>
				<nav className='nav'>
					<NavList />
				</nav>
			</header>
		);
	}
}