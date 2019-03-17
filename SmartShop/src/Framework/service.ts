import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject, BehaviorSubject } from 'rxjs/Rx';

import { SpinnerService } from './spinner/spinner.service';

import { Login } from'../app/model/login.model'
import { Chart } from '../app/model/chart.model'
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import 'rxjs/add/operator/toPromise';
import { error } from 'util';
import { of } from 'rxjs/internal/observable/of';
import { Table } from '../app/model/table.model';

declare var $;

@Injectable()
export class DpHttpService
{
    private currentRequest: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private http: Http, private spinnerService: SpinnerService) {
        //Subscribe to current request
        this.currentRequest.subscribe(value => this.updateSpinner(value));
    }
    public loginService(username : string,password : string) : Observable<boolean>
    {
        let auth : Login;
        let passed : boolean;   
        return this.http.get("./assets/json/login.json")
            .map(res => 
                {
                    auth = this.handleSuccess(res);
                    if(username == auth.Username && password == auth.Password)
                    {
                        return true;
                    }else return false;
                });    
    }
    public GetChartData () : Observable<Chart>
    {
        return this.http.get("./assets/json/chart.json")
        .map(res => 
            {
                let chart : Chart = this.handleSuccess(res);
                return chart;
            });    
    }

    public GetTableData () : Observable<Table>
    {
        return this.http.get("./assets/json/table.json")
        .map(res => 
            {
                let table : Table = this.handleSuccess(res);
                return table;
            });    
    }

    private handleSuccess(data: any): any {
        this.removeRequest();

        if (typeof data == 'string') {
            return data as any;
        }

        data._body = data._body || {};
        return data.json() as any;
    }


    //Spinner Service
    private updateSpinner(count: number): void {
        if (count > 0) this.spinnerService.show();
        else this.spinnerService.hide();
    }

    private addRequest(): void {
        this.currentRequest.next(this.currentRequest.value + 1);
    }

    private removeRequest(): void {
        this.currentRequest.next(this.currentRequest.value - 1);
    }
}

@Injectable()
export class NotificationService {
    notify(message: string, type: string): void {
        $.notify({
            message: message
        },
            {
                type: type,
                newest_on_top: true,
            });
    }
}

@Injectable()
export class DpService {
    constructor(
        public httpService: DpHttpService,
        public notificationService: NotificationService,
        public router: Router,
        public location: Location) { }
}