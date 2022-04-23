const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
  test('1. Create a new user using the UserService', () => {
    const user = UserService.create(1, "dev_LuisSM", "Luis")
    expect(user.username).toBe('dev_LuisSM')
    expect(user.name).toBe('Luis')
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

  test('2. Get all user data in a list', () => {
    const user = UserService.create(1, "dev_LuisSM", "Luis")
    // Convertir el objeto en un array con Object.values(obj)
    const userInfoList = UserService.getInfo(user)
    expect(userInfoList[0]).toBe(1)
    expect(userInfoList[1]).toBe("dev_LuisSM")
    expect(userInfoList[2]).toBe("Luis")
    expect(userInfoList[3]).toBe("Sin bio")
  })

  test('3) Update username', () => {
    const user = UserService.create(1, "dev_LuisSM", "Luis")
    UserService.updateUserUsername(user, 'not_dev_LuisSM')
    expect(user.username).toBe('not_dev_LuisSM')
  })

  test('4) Given a list of users give me the list of usernames', () => {
    const user1 = UserService.create(1, "dev_LuisSM1", "Luis")
    const user2 = UserService.create(1, "dev_LuisSM2", "Luis")
    const user3 = UserService.create(1, "dev_LuisSM3", "Luis")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    expect(usernames).toContain("dev_LuisSM1")
    expect(usernames).toContain("dev_LuisSM2")
    expect(usernames).toContain("dev_LuisSM3")
  })
})