import { Component, OnInit } from '@angular/core';
import {IWomens} from '../womens/IWomens';
import {AccService} from './acc.service';

@Component({

  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent implements OnInit {

  pageTitle: string = 'Accessories Collection';
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
      this.filteredAcc = this.listFilter ? this.performFilter(this.listFilter) : this.accproducts;
    }
    
    filteredAcc : IWomens[] =[];

  accproducts : IWomens[] =[];

  constructor(private accService:AccService){
     
      this.listFilter= 'dress';
  }

  onRatingClicked (message: string) :void{
      this.pageTitle ='Product List '+ message;
  }

  performFilter(filterBy: string) : IWomens[] {

      filterBy= filterBy.toLocaleLowerCase();
      return this.accproducts.filter((accproducts: IWomens) =>
                  accproducts.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


toggleImage (): void{
   this.showImage = !this.showImage;

}

ngOnInit(): void{
  this.accService.getItems(). subscribe({
    next: accproducts => {
      this.accproducts = accproducts,
      this.filteredAcc = this.accproducts;
    },
    error: err => {this.errorMessage = err}
  });
  
}

}
