export const SELECT_GEAR_TYPE = 'SELECT_GEAR_TYPE'
export const SELECT_BRAND = 'SELECT_BRAND'

export function selectGearType(gearType) {
    return {
        type: SELECT_GEAR_TYPE,
        payload: gearType,
    }
}

export function selectBrand(brand) {
    return {
        type: SELECT_BRAND,
        payload: brand,
    }
}