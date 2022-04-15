const Employee = require('../lib/Employee');

test('will create the employees object', () => {

    const employee = new Employee('Jaime', 2, 'Jaime007rivas@yahoo.com');

    expect(employee.name).toEqual('Jaime');


    console.log(employee);
});

test('this will test the id number', () => {

    const employee = new Employee('Jaime', 2, 'Jaime007rivas@yahoo.com');

    expect(employee.id).toEqual(expect.any(Number));

    // console.log(id)
});

test('this will test the school', () => {

    const employee = new Employee('Jaime', 2, 'Jaime007rivas@yahoo.com');

    expect(employee.email).toEqual(expect.any(String));

    // console.log(email)
});



