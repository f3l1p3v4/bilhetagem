import Constants from '../lib/Constants';
import Car from '../models/Car';

export default ({ app, router, store, Vue }) => {
    Constants.CAR = Car

    Constants.RELATION_TYPES = {}
    Constants.RELATION_TYPES.BELONGS_TO = 'belongs_to'
}