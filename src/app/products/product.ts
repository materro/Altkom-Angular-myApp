export interface Product {
    id: number;
    name: string;
    price: number;
}

// products = {
//     'Angular': 100,
//     'React': 200,
//     'HTML': 300,
// };
// <li *ngFor="let product of products | slice:0:3 | keyvalue; let i=index" (click)="selectedProduct = product">
// {{ product.key, product.value }}