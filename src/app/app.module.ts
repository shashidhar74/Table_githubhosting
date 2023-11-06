import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule} from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './employee.service';





const routes:Routes=[
  {
    path:'', redirectTo:'/home',pathMatch:'full'
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"empdata",component:EmpdataComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ConfirmationDialogComponent,
    HomeComponent,
    EmpdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
