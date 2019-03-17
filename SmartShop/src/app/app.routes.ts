import { LoginPageComponent } from '../app/pages/login/login.component';
import { DashboardPageComponent } from '../app/pages/dashboard/dashboard.component';
import { ProductPageComponent } from '../app/pages/product/product.component';

export const MODULE_ROUTES = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'dashboard', component: DashboardPageComponent },
    { path: 'product', component: ProductPageComponent }
];

export const MODULE_COMPONENTS = [
    LoginPageComponent,
    DashboardPageComponent,
    ProductPageComponent
]