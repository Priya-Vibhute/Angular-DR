import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { Product } from './product/product.component';
import { CustomerComponent } from './customers/customer.component';
import { StudentComponent } from './student/student.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AComponent } from './a/a.component';
import { BookComponent } from './book/book.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipeComponent } from './pipe/pipe.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent,CategoryComponent,Product,CustomerComponent,StudentComponent,DataBindingComponent,AComponent,BookComponent,DirectivesComponent,PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
