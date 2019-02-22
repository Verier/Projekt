import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutofocusModule } from 'angular-autofocus-fix';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ListaTodoComponent } from './lista-todo/lista-todo.component';
import { MiniLoginComponent } from './mini-login/mini-login.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes} from '@angular/router';


const appRoutes: Routes =[
  { path: 'home', component: MiniLoginComponent },
  { path: 'lista-todo', component: ListaTodoComponent },
  { path: 'todo', component: TodoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

]

@NgModule({
  declarations: [
    AppComponent,
    ListaTodoComponent,
    MiniLoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }