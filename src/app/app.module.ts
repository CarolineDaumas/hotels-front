import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    DetailsHotelComponent,
    UpdateHotelComponent,
    AddHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
