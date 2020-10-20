import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Employee } from './employee';


@Component({
  selector: 'dnt-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, DoCheck {

  @ViewChild(HeaderComponent, {static : true}) headerComponent: HeaderComponent;
  @ViewChild('emailDiv', {static : true}) emailDiv: ElementRef;

  employee: Employee = {
    age: 22,
    email: 'testEmployee@gmail.com',
    id: 1,
    name: 'test',
    salary: 4500
  };

  name: string;
  email: string = 'Abhijit@gmail.com';
  hidden: boolean = false;

  constructor() {
    this.name  = 'Abhijit'; 
   }

  ngOnInit(): void {
    this.headerComponent.title = 'Employee list';
    this.emailDiv.nativeElement.innerText = "The Email is not valid";
  }

  // Performed Every time when you perform any operation on application
  //Performance Hit
  ngDoCheck(): void{
    console.log("DO Check is called");
  }

  toggle() {
    this.hidden = !this.hidden;
  }

}
