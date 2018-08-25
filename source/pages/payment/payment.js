import './payment.scss';
import { getTotalPayment, getFrame, getFrameWithTotalPayment, getAvgPayment } from './model';
import { createTable } from './view';

// for departments
const departments = getFrame('department');
const totalPaymentOfDep = getFrameWithTotalPayment(departments, 'department', 'amount');
const avgPaymentOfDep = getAvgPayment(totalPaymentOfDep, 'department');

// for months
const months = getFrame('month');
const totalPaymentOfMonths = getFrameWithTotalPayment(months, 'month', 'amount');
const avgPaymentOfMonths = getAvgPayment(totalPaymentOfMonths, 'month')



createTable('#payment-departments', ['Department', 'Avg.Payment'], avgPaymentOfDep);
createTable('#payment-months', ['Month', 'Avg.Payment'], avgPaymentOfMonths);
createTable('#payment-total', ['Total'], [{total: getTotalPayment(data)}]);