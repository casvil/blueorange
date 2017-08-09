import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
// import { MdSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { heroesReducer } from './reducers/heroes';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
// import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent
    // SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ heroes: heroesReducer }),
    BrowserAnimationsModule
    // MdSidenavModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
