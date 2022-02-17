import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from 'src/app/appModule/employee/employee.module';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  url = 'https://global-b6f8e.firebaseio.com/empData.json';
  detail_url = 'https://global-b6f8e.firebaseio.com/empData/';

  constructor(private http:HttpClient) { }

  fetchData(){
    return this.http.get<Employee>(this.url)
    .pipe(map(res=>{

      // delcare array to store users
      const userArray = [];

      console.log("RES = ",res)

      // for loop
      for(const key in res){
        if(res.hasOwnProperty(key)){
          userArray.push({userId:key, ...res[key]})
        }
      }

      // return array
      return userArray
    }))

  }

  fetchSingleEmployee(id){
    return this.http.get<Employee>(this.detail_url+ id+'.json')
  }



}
