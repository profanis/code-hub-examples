import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryModel } from '../country.model';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-resolvers',
  templateUrl: './resolvers.component.html',
  styleUrls: ['./resolvers.component.scss']
})
export class ResolversComponent implements OnInit {

  countries: CountryModel[];

  constructor(private activatedRoute: ActivatedRoute,
              private countriesService: CountriesService) { }

  ngOnInit() {
    // TODO Register the resolver in resolvers-routing.module.ts
    // this.activatedRoute.data.subscribe(data => {
    //   this.countries = data.countries;
    // })

    this.countriesService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

}
