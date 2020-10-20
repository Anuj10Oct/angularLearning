import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Department } from './department';

@Component({
  selector: 'dnt-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {

  departmentList: Department[] = [
    { id : 1, name : 'IT', budget : 10000, empCount : 500, hod : 'Rajesh'},
    { id : 2, name : 'Marketing', budget : 20000, empCount : 100, hod : 'Krish'},
    { id : 3, name : 'Communication', budget : 30000, empCount : 50, hod : 'Bishan'}
  ];

  selectedDepartment: Department;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFromChild(department: Department){
    // perfom operation
    this.selectedDepartment = department;
  }

  addDepartment() {
    const newDepartment = {
      id : 4,
      budget : 10000,
      empCount : 20,
      hod : 'Lakshmi',
      name : 'Tech'
    };
    // this.departmentList.push({
    //   id : 4,
    //   budget : 10000,
    //   empCount : 20,
    //   hod : 'Lakshmi',
    //   name : 'Tech'
    // });
    // Spread Operator
    this.departmentList = [...this.departmentList, newDepartment];
  }
}
