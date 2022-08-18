import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/models/city.model';
import { Hotel } from 'src/models/hotel.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  listHotels: Hotel[]|undefined;
  listCities: City[] | undefined;
  error=null;

  newSearch = "";
  searchForm: FormGroup;
  

  constructor(private router: Router,private apiService:ApiService) {
    this.searchForm = new FormGroup({
      newSearch: new FormControl(this.newSearch),

    });
   }

  ngOnInit(): void {
    this.getAllHotels();
    this.getAllCities();
  }

  getAllCities(){
    this.apiService.getCities().subscribe({
      next:(data) => this.listCities= data,
      error: (err) => this.error=err.message,
      complete: () =>this.error=null
    })
  }

  getAllHotels(){
    this.listHotels=[];
     this.apiService.getHotels().subscribe({
       next: (data) => this.listHotels= data,
       error: (err) => this.error=err.message,
       complete: () => this.error =null
     })
   }

   getHotelsByCity(cityId:number){
    this.listHotels=[];
    this.apiService.getHotelsByCityId(cityId).subscribe({
     next: (data) => this.listHotels= data,
     error: (err) => this.error=err.message,
     complete: () => this.error =null
    })

}

onDetailsHotels(id:any){
  this.router.navigateByUrl('details/'+id);
}


onSearch(form: FormGroup) {
this.listHotels=[];
  this.apiService.getTasksBySearch(form.value.newSearch).subscribe({
    next: (data) => this.listHotels = data,
    error: (err) => (this.error = err.message),
    complete: () => (this.error = null),
  });


}

onAdd(){
  this.router.navigateByUrl("add");
    
  }

}
