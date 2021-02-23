import Car from '../../models/Car';

export function SET_DATA (state, data) {
    state.data = data
}

export function UPDATE_DATA (state, carData) {
    const carObj = new Car(carData);
    const carIndex = state.data.findIndex(Car => Car.id === carObj.id);

    if (carIndex >= 0) {
        state.data.splice(carIndex, 1, carObj);
    }else {
        state.data.push(carObj);
    }
}

export function REMOVE_CAR (state, payload) {
    const carIndex = state.data.findIndex(Car => Car.id === payload?.car?.id)

    if (carIndex >= 0) {
        state.data.splice(carIndex);
    }
}