import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

import {IWomens} from '../womens/IWomens';
import {MensService} from './mens.service';

@Component({
  templateUrl: './mens-detail.component.html',
  styleUrls: ['./mens-detail.component.css']
})
export class MensDetailComponent implements OnInit {

  PageTitle: string='Product  ';
   errorMessage = '';
   mensproducts: IWomens;
   
  constructor(
              private route: ActivatedRoute,
              private router:Router,
              private mensService: MensService
  ) { }

  ngOnInit(): void {

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      let id = +param;
      this.getItem(id);
    }
  }

  getItem(id: number ) {
    this.mensService.getItem(id).subscribe({
      next:  mensproducts => this.mensproducts = mensproducts,
      error: err => this.errorMessage = err
    });
  
    
  }

  onBack(): void{
    this.router.navigate(['/mens']);
  }

}
