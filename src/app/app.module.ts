import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { ProductListComponent } from '../products/product-list.component';
// import { ProductFilterPipe } from '../products/product-filter.pipe';
// import { StarComponent } from '../shared/star.component';
import { WelcomeComponent } from '../home/welcome.component';
// import { ProductDetailComponent } from '../products/product-detail.component';
// import { ProductDetailGuard } from '../products/product-guard.service';
import { ProductModule } from '../products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  // providers: [ ProductDetailGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
