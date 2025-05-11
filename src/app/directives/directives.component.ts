import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  status:boolean=false;
  loggedIn:boolean=true;
  darkTheme:boolean=true;
  names:string[]=["Nisha","Anisha","Anuja","Nikita"];
  borderRadius="0px";

  students=[
    {id:101,name:"A"},
    {id:102,name:"B"},
    {id:103,name:"C"}
  ]


  styles:string[]=["bg-danger"]

  changeStatus()
  {
    this.status=!this.status;
  }

  changeLoggedIn()
  {
    this.loggedIn=!this.loggedIn;
  }

  toggle()
  {
    this.darkTheme=!this.darkTheme;
  }

  isHighlighted:boolean=true;

  boxStyles()
  {
    let style={

      color:"red",
      "background-color":this.isHighlighted ? "yellow": "white",
      "text-align":"center"

    }

    return style;
  }

  changeHighLight()
  {
    this.isHighlighted=!this.isHighlighted;
  }


  //changeBorderRadius("20px")
  changeBorderRadius(value:string)
  {
    this.borderRadius=value;
  }

}
