const UserService = require('./../../app/services/UserService')

class UserView {
  static createUser(payload) {
    return payload === null ? { error: "Error: payload no existe" }
    : ``
  }
}

module.exports = UserView