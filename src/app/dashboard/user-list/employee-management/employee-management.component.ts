import { Component, Inject } from '@angular/core';
import { UserClass } from '../../classes/user-class';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../../profile/file-handle';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent {
  price: number = 0;
  roles = ['mod','user'];
  actionBtn: string = "Save";
  users: UserClass = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: [],
    phone: '',
    address: ''
  }
  
  constructor(private sanitizer: DomSanitizer, private formbuilder: FormBuilder,
    private http: UserService) { }
    saveUser() {
      if (typeof this.users.role === 'string') {
        this.users.role = [this.users.role];
      }
  
      
      this.http.postAll(this.users).subscribe({
        next: (res: any) => {
          alert('User data added successfully');
          console.log(res);
        },
        error: () => {
          alert('User data not added');
        },
      });
    }
  
  }