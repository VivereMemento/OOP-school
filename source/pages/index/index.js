import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './Root';
import { connect } from 'react-redux';
import { init } from '../../store/AC/init';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const root = document.querySelector('#root');

class App extends React.Component {

	render() {
		return (
			<div>
				<div className='wrapper'>
					<div className='maincontent'>
						<Header />
						<main className='home'>
							<h1>Hello, world!</h1>
							<ul className="list">
								{ this.getItems() }
							</ul>
						</main>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	componentDidMount() {
		console.log(this.props);
		this.props.init();
		setTimeout(() => {
			console.log(this.props);
		},10);
	}

	getItems = () => {
		return this.props.list.map((li, key) => (
			<li
				className="list__item"
				key={key}
			>
					{li.get('position')}
			</li>
		))
	}
}

export default connect(
    state => ({
        list: state.initialState
		}),
		{ init }
)(App);


ReactDOM.render(
	<Provider />,
	root
);