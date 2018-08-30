import { INIT, START } from '../constants';

export const start = value => ({
    type: START,
    payload: value
})

export const init = () => ({
    type: INIT
});
