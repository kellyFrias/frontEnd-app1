import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioManageComponent } from './usuario-manage/usuario-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioManageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
