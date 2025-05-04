import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { Product } from './product/product.component';
import { CustomerComponent } from './customers/customer.component';
import { StudentComponent } from './student/student.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent,CategoryComponent,Product,CustomerComponent,StudentComponent,DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
