class Employee {
    #salary;
    #isHired;
    static #Employees = [];
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employee.#Employees.push(this);
    }
    getSalary(){
        return(this.#salary);
    }
    setSalary(salary){
        if (salary < 0){
            throw new Error("Salary cannot be negative");
        }
        this.#salary = salary;
    }
    getStatus(){
        return(this.#isHired);
    }
    setStatus(command){
        if (command == "hire"){
            this.#isHired = true;
        }
        else if (command == "fire"){
            this.#isHired = false;
        }
    }
    static getEmployees(){
        return(Employee.#Employees)
    }
    static getTotalPayroll(){
        let total = 0;
        for (let i in Employee.#Employees){
            total += Employee.#Employees[i].getSalary();
        }
        return(total);
    }
}

module.exports = {
    Employee,
}
