const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')


test('get role will return manager', () => {
    const manager = new Manager('Jake', 623789456, 'manager@gmail.com', 6234567889)

    expect(manager.getRole()).toBe('Manager')
})