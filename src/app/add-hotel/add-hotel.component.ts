import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/models/city.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  myForm:FormGroup;
  listCities: City[] | undefined;
  error=null;
  file!:File;
  img="";
  
 
  
  newHotel={
    id:0,
    name:"",
    address : "",
    numberStars: 0,
    availableRooms: 0,
    price : 40,
    img: "chambreLyon.jpg",
    city: {} as City
  };

  constructor(public apiService:ApiService, private router:Router, private route: ActivatedRoute) {
    this.myForm=new FormGroup({
      name: new FormControl(this.newHotel.name),
      address: new FormControl(this.newHotel.address),
      numberStars: new FormControl(this.newHotel.numberStars),
      availableRooms:new FormControl(this.newHotel.availableRooms),
      price:new FormControl(this.newHotel.price),
      img:new FormControl(this.newHotel.img),
      city:new FormControl(this.newHotel.city),
    });  
   }

  ngOnInit(): void {
    this.onGetCities();
  }
 

  onGetCities(){
    this.apiService.getCities().subscribe({
      next: (data) => this.listCities = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }

  onAddHotel(form:FormGroup){
    if(confirm("Valider l'ajout de l'hôtel?")){
      this.newHotel.city=form.value.city 
      this.newHotel.name=form.value.name
      this.newHotel.address=form.value.address
      this.newHotel.numberStars=form.value.numberStars
      this.newHotel.availableRooms=form.value.availableRooms
      this.newHotel.price=form.value.price
      this.newHotel.img=this.img

      this.apiService.uploadImage(this.file).subscribe({
        next:(data)=>console.log(data)
     })
      this.apiService.saveNewHotel(this.newHotel).subscribe({
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



