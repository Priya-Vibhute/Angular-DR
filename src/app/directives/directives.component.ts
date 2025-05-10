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

  changeStatus()
  {
    this.status=!this.status;
  }

  changeLoggedIn()
  {
    this.loggedIn=!this.loggedIn;
  }

}
