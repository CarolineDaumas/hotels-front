import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './add-city/add-city.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { HotelsComponent } from './hotels/hotels.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';

const routes: Routes = [
  {path:'hotels', component: HotelsComponent},
  {path:'details/:id', component: DetailsHotelComponent},
  {path:'update/:id', component: UpdateHotelComponent},
  {path:'addHotel', component:AddHotelComponent},
  {path:'addCity', component:AddCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
