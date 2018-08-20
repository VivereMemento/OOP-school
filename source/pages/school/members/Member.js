export default class Member {
	constructor(name, age, absent) {
		this._name = name;
		this._age = age;
		this._absent = absent;
	};

	get name() {
		return this._name;
	};

	get age() {
		return this._age;
	}

	get absent() {
		return this._absent;
	}

	set absent(value) {
		this._absent = value;
	}

	_isAbsent() {
		return Math.floor(Math.random() * 15) ? false : true;
	}
}