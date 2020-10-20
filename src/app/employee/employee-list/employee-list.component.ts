import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'dnt-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [
    {id: 1, name: 'Sajal', salary: 15000, email: 'test@test.com', age: 25},
    {id: 2, name: 'Sid', salary: 12000, email: 'test2@test.com', age: 26},
    {id: 3, name: 'Suraj', salary: 13000, email: 'test3@test.com', age: 27},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(i: number, data: Employee){
    return data.id ?? i;
  }

}
