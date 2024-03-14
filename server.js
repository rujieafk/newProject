const dbOperation = require('./dbFiles/dbOperation');
const Employee = require('./dbFiles/employee');


// const filePath = './test.xlsx';
// dbOperation.insertEmployeesFromExcel(filePath); 

// let newEmp = new Employee('Micky Mouse', 'IT', 6000);


// dbOperation.insertEmployee(newEmp);
// dbOperation.updatedEmp(newEmp);

// Retrieving employees
dbOperation.getEmployees()
    .then(res => {
        console.log(res.rowsAffected); 
        
        // res.recordset.forEach(record => {
        //     console.log(res.recordset);
        //     // if(record.employee_name == 'Bart Simpson'){
        //     //     console.log(record.employee_name);
        //     // }else{
        //     //     console.log('Not found');
        //     // }
        //   });
    })
    .catch(error => {
        console.error("Error retrieving employees:", error); // Handling error
    });
