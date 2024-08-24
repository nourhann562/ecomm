
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { NavbarComponent } from "./layout/additions/navbar/navbar.component";
import { FooterComponent } from "./layout/additions/footer/footer.component";
import { RegisterComponent } from './layout/pages/register/register.component';
import { ProductsComponent } from './layout/pages/products/products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,RegisterComponent,HomeComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app2';
}
