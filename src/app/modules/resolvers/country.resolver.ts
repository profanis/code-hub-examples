import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { CountriesService } from "./countries.service";
import { CountryModel } from "./country.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountryResolver implements Resolve<any> {

  constructor(private countriesService: CountriesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryModel[]> {
    return this.countriesService.getCountries();
  }

}
