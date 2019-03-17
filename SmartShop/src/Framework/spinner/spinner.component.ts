import { Component } from '@angular/core';

import { SpinnerService } from './spinner.service';

@Component({
    selector: 'spinner-cmp',
    template: `
    <div class="spinner-backdrop" [hidden]="!visible">
        <div class="spinner-container">
            <img class="spinner" src="/Images/spinner.gif" alt="loading" />
        </div>
    </div>`,
    styles: [
        `.spinner-backdrop {
            position: fixed;
            background-color: rgba(0, 0, 0, 0.3);
            width: 100%;
            height: 100%;
            z-index: 9999;
            top : 0;
            left : 0;
        }`,
        `.spinner-container {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50px;
            transform: translate(-50%, -50%);
        }`,
        `
         .spinner-container img {
            width: inherit;
        }
        `
    ]
})
export class SpinnerComponent {
    visible: boolean = false;

    constructor(private spinnerService: SpinnerService) {
        setTimeout(() =>   this.spinnerService.visible.subscribe(value => this.visible = value));
    }
}