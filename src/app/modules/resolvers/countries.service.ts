import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CountryModel } from "./country.model";
import { delay } from 'rxjs/operators';



@Injectable({
  providedIn: "root"
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<CountryModel[]>("http://restcountries.eu/rest/v2/").pipe(delay(4000));
  }
}
