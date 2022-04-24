const User = require('./../models/User')

class UserService {
  static create(id, username, name){
    return new User(id, username, name, "Sin bio")
  }

  static getInfo(user) {
    return Object.values(user)
  }

  static updateUserUsername(user, updateUser){
    return user.username = updateUser
  }

  static getAllUsernames([user, user2, user3]) {
    return [user.username, user2.username, user3.username]
  }
}

module.exports = UserService