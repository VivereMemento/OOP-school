import './payment.scss';
import { getTotalPayment, getFrame, getFrameWithTotalPayment, getAvgPayment } from './model';
import { createTable } from './view';

const departments = getFrame('department');
const totalPaymentOfDep = getFrameWithTotalPayment(departments, 'department', 'amount');
const avgPaymentOfDep = getAvgPayment(totalPaymentOfDep);
const months = getFrame('month');
const totalPaymentOfMonths = getFrameWithTotalPayment(months, 'month', 'amount');
const avgPaymentOfMonths = getAvgPayment(totalPaymentOfMonths);



createTable('#payment-departments', ['Department', 'Avg.Payment'], avgPaymentOfDep);
createTable('#payment-months', ['Month', 'Avg.Payment'], avgPaymentOfMonths);
const totalTable = document.querySelector('#payment-total td');
totalTable.innerText = getTotalPayment('amount');


console.log('departments', avgPaymentOfDep);
console.log('months', avgPaymentOfMonths);
// console.log(getData);
// console.log(sortedData);
// console.log(data);
// console.log(getTotalPayment);
// console.log(departments);
// console.log(totalPaymentOfDep);
// console.log(months);
// console.log(totalPaymentOfMonths);