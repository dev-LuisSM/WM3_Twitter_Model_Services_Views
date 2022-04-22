const User = require('./../../app/models/User')

describe('Unit Test for User class', () => {
  test('Create an User object', () => {
    const user = new User(1, "dev_LuisSM", "Luis", "Bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("dev_LuisSM")
    expect(user.name).toBe("Luis")
    expect(user.bio).toBe("Bio")
    // Setting the date
    // not.toBeUndefined verifica que el valor no sea Undefined
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  })

  test('Add gettets', () => {
    const user = new User(1, "dev_LuisSM", "Luis", "Bio")

    expect(user.getUsername).toBe("dev_LuisSM")
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
  })
})