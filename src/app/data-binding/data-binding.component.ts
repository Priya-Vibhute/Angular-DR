import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  data=6;
  username="ABC";
  color="red"
  inputData="****"

  displayMessage()
  {
    alert(`Good evening ${this.username}`)
  }
// changeColor("yellow")
  changeColor(color:string)
  {
       this.color=color;
  }

}
