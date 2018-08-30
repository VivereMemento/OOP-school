import { List, fromJS } from 'immutable';
import { INIT } from '../constants';

const initialState = fromJS([
    {
        id: 1,
        position: 'Programmer',
        actualCount: 100,
        totalCount: 1000
    },
    {
        id: 2,
        position: 'Manager',
        actualCount: 200,
        totalCount: 1000
    },
    {
        id: 3,
        position: 'Saler',
        actualCount: 300,
        totalCount: 1000
    }
]);

export default (state = [], action) => {
    console.log('THIS IS REDUCER INITIAL STATE');
    const { type } = action;

    switch(type) {
        case INIT: {
            return initialState
        }
        default: {
            return state;
        }
    }
}