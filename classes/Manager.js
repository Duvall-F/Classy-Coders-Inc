const {Employee} = require('./Employee.js')

class Manager extends Employee{
    #employeesManaged = [];
    constructor(name,position,salary,department,employeesManaged){
        super(name,position,salary);
        this.department = department;
    }
    getEmployeesManaged(){
        return(this.#employeesManaged);
    }
    setEmployeesManaged(employee){
        this.#employeesManaged.push(employee);
    }

}

module.exports = {
    Manager,
}