import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from 'src/models/city.model';
import { Hotel } from 'src/models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getCities():Observable<City[]>{
    return this.http.get<City[]>(environment.host+"/cities");
  }

  public getHotels(){
    return this.http.get<Hotel[]>(environment.host+"/hotels");
  }

  getHotelsByCityId(cityId:number){
    return this.http.get<Hotel[]>(environment.host+"/cities/"+ cityId + "/hotels");
  }

  getHotelById(hotelId: number){
    return this.http.get<Hotel>(environment.host+"/hotels/"+hotelId);
  }

  public getTasksBySearch(name: String) {
    return this.http.get<Hotel[]>(environment.host + "/research/" + name)
}
}
