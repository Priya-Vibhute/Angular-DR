import { CommonModule, LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LengthPipe } from '../length.pipe';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule,LengthPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  username:string='Nisha';
  currentdate=new Date();
}
