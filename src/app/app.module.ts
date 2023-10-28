import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialDesignModule } from './modules/material-design.module'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { CoinsListComponent } from './components/coins-list/coins-list.component'
import { CoinDetailsComponent } from './components/coin-details/coin-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CoinsListComponent,
    CoinDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
