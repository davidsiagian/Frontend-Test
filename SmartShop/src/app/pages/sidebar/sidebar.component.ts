import { Component, OnInit, Input } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor() { }
    ngOnInit() {
            this.menuItems = ROUTES;      
    }
}
