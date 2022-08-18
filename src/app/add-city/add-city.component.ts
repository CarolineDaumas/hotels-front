import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  myForm:FormGroup;
  error=null;


  newCity={
    id:0,
    name:""
  };
  
  constructor(public apiService:ApiService, private router:Router, private route: ActivatedRoute) {
    this.myForm=new FormGroup({
      name: new FormControl(this.newCity.name),
    });  
   }

  ngOnInit(): void {
  }

  onAddCity(form:FormGroup){
    if(confirm("Valider l'ajout de la ville?")){
      this.newCity.name=form.value.name

      this.apiService.saveNewCity(this.newCity).subscribe({
        next: (data) => console.log(data) 
      })

      this.router.navigateByUrl('/')

}
  }
}
