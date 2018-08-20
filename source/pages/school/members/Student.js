import Member from './Member';

export default class Student extends Member {
	constructor({name, age, absent = 0}) {
		super(name, age, absent);
		this._evaluation = {};
		this._specialEvaluation = {};
	};

	_getAverageEvaluation() {
		return Object.keys(this._evaluation).reduce((result, evaluation, index) => {
			return (result + this._evaluation[evaluation]) / (index + 1);
		}, 0);
	}
}