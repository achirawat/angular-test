import { Component } from '@angular/core';
// import { ProductService } from '../products/product.service';

@Component({
  selector: 'pm-app',
  template:`
  <div>
    <nav class='navbar navbar-toggleable-md navbar-light bg-faded'>
      <div class='container' style='margin:0;'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='navbar-nav'>
          <li class="nav-item" style='margin-right:10px;'><a [routerLink]="['/welcome']">Home</a></li>
          <li class="nav-item"><a [routerLink]="['/products']">Product List</a></li>
        </ul>
      </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}