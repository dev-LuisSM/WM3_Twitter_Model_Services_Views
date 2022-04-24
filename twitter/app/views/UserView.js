const UserService = require('./../../app/services/UserService')

class UserView {
  static createUser(payload) {
    return payload === null ? { error: "Error: payload no existe" }
      : (typeof payload.username != 'string' || typeof payload.name != 'string' || typeof payload.id != 'number')
      ? { error: "Error los datos del payload necesitan tener un valor válido" }
      : UserService.create(payload.id, payload.username, payload.name)
  }
}

module.exports = UserView