import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  // newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f2931bf15b4e42a6bf10791cd013cd01";
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f2931bf15b4e42a6bf10791cd013cd01";
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f2931bf15b4e42a6bf10791cd013cd01";
  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f2931bf15b4e42a6bf10791cd013cd01";
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f2931bf15b4e42a6bf10791cd013cd01";
  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=f2931bf15b4e42a6bf10791cd013cd01";
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f2931bf15b4e42a6bf10791cd013cd01";
  generalApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f2931bf15b4e42a6bf10791cd013cd01";
  

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }
  
  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentApiUrl);
  }
  
  healthNews():Observable<any>
  {
    return this._http.get(this.healthApiUrl);
  }
  
  scienceNews():Observable<any>
  {
    return this._http.get(this.scienceApiUrl);
  }
  
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  generalNews():Observable<any>
  {
    return this._http.get(this.generalApiUrl);
  }

}
