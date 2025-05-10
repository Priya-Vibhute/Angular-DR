import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

@Input()  receivedData:any="";

@Output() eventemiiter=new EventEmitter<string>();
childData:string="XYZ"


emitData()
{
   this.eventemiiter.emit("Hello");
}

}
