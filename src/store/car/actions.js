import Car from '../../models/Car';

export async function fetchFromAPI ({ commit }) {
    commit('SET_DATA', await Car.getAll())
}

export async function save ({ commit }, payload) {
    const response = await payload.car.save();
    if(response.success === true) {
        commit('UPDATE_DATA', response.data);
    }
    return response;
}

export async function destroy ({ commit }, payload) {
    const response = await payload.car.destroy();
    if (response.success === true){
        commit('REMOVE_CAR', payload)
    }
    return response;
}