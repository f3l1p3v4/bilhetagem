import api from '../services/api';
import { modelFactory } from './Common';
import Constant from './Constants';

export default class Basemodel {
    constructor (data = null, singularResourceName, pluralResourceName) {
        if (data !== null && data !== undefined && data?.id) {
            this.fields = { ...data };
            this.is_persisted = true;
        } else {
            this.is_persisted = false;
        }

        this.errors = {};
        this.validators = {};
        this.relations = {};
        this.singularResourceName = singularResourceName;
        this.pluralResourceName = pluralResourceName;
    }

    request (url, filters = {}) {
        return api.generalRequest(url, filters).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    postRequest (url, body ={}) {
        return api.generalRequest(url, body).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    static request (url, filters = {}) {
        return api.generalRequest(url, filters).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    get id() {
        return this.fields.id;
    }

    setID(id) {
        this.fields.id;
    }

    get singularResourceName() {
        return this._singularResourceName;
    }

    get pluralResourceName() {
        return this._pluralResourceName;
    }

    set singularResourceName(singularResourceName) {
        this._singularResourceName = singularResourceName;
    }

    set pluralResourceName(pluralResourceName) {
        this._pluralResourceName = pluralResourceName;
    }

    static getAll(filters = {}) {
        const ConstructorName = this.prototype.constructor.singularResourceName.tuUpperCase();

        return api.getResources(this, filters).then(response => {
            const resources = [];

            response.data.forEach(element => {
                resources.push(modelFactory(ConstructorName, element));
            })
        })
    }
}