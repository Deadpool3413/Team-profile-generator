const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

test('this will get school info', () => {
    const intern = new Intern('Blake', 123455555, 'intern@gmail.com', 'TrevorGBrowne')

    expect(intern.getSchool()).toBe('TrevorGBrowne')
})