const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, username, role) {
        super(name, id, email);
        this.username = username
        this.role = role
    }

getUsername(){
    return this.username; 
}

getRole() {
    return "Engineer"
}
}

module.exports = Engineer