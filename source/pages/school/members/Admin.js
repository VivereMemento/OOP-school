import Member from './Member';

export default class Admin extends Member {
	constructor({name, age, absent = 0}) {
		super(name, age, absent);
	};

	_createGroup(students, groups, groupLimit) {
		const nameOfGroup = groups;
		const limit = groupLimit;
		let from = 0;
		let to = limit;
		const group = {
			name: '',
			students: []
		};

		return nameOfGroup.map(name => {
			
			return students.slice(from, to).reduce((result, student) => {

				const completeGroup = {...result, name: name, students: [...result.students, student]};

				if (
					students.slice(from, to).length < limit &&
					students.slice(from, to).length >= students.slice(from, to).length / 2
				) return group;

				if (completeGroup.students.length === limit) {
					from = to;
					to = to + limit;
				}
				
				return completeGroup;
			},group)
		});
	};

	_setGroupForTeacher(group, teacher) {
		teacher.group = group;
	};

	_distribution(teachers) {
		const indexes = teachers.map(teacher => teachers.indexOf(teacher));
		const teachersIndex = [...indexes];

		return () => {
			teachersIndex.push(teachersIndex.shift());
			return teachersIndex;
		}
	};

	_getAvgEvaluation(groups) {
		groups.forEach(group => {
			console.log(`********* GROUP ${group.name}:`)
			group.students.forEach(student => {
				console.log(`
					${student.name} 
					average: ${Math.ceil(student._getAverageEvaluation())}, 
					isAbsent: ${student.absent}
				`);
			})
		});
	}
}