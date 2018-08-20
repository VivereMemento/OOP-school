import Student from "./members/Student";
import Admin from "./members/Admin";
import Teacher from "./members/Teacher";

export default class School {
	constructor(data) {
		this._data = data;
		this._number = this._data.number;
		this._groups = [];
		this._students = [];
		this._teachers = [];
		this._admin = new Admin(this._data.admin);
	};

	_createStudent() {
		this._data.students.forEach(student => this._students.push(new Student(student)));
	};

	_createTeacher() {
		this._data.teachers.forEach(teacher => this._teachers.push(new Teacher(teacher)));
	};

	_initGroups() {
		const students = this._students;
		const amount = this._data.groups;
		const limit = this._data.groupLimit;
		const groups = this._admin._createGroup(students, amount, limit);
		groups.forEach(group => group.students.length ? this._groups.push(group) : this._groups);
	};

	_studingProcess(teachers) {
		teachers.forEach((teacher, index) => {
			this._admin._setGroupForTeacher(this._groups[index], this._teachers[teacher]);
			this._teachers[teacher]._evaluate(this._teachers);
		});
	};

	_start(days) {
		let day = 1;
		const distribution = this._admin._distribution(this._teachers);
	
		const timer = setInterval(() => {
			if (days < day) {
				clearInterval(timer);
				this._admin._getAvgEvaluation(this._groups);
				return;
			};
			this._studingProcess(distribution());
			
			day += 1;
		}, 10);
	}

	_init() {
		this._createStudent();
		this._createTeacher();
		this._initGroups();
		this._start(this._data.period);
	};
}