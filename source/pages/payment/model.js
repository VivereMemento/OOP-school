import readFile from './data';

const HEADINGS = readFile().match(/[A-Z]{3,}/g);
const MONTH = readFile().match(/[0-9]{4}-[0-9]{2}/g);
const DEPARTMENTS = readFile().match(/[A-Z]{0,1}[a-z]{3,}\s?&?\s?[A-Z]{0,1}[a-z]{3,}?,/g);
const EMPLOYEE = readFile().match(/[A-Z]{0,1}[a-z]{3,}\s[A-Z]\./g);
const AMOUNT = readFile().match(/[0-9]{1,}\.[0-9]{1,}/g);
const getData = readFile().match(/[0-9]{4}-[0-9]{2}.+[0-9]{1,}\.?[0-9]{1,}?/g);
const sortedData = getData.map(data => data.split(','));
const data = sortedData.map(arr => {
	return HEADINGS.reduce((nextObj, key, index) => {
		nextObj[key.toLowerCase()] = isNaN(+arr[index]) ? arr[index] : parseFloat(arr[index]);
		return nextObj;
	}, {})
});

export const getFrame = value => {
	return data.reduce((obj, key) => {
		if (obj.hasOwnProperty(key[value])) {
			obj[key[value]].quantity += 1;
			return obj;
		} else {
			obj[key[value]] = {
				quantity: 1,
				totalPayment: 0,
				getAvgPayment() {
					const avg = this.totalPayment / this.quantity
					return avg.toFixed(2);
				}
			};
			return obj;
		}
	}, {})
};


export const getFrameWithTotalPayment = (frame, value, count) => {
	return data.reduce((state, obj) => {
		return Object.keys(state).reduce((nextState, val) => {
			if (obj[value] === val) {
				state[val].totalPayment += obj[count];
			}
			return state;
		}, {})
	}, frame);
};

export const getTotalPayment = data => data.reduce((sum, num) => parseFloat(sum.toFixed(2)) + num.amount, 0);

export const getAvgPayment = (objWithTotalPayment, key) => {
	return Object.keys(objWithTotalPayment).reduce((arr, value) => [...arr, {[key]: value, avg: objWithTotalPayment[value].getAvgPayment()}], []);
};