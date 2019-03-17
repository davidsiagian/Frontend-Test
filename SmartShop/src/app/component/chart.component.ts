import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var Chartist: any;

@Component({
    selector: 'chart-comp',
    templateUrl: './chart.component.html'
})
export class ChartComponent implements AfterViewInit {
    @Input() config: any;
    @Input() data: any;
    @Input() type: string = "";

    @ViewChild('container') container: ElementRef;

    ngAfterViewInit(): void {
        this.initChart();
    }

    initChart(): void {
        switch (this.type) {
            case "line":
                new Chartist.Line(this.container.nativeElement, this.data, this.config);
                break;
            case "pie":
                new Chartist.Pie(this.container.nativeElement, this.data, this.config);
                break;
            case "bar":
                new Chartist.Bar(this.container.nativeElement, this.data, this.config);
                break;
        }
    }
}