export class Table 
{
    Data : ProductData;
}

export class ProductData
{
    Name : any;
    Manufacture : any;
    Released : any;
    ImageURL : any;
    Variant: VariantData;
}

export class VariantData
{
    Model : any;
}