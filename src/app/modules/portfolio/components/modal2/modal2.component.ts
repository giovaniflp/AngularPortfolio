import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-modal2',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './modal2.component.html',
  styleUrl: './modal2.component.css'
})
export class Modal2Component {

}
