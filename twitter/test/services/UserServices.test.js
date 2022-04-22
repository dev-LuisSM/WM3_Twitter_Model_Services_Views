const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
  test('1. Create a new user using the UserService', () => {
    const user = UserService.create(1, "dev_LuisSM", "Luis")
    expect(user.username).toBe('dev_LuisSM')
    expect(user.name).toBe('Luis')
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

})