import { Component,OnInit } from '@angular/core';
import { DpService } from '../../../Framework/service'
import { Login } from '../../model/login.model';
import {Router} from "@angular/router";

let ctrl: any;

@Component({
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    styleUrls : ['./login.component.css']
    
})

export class LoginPageComponent{
    Username : string = '';
    Password: string = '';   
    status : boolean ;
    
    constructor(public http : DpService,private router: Router){}
    submitForm()
    {
        this.http.httpService.loginService(this.Username, this.Password).subscribe(x=> 
            {
                if(x)
                {
                    this.router.navigate(['/dashboard']);
                }                
            });
        }
    }
