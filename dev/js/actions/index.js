export const SELECT_GEAR_TYPE = 'SELECT_GEAR_TYPE'
export const SELECT_CAR = 'SELECT_CAR'

export function selectGearType(gearType) {
    return {
        type: SELECT_GEAR_TYPE,
        payload: gearType,
    }
}

export function selectCar(car) {
    return {
        type: SELECT_CAR,
        payload: car,
    }
}