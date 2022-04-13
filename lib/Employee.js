class Employee {
    constructor(data) {
        const { name, id, email, officeNumber, username, school} = data;

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
        this.officeNumber = officeNumber;
        this.username = username;
        this.school = school;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Employee