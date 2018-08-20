import React from 'react';
import NavItem from './NavItem';

export default class NavList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: ['home']
		}
	}

	componentDidMount() {
		
		fetch('./source/components/navigation/items.json')
		.then(
			(response) => {
				if (response.status >= 200 && response.status < 300) {
					return response;
				} else {
					const error = new Error(`HTTP Error ${response.statusText}`);
					error.status = response.statusText;
					error.response = response;
					console.log(error);
					throw error;
				}
				
			}
		)
		.then((response) => response.json())
		.then((response) => {
			this.setState(Object.assign({}, response));
		});
	};

	render() {
		const NavItems = this.state.items.map((item, index) => (
			<NavItem text={item} key={index}/>
		));

		return (
			<ul className='nav__list'>
				{ NavItems }
			</ul>
		);
	}
}