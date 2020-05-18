//array of all employees
let employees = [];

//constructor for employee information
function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
};
Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: $" + this.salary + "/year, Status: " + this.status);
};

//Creating the employees
let bob = new Employee("Bob", "Designer", 100000, "Part Time");
let jake = new Employee("Jake", "Devolper", 55000);
let daryl = new Employee("Daryl", "Writer", 30000);
bob.printEmployeeForm();
jake.printEmployeeForm();
daryl.printEmployeeForm();

//pushing employee information to array
function addEmployeeToArray(emp) {
    employees.push(emp);
}
addEmployeeToArray(bob);
addEmployeeToArray(jake);
addEmployeeToArray(daryl);

console.log(employees);