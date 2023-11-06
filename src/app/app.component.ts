import { Component } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FormGroup } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatDialogModule} from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closeSidenav(nav: MatSidenav) {
    nav.close();
  }
  title = 'DialogBox';

  isDialog=false;
  constructor(public dialog:MatDialog){}
  openRegister(){
    if(!this.isDialog){
      this.isDialog=true;
        const opendia= this.dialog.open(RegisterComponent,{
          height: '80%',
          width: '80%',
          position: { top: '0%', left: '10%' },
        });
        opendia.afterClosed().subscribe(() => {
          this.isDialog = false; 
        });

        
    }
   
  }
}
