import { Component,OnInit } from '@angular/core';
import { DpService } from '../../../Framework/service';
import { Table, ProductData, VariantData} from '../../model/table.model';
import { Router } from "@angular/router";

let ctrl: any;
@Component({
    selector: 'product-page',
    templateUrl: './product.component.html'
    
})

export class ProductPageComponent{
    data : ProductData;

    constructor(public http : DpService, private router: Router)
    {
       this.OnInit()
    }

    OnInit()
    {
        this.http.httpService.GetTableData().subscribe(result => 
            {
                this.data = result.Data;
            });
    }
}