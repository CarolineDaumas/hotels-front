import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/models/city.model';
import { Hotel } from 'src/models/hotel.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-details-hotel',
  templateUrl: './details-hotel.component.html',
  styleUrls: ['./details-hotel.component.css']
})

 export class DetailsHotelComponent implements OnInit {
  
  id=1;
  hotel: Hotel|undefined;
  //city: City | undefined;
  error=null;
 
 
  constructor(private router: Router,private apiService:ApiService, private route: ActivatedRoute) {
   
    this.id = Number(this.route.snapshot.paramMap.get('id'));  }

  ngOnInit(): void {
    this.getHotel(this.id);
  }

  getHotel(hotelId:number){
    if(hotelId){
      this.apiService.getHotelById(hotelId).subscribe({
     
        next: (data) => this.hotel=data,
         error: (err) => this.error=err.message,
         complete: () => this.error =null
        })
    }
    
  }

  onUpdate(idHotel:number){
    this.router.navigateByUrl("update/"+idHotel)
      
    }

    onDelete(hotel:Hotel){
      if (confirm("Etes-vous sûr de vouloir supprimer cet hôtel?")) {
        this.apiService.deleteHotel(hotel)
          .subscribe({
            //next: (data) => console.log(data),
            error: (err) => this.error = err.message,
            complete: () => (this.error = null),
          })
          this.router.navigateByUrl("hotels");

      }

    }
  }


