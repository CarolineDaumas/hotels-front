import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/models/city.model';
import { Hotel } from 'src/models/hotel.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {
  myForm:FormGroup;
  listCities: City[] | undefined;
  error=null;
  file!:File;
  img="";
  id:number;
 
  
  updatedHotel={
    id:0,
    name:"",
    address : "",
    numberStars: 0,
    availableRooms: 0,
    price : 10,
    img: "chambreLyon.jpg",
    city: {} as City
  };

  constructor(public apiService:ApiService, private router:Router, private route: ActivatedRoute) {
    this.myForm=new FormGroup({
      name: new FormControl(this.updatedHotel.name),
      address: new FormControl(this.updatedHotel.address),
      numberStars: new FormControl(this.updatedHotel.numberStars),
      availableRooms:new FormControl(this.updatedHotel.availableRooms),
      price:new FormControl(this.updatedHotel.price),
      img:new FormControl(this.updatedHotel.img),
      city:new FormControl(this.updatedHotel.city),
    });
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    
    
   }

  ngOnInit(): void {
    this.onGetCities();
    this.getHotel(this.id);
  
  }
 

  onGetCities(){
    this.apiService.getCities().subscribe({
      next: (data) => this.listCities = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }

  getHotel(hotelId:number){
    if(hotelId){
      this.apiService.getHotelById(hotelId).subscribe({
     
        next: (data) => this.updatedHotel=data,
         error: (err) => this.error=err.message,
         complete: () => console.log(this.updatedHotel) 
        })
    }
  }

  onUpdateHotel(form:FormGroup){
    console.log(form.value);
    if(confirm("Valider la modification de l'hôtel?")){
      this.updatedHotel.city=form.value.city 
      this.updatedHotel.name=form.value.name
      this.updatedHotel.address=form.value.address
      this.updatedHotel.numberStars=form.value.numberStars
      this.updatedHotel.availableRooms=form.value.availableRooms
      this.updatedHotel.price=form.value.price
      this.updatedHotel.img=this.img

      this.apiService.uploadImage(this.file).subscribe({
        next:(data)=>console.log(data)
     })
      this.apiService.saveNewHotel(this.updatedHotel).subscribe({
        next: (data) => console.log(data) 
      })
  

      
      this.router.navigateByUrl('/')
    }
  }

   /// img 
   processFile(event: any) {
    // const file: File = event.target.files[0];
    this.file = event.target.files[0];
    // console.log(this.file.name)
    this.img = this.file.name

  }

}
