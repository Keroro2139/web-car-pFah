import { combineReducers } from 'redux';

import CarProps from './Car-Reducer';

const allReducers = combineReducers({
    // state: (state = {}) => state,
    CarProps,
});

export default allReducers;
