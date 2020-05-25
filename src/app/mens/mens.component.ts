import { Component, OnInit } from '@angular/core';
import {IWomens} from '../womens/IWomens';
import {MensService} from './mens.service';

@Component({
  
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  pageTitle: string = 'Mens Collection';
    imageWidth : number = 50;
    imageMargin: number = 2;
    showImage: boolean= false;

    errorMessage: string;
    
    _listFilter: string;
  
    

    get listFilter(): string{
        return this._listFilter;
      }
      
      set listFilter(value:string){
        this._listFilter= value;
        this.filteredMens = this.listFilter ? this.performFilter(this.listFilter) : this.mensproducts;
      }
      
      filteredMens : IWomens[] =[];

    mensproducts : IWomens[] =[];

    constructor(private mensService:MensService){
       
        this.listFilter= 'dress';
    }

    onRatingClicked (message: string) :void{
        this.pageTitle ='Product List '+ message;
    }

    performFilter(filterBy: string) : IWomens[] {
 
        filterBy= filterBy.toLocaleLowerCase();
        return this.mensproducts.filter((mensproducts: IWomens) =>
                    mensproducts.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }


 toggleImage (): void{
     this.showImage = !this.showImage;

 }
  
 ngOnInit(): void{
    this.mensService.getItems(). subscribe({
      next: mensproducts => {
        this.mensproducts = mensproducts,
        this.filteredMens = this.mensproducts;
      },
      error: err => {this.errorMessage = err}
    });
    
  }

}
