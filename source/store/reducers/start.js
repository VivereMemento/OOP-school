import { START } from '../constants';

export default (state = false, action) => {
	const { type, payload } = action;
	console.log('THIS IS REDUCER INITIAL START');

	switch(type) {
		case START: {
			return payload;
		}
		default: {
			return state;
		}
	}
}