import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryModel } from '../country.model';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-resolvers',
  templateUrl: './resolvers.component.html',
  styles: [``]
})
export class ResolversComponent implements OnInit {

  countries: CountryModel[];

  constructor(private activatedRoute: ActivatedRoute,
              private countriesService: CountriesService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.countries = data.countries;
    })

    // TODO remove the resolver from resolvers-routing.module.ts
    // this.countriesService.getCountries().subscribe(data => {
    //   this.countries = data;
    // })
  }

}
