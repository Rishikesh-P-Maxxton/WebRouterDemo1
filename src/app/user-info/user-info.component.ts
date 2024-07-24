
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../iuser';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit  {
  protected title = 'app';
  // protected users$: Observable<IUser[]>;
 users$!: IUser[];
   constructor(public userservice: UserService) {}
 
   ngOnInit() {
     this.userservice.getUsers().subscribe(res => {
       this.users$ = res;
     });
   }
}
