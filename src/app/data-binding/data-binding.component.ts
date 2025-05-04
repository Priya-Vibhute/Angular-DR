import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  data=6;
  username="ABC";
  color="red"

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
