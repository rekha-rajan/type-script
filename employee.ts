interface Employee {
    readonly empId: number;
    readonly empName: string;
    readonly empAddress: string;
}

const employee: Employee = {
    empId: 345,
    empName: "Rekha",
    empAddress: "Dhruvanadham, City"
  };
  
  console.log("Employee ID:", employee.empId);
  console.log("Name:", employee.empName);
  console.log("Address:", employee.empAddress);