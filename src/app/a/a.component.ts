import { Component } from '@angular/core';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-a',
  imports: [BComponent],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  parentData={id:101,name:"Nisha"}

  receiveData(data:string)
  {
    alert(data)
  }
  
}
