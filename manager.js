const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, salary, title, manager, employees = []){
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee){
        this.employees.push(employee);
    }

    _totalSubSalary(){
        let sum = 0;

        for (const subEmployee of this.employees){
            if (subEmployee instanceof Manager){
                sum += subEmployee.salary;
                sum += subEmployee._totalSubSalary();
            } else {
                sum += subEmployee.salary;
            }
        }

        return sum;
    }



    calculateBonus(multiplier){
        let totalSalary = this.salary + this._totalSubSalary();

        return totalSalary * multiplier
    }
}

module.exports = Manager;

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
/*
1. Add all of the employees' salaries
2. Check if an employee is an instance of the Employee Class, add their salary to the sum
3. If an employee is an instance of the Manager Class, then, add the cumulative salaries of each employee under their bel

**You can use recursive solution**
**Create a helper function**
1. _totalSubSalary() is a private method
2. Create a sum variable
3. Loop through the array of employees
    a. If an employee is a Manager, add their salary to the sum AND recurse the function to the sum
        - base case: if the employee is just an employee, add their salary to the sum
        - recursive case: if the employee is a manager, check their employee list
        - recursive call: add their employees salary to the manager's salary
    b. If an employee is just an Employee, add their salary to the sum

logic:
bonus = (manager's salary + total salary of all employees under them) * multiplier
*/
