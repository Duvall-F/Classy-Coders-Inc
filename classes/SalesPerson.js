const {Employee} = require('./Employee.js')

class SalesPerson extends Employee{
    #totalsales = 0;
    constructor(name,position,salary,clients){
        super(name,position,salary)
        this.clients = clients;
    }
    getSalesNumber(){
        return(this.#totalsales);
    }
    makeSale(amount){
        this.#totalsales += amount;
    }
}

module.exports = {
    SalesPerson,
}