import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentFilterPipe } from '../../pipes/department-filter.pipe';
import { HighlightSalaryDirective } from '../../directives/highlight-salary.directive';

/* Angular Material imports */
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    DepartmentFilterPipe,
    HighlightSalaryDirective
  ],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})

export class EmployeeListComponent {

  employees: any[] = [];
  displayedColumns: string[] = ['name', 'role', 'department', 'salary', 'actions'];

  selectedDepartment: string = 'All';

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