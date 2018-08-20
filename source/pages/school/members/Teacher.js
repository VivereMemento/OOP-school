import Member from './Member';

export default class Teacher extends Member {
	constructor({name, age, absent = 0, specialization, researches}) {
		super(name, age, absent);
		this._researches = researches;
		this._specialization = specialization;
		this._group = null;
	};

	set group(group) {
		this._group = group;
	}

	get specialization() {
		return this._researches;
	};

	get researches() {
		return this._specialization;
	};

	_generateRandom(maximum, numberRandoms) {
		
		let result = 0;
		for (let i = 0; i < numberRandoms; ++i) {
			result += Math.random() * (maximum - numberRandoms);
			if (result > maximum) return maximum;
		}

		return Math.floor(result);
	}

	_evaluate(data) {

		const sortedByExperience = data.sort((a,b) => a.researches > b.researches ? 1 : -1);
		const experience = sortedByExperience.indexOf(this) + 1;

		this._group.students.forEach(student => {
			const specialization = this._specialization;
			const isAbsent = student._isAbsent();
			
			if (!isAbsent) {
				if (student._evaluation.hasOwnProperty(specialization)) {
					student._evaluation[specialization] = student._evaluation[specialization] + this._generateRandom(10, experience);
				} else {
					student._evaluation[specialization] = this._generateRandom(10, experience);
				}
			} else {
				student.absent = student.absent + 1;
			}
			
		});
	}
}