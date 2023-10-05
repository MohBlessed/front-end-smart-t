import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  userData:any=[];
  allUsers:any=[];
  user_id!:number;
  errormessage!: string;
  username: any;
  ngOnInit(): void {
    const user = this.storageService.getUser();
     this.username = user.username;
     this.getEmployeeByUsername();
  }
  constructor(private userService:UserService,private storageService: StorageService){}

 

    getEmployeeByUsername(){
      this.userService.getAdminBoard(this.username).subscribe(
        (data:any)=>{
          this.userData = data;
          this.user_id=data.departmentId;
          this.getAllUsers();
        }
      ),
      (err:Error)=>{
        this.errormessage=err.message;
        console.log("error");
        
        }
      }

      getAllUsers(){
        this.userService.usersByEmailDepartment(this.user_id).subscribe(
          (data:any)=>{
            this.allUsers = data;
            console.log(this.allUsers);
          }
        ),
        (err:Error)=>{
          this.errormessage=err.message;
          console.log("error");
          
          }
        }
}
