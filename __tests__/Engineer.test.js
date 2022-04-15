const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')

test('get engineer github username', () => {
    const engineer = new Engineer('Boy', 123456, 'boy12@gmail.com', 'Deadpool3413')
    const gitUsername = 'Deadpool3413'
    expect(engineer.getUsername()).toBe(gitUsername)
})