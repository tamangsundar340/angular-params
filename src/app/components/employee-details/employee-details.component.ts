import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/appModule/employee/employee.module';
import { UtilityServiceService } from 'src/app/appService/utility-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  item: Employee;
  editMode:any = false;
  constructor(private route: ActivatedRoute, private _appService : UtilityServiceService) { }

  ngOnInit(): void {

    // params
    this.route.paramMap.subscribe(param=>{
      let pid = +param.get('id') // (+) Converts string 'id' to number

      this._appService.fetchSingleEmployee(pid-1).subscribe(res=>{
        console.log(res)
        this.item = res;
      })

      // queryparams
      this.route.queryParamMap.subscribe(param =>{
        this.editMode = param.get('editMode')
      })

    })
  }

}
