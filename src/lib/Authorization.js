export default class AuthEngine {
    constructor (store) {
      this._store = store
    }
  
    can (permission, payload = {}) {
      if (!permission) return false
  
      const role = this._store.getters['auth/getUserType']
      return this[permission](role, payload)
    }
  
    role () {
      return this._store.getters['auth/getUserType']
    }
  
    userID () {
      return this._store.getters['auth/getID']
    }
}
  