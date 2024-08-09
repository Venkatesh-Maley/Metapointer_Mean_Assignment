import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MyInterceptor } from './app/interceptors/my-interceptor'; 


import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { StudentListComponent } from './app/student-list/student-list.component';
import { StudentCreateComponent } from './app/student-create/student-create.component';
import { StudentEditComponent } from './app/student-edit/student-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentEditComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    CommonModule, 

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'students/create', component: StudentCreateComponent },
      { path: 'edit/:id', component: StudentEditComponent },
      { path: 'students', component: StudentListComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
