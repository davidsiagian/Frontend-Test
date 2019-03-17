import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SpinnerService {
    public visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    public show(): void {
        setTimeout(() => this.visible.next(true));
        
    }

    public hide(): void {
        setTimeout(() => this.visible.next(false));
       
    }
}