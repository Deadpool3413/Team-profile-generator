const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school, role){
        super(name, id, email);
        this.school = school;
        this.role = role
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern