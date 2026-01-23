import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

/* Angular Material imports */
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})

export class EmployeeListComponent {

  employees: any[] = [];
  displayedColumns: string[] = ['name', 'role', 'department', 'salary', 'actions'];

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employees = this.employeeService.getEmployees();
  }

  viewEmployee(id: number) {
    this.router.navigate(['/employee', id]);
  }
}
