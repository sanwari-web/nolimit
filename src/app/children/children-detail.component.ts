import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {IWomens} from '../womens/IWomens';
import {ChildrenService} from './children.service';

@Component({
  
  templateUrl: './children-detail.component.html',
  styleUrls: ['./children-detail.component.css']
})
export class ChildrenDetailComponent implements OnInit {

  PageTitle: string='Product  ';
  errorMessage = '';
  childrenproducts: IWomens;
  
 constructor(
             private route: ActivatedRoute,
             private router:Router,
             private childrenService: ChildrenService
 ) { }

 ngOnInit(): void {

   const param = this.route.snapshot.paramMap.get('id');
   if (param) {
     let id = +param;
     this.getItem(id);
   }
 }

 getItem(id: number ) {
   this.childrenService.getItem(id).subscribe({
     next:  childrenproducts => this.childrenproducts = childrenproducts,
     error: err => this.errorMessage = err
   });
 
   
 }

 onBack(): void{
   this.router.navigate(['/children']);
 }

}
