import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {IWomens} from '../womens/IWomens';
import {AccService} from './acc.service';

@Component({
 
  templateUrl: './acc-details.component.html',
  styleUrls: ['./acc-details.component.css']
})
export class AccDetailsComponent implements OnInit {

  PageTitle: string='Product  ';
  errorMessage = '';
  accproducts: IWomens;
  
 constructor(
             private route: ActivatedRoute,
             private router:Router,
             private accService: AccService
 ) { }

 ngOnInit(): void {

   const param = this.route.snapshot.paramMap.get('id');
   if (param) {
     let id = +param;
     this.getItem(id);
   }
 }

 getItem(id: number ) {
   this.accService.getItem(id).subscribe({
     next:  accproducts => this.accproducts = accproducts,
     error: err => this.errorMessage = err
   });
 
   
 }

 onBack(): void{
   this.router.navigate(['/acc']);
 }
}
