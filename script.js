// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data (first name, last name and salary) and establish a while loop to add records as long as the manager wants to continue adding new employees to the table. Stop when the manager no longer wants to include a new record to the table.
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let addRecord = true;
  const employees = [];
  while (addRecord) {
    let employee = {};
    const firstNameInput = prompt("Please type your employee's first name");
    const lastNameInput = prompt("Please type your employee's last name");
    const employeeSalaryInput = prompt("Please type your employee's salary");
    if (firstNameInput && lastNameInput && employeeSalaryInput) {
      employee.firstName = firstNameInput;
      employee.lastName = lastNameInput;
      //If the employeeSalaryInput is not a number, default the value to 0
      if(isNaN(employeeSalaryInput)) { 
        employee.salary = 0;
      } else {
        employee.salary = Number(employeeSalaryInput);
      }
    }

    //Include new employee data to the table, and ask the manager if he wants to add or not a new record to the table
    employees.push(employee);
    let nextEmployee = confirm("Do you want to include a new employee?");
    if(!nextEmployee){
      return employees;
    }

  }

} 

// Display the average salary of the employees included in the table 
const displayAverageSalary = function(employeesArray) {
  let sumSalary = 0;
  let numberEmployees = 0;
  for (let sal_i of employeesArray) {
    sumSalary+=sal_i.salary;
    numberEmployees++;
  }
  console.log(`The average salary of your employees is: ${sumSalary/numberEmployees}`)
  }

  //Obtains the first name of a random employee and displays it in the console; this employee is considered as a "random employee winner" for a raffle
const getRandomEmployee = function(employeesArray) {
  let randomEmployee = employeesArray[Math.floor(Math.random(employeesArray.length))];  
  console.log(employeesArray);
  console.log(randomEmployee);
  console.log(`Congratulations to ${randomEmployee.firstName}, our random employee winner!`);
  return randomEmployee;


}
//Starter code, was not modified during the editing of the source code

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
