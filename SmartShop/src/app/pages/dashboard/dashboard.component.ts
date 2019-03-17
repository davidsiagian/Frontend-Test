import { Component,OnInit } from '@angular/core';
import { DpService } from '../../../Framework/service';
import { Chart, ChartData} from '../../model/chart.model';
import { Router } from "@angular/router";

let ctrl: any;
declare var Chartist: any;
@Component({
    selector: 'dashboard-cmp',
    templateUrl: './dashboard.component.html'
    
})

export class DashboardPageComponent{
    data : Chart ;
    lineData : ChartData;  
    pieData : ChartData;
    barData : any;


    chartdata3 : ChartData;
    chartConfig3 : any;
    constructor(public http : DpService,private router: Router)
    {
       this.OnInit()
    }

    OnInit()
    {
        this.http.httpService.GetChartData().subscribe(result => 
            {
                this.data = result;
                this.ChartData(this.data);
            });
    }

    ChartData(data : Chart)
    {
        this.lineData = this.data.Data[0];
        this.pieData = this.data.Data[1];
        this.barData = this.data.Data[2];
    }

    lineConfig: any = {
        showArea: true,
        fullWidth: true,
        lineSmooth: false,
        height: '300px',
        axisX: {
          showGrid: false
        },
        axisY: {
          width: '50px',
          showGrid: true,
          labelInterpolationFnc: function (value) {
            if (value == 0) {
              return '';
            }
            var mylength = parseInt(value).toString();
            if (mylength.length <= 4) {
              return parseFloat(value);
            }
            else if (mylength.length >= 5 && mylength.length <= 6) {
              return (value / 1000) + 'k';
            }
            else if (mylength.length >= 7 && mylength.length <= 9) {
              return (value / 1000000) + 'MM';
            }
            else if (mylength.length >= 10) {
              return value / 1000000000 + 'BN';
            }
          }
        },
        low: 0,
        high: 'auto',
        plugins: [
          Chartist.plugins.legend({
            legendNames: ['Revenue', 'Margin', 'Expense'],
          }),
          Chartist.plugins.tooltip({
            tooltipOffset: {
              x: 0,
              y: 30
            },
            tooltipFnc: function (meta, value) {
              return meta;
            }
          })
        ]
    };
    
    pieConfig: any = {
        showArea: true,
        fullWidth: true,
        lineSmooth: false,
        height: '300px',
        showLabel: false,
        plugins: [
            Chartist.plugins.tooltip(),
            Chartist.plugins.legend({
                position: 'bottom',
                className: 'chart-legend'
            })
        ]
    };

    barConfig: any = {
        seriesBarDistance: 10,
        classNames: {
          bar: 'ct-bar'
        },
        axisX: {
          showGrid: false
        },
        height: '250px'
    };

    logOut()
    {
      this.router.navigate(['/login']);
    }
}
