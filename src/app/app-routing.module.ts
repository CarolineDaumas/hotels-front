import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  {path:'hotels', component: HotelsComponent},
  {path:'details/:id', component: DetailsHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
