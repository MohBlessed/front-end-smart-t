import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  countAdmin: number = 0;
  countAgents: number = 0;
  userData: any = [];
  ngOnInit(): void {
    this.getAllUsers();
  }
  constructor(private userService: UserService) {}

  getAllUsers() {
    return (
      this.userService.getAllUsers().subscribe((data: any) => {
        this.userData = data;
        console.log(this.userData);
        this.userData.forEach((element:any) => {
          if(this.userData.roles[0].name=='ROLE_ADMIN'){
            this.countAdmin=this.countAdmin + 1;
            console.log(this.countAdmin);
          }
          else if(this.userData.roles[0].name=='ROLE_USER'){
            this.countAdmin=this.countAdmin + 1;
            console.log(this.countAdmin);
          }
        });
      }),
      (err: Error) => {
        console.log(err.message);
      }
    );
  }
}
