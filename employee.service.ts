import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    { id: 1, name: 'John', role: 'Developer', department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice', role: 'Tester', department: 'QA', salary: 40000 }
  ];

  getEmployees() {
    return this.employees;
  }

  getEmployeeById(id: number) {
    return this.employees.find(emp => emp.id === id);
  }

  addEmployee(employee: any) {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
  }
}
