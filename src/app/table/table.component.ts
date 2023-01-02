import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private dataService:DataService) { }

  public combRes:any=[];

  public projects:any=[];
  public employees:any=[];
  public employeeProject:any=[];
  public employeeDetails:any=[];


  public testEmpArray:any=[];

  ngOnInit(): void {


   



    this.dataService.getData().subscribe(results=>{
      this.employees=results[0];

      this.employees=this.employees.employees;
      this.projects=results[1];
      this.projects=this.projects.projects;
      this.employeeProject=results[2];
      this.employeeProject= this.employeeProject.employeeProject
      this.employeeDetails=results[3];

      this.employeeDetails=this.employeeDetails.employeeDetails;


      //just for trying out a methord
      // this.testEmpArray=[...this.employees];

      this.combRes =results;

      console.log("combined res",this.combRes);
      console.log("employees",this.employees);
      console.log("projects",this.projects);
      console.log("employee Projects",this.employeeProject);
      console.log("employee details",this.employeeDetails);

      // console.log("let see what is in here",this.projects)
    })

  
 this.anotherMeth();
 console.log('emp projects', this.employeeProject)

    // console.log("pring test arry",this.testEmpArray)
    

    // this.employeeProject.employeeProject.forEach((ele:any)=>{

    //   this.testEmpArray.employees.forEach((a:any)=>{

    //     if(ele.empId === a.id){
    //     Object.assign(a,{projectId:ele.project})
    //     }

    //   })

    // })

    // console.log("test emp array",this.testEmpArray);

  }





  public comparison(){

 for (const key in this.employees){

  if(this.employees.hasOwnPropert(key)){
    const element =this.employees[key];
    if(key==='id'&& element=== this.employeeProject.empId){
      this.employees=[{...this.employees,...this.employeeProject}]
    }
    
  }
 }
    
  console.log("combined json",this.employees)

  }

  public anotherMeth(){
    this.employees.forEach((item1:any)=>{
      this.employeeProject.forEach((item2:any)=>{
        if(item1.id == item2.empId){
          this.employeeProject.push(item1);
        }
      })
    })
  }


}
