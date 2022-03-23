import BaseModel from '../lib/BaseModel'; 

export default class Car extends BaseModel {
    constructor ( data = null ) {
        super (data, 'car', 'cars');

        this.fields = {
            id: data?.id,
            created_at: data?.['created_at'],
            updated_at: data?.['updated_at'],
            number_car: data?.['number_car'],
            categorie: data?.categorie,
            group: data?.group,
        }

        this.validators = {
            number_car: [
                v => !!v || 'Carro é obrigatório',
                v => v.length <= 4 || 'Carro deve ter apenas 4 caracteres',
            ]
        }
    }

    /* GETTERS AND SETTERS */
    get id() {
        return this.fields.id;
    }

    get created_at() { 
        return this.fields.created_at;
    }

    get number_car() {
        return this.fields.number_car;
    }

    get categorie() {
        return this.fields.categorie;
    }

    get group() {
        return this.fields.group;
    }

    set numberCar(numberCar) {
        this.fields.number_car = numberCar;
    }

    set categorie(categorie) {
        this.fields.categorie = categorie;
    }

    set group(group) {
        this.fields.group = group;
    }
}

Car.singularResourceName = 'car';
Car.pluralResourceName = 'cars';
