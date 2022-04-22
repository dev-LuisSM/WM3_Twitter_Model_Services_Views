class User {
  constructor(id, username, name, bio) {
    this.id = id
    this.username = username
    this.name = name
    this.bio = bio
    this.dateCreated = new Date().toDateString
    this.lastUpdated = new Date().toDateString
  }
}

module.exports = User