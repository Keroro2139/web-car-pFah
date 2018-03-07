import { SELECT_GEAR_TYPE, SELECT_BRAND } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case SELECT_GEAR_TYPE:
            return { ...state, gearType: action.payload };
            break;
        case SELECT_BRAND:
            return { ...state, brand: action.payload };
        default:
            break;
    }
    return state;
}