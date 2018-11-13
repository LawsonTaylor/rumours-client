import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChainCommandsComponent } from './chain-commands/chain-commands.component';

@NgModule({
  declarations: [
    AppComponent,
    ChainCommandsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
