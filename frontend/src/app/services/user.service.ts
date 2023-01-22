import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../shared/models/user";
import {IUserLogin} from "../shared/Interfaces/IUserLogin";
import {HttpClient} from "@angular/common/http";
import {USER_LOGIN_URL, USER_REGISTER_URL} from "../shared/constants/urls";
import {ToastrService} from "ngx-toastr";
import {IUserRegister} from "../shared/Interfaces/IUserRegister";

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;
  public user = new User();
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<any>{
    return this.http.post<any>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user: any) => { // successful login
          console.log("log:" + user.token)
          this.user = user.user;
          this.user.token = user.token;
          this.setUserToLocalStorage(user);
          this.userSubject.next(user.user);
          this.toastrService.success(
              `Welcome ${user.user.name}!`,
              'login Successful'
          )
        }, error: (errorResponse) =>{
            this.toastrService.error(errorResponse.error, 'Login failed');
        }
      })
    );
  }

  register(userRegister: IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => { // successful register
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome ${user.name}!`,
            'Register Successful'
          )
        }, error: (errorResponse) =>{
          this.toastrService.error(errorResponse.error, 'Register failed');
        }
      })
    )
  }

  logout(){
    this.userSubject.next(new User()); //empty user
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User(); //if there is no user in local storage
  }


}
