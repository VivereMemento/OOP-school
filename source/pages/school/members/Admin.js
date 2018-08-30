import Member from './Member';

export default class Admin extends Member {
	constructor({name, age, absent = 0}) {
		super(name, age, absent);
	};

	_createGroup(students, groups, groupLimit) {
		let from = 0;
		let to = groupLimit;
		const group = {
			name: '',
			students: []
		};

		return groups.map(name => {
			
			return students.slice(from, to).reduce((result, student) => {

				const completeGroup = {...result, name: name, students: [...result.students, student]};

				if (
					students.slice(from, to).length < groupLimit &&
					students.slice(from, to).length >= students.slice(from, to).length / 2
				) return group;

				if (completeGroup.students.length === groupLimit) {
					from = to;
					to = to + groupLimit;
				}
				
				return completeGroup;
			},group)
		});
	};

	_setGroupForTeacher(group, teacher) {
		teacher.group = group;
	};

	_distribution(teachers) {
		const teachersIndex = teachers.map(teacher => teachers.indexOf(teacher));

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
					average: ${Math.round(student._getAverageEvaluation())}, 
					isAbsent: ${student.absent}
				`);
			})
		});
	}
}