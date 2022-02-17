import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityServiceService } from 'src/app/appService/utility-service.service';
import { Employee } from 'src/app/appModule/employee/employee.module';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  users : any;


  constructor(private _appService: UtilityServiceService, private route: Router) { }

  ngOnInit(): void {

    this.fetchEmp()
  }


  fetchEmp(){
    this._appService.fetchData().subscribe((res)=>{
      this.users = res;
    })
      
  }
}
