import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  

  async getEmployees(){
    let token = localStorage.getItem('token') as string;
    let res = await fetch('http://localhost:4400/employee', {
      headers:{
        "Content-type": "application/json",
        "token": token
      }
    })

    let data = await res.json()

    return data
    
  }

  async checkDetails(){
    let token = localStorage.getItem('token') as string
    let res = await fetch('http://localhost:4400/employee/check_user_details',{
      headers:{
        "Content-type": "application/json",
        "token": token
      }
    })

    let data = await res.json()

    let role = data.info.role

    return role
  }

  async getOneEmployee(employee_id: string){

    let res = await fetch(`http://localhost:4400/employee/${employee_id}`,{
      headers:{
        "Content-type": "application/json"
      }
    })

    let data = await res.json()

    return data.employee
  }
}
