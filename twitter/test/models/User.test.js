const User = require('./../../app/models/User')

describe('Unit Test for User class', () => {
  test('Create an User object', () => {
    const user = new User(1, "dev_LuisSM", "Luis", "Bio", "dateCreated", "lastUpdated")

    expect(user.id).toBe(1)
    expect(user.username).toBe("dev_LuisSM")
    expect(user.name).toBe("Luis")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).toBe("dateCreated")
    expect(user.lastUpdated).toBe("lastUpdated")
  })
})