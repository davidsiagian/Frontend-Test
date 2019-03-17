import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login/login.component'
import { FormsModule } from '@angular/forms';
import { DpHttpService, DpService, NotificationService } from '../Framework/service';
import { SpinnerModule } from '../Framework/spinner/spinner.module';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../app/pages/dashboard/dashboard.component';
import { ProductPageComponent } from '../app/pages/product/product.component';
import { SidebarModule } from '../app/pages/sidebar/sidebar.module';
import { ChartComponent  } from '../app/component/chart.component'
import { MODULE_ROUTES }  from './app.routes'
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    ChartComponent,
    ProductPageComponent
  ],
  imports: [
    SidebarModule,
    BrowserModule,
    HttpModule,
    SpinnerModule,
    RouterModule.forRoot(MODULE_ROUTES, { useHash: true }),
    FormsModule
  ],
  providers: [DpService, DpHttpService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
