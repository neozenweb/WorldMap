import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { }
  getCountryData(countryCode: string){
  //try{
    return this.http
    .get(`https://api.worldbank.org/v2/country/${countryCode}?format=json`,{responseType:'json'})
  //}
    // catch(error: any){
    //   this.handleError(error);
    //   return {};
    // };
   
  }

  private handleError(error: Response){
    if(error.status === 400){
      return {message:"Bad Input"}
    }
    if(error.status === 404){
      return {message:"Not Found"}
    }
    if(error.status === 400){
      return {message:"Bad Input"}
    }
    return {message: "error"}
  }
}
