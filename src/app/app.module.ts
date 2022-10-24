import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { ButtonFooterComponent } from './button-footer/button-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPlayersComponent,
    ButtonFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
