import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {IWomens} from './IWomens';
import {WomensService} from './womens.service';

@Component({
  
  templateUrl: './womensproduct-detail.component.html',
  styleUrls: ['./womensproduct-detail.component.css']
})
export class WomensproductDetailComponent implements OnInit {
   PageTitle: string='Product  ';
   errorMessage = '';
   womensproducts: IWomens;
   
  constructor(
              private route: ActivatedRoute,
              private router:Router,
              private womensService: WomensService
  ) { }

  ngOnInit(): void {

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      let id = +param;
      this.getItem(id);
    }
  }

  getItem(id: number ) {
    this.womensService.getItem(id).subscribe({
      next:  womensproducts => this.womensproducts = womensproducts,
      error: err => this.errorMessage = err
    });
  
    
  }

  onBack(): void{
    this.router.navigate(['/womens']);
  }
  }


