const Employee = require('../lib/Employee');

test('will create the employees object', () => {
    const data = {
        name: "Jaime",
        id: 2813308004,
        email: "Jaime007rivas@yahoo.com",
        officeNumber: 1
    };
    console.log(data)
    const employee = new Employee(data);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

