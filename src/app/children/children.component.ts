import { Component, OnInit } from '@angular/core';
import {IWomens} from '../womens/IWomens';
import {ChildrenService} from './children.service';

@Component({
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
   
  pageTitle: string = 'Kids Collection';
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
      this.filteredChildren = this.listFilter ? this.performFilter(this.listFilter) : this.childrenproducts;
    }
    
    filteredChildren : IWomens[] =[];

  childrenproducts : IWomens[] =[];

  constructor(private childrenService:ChildrenService){
     
      this.listFilter= 'dress';
  }

  onRatingClicked (message: string) :void{
      this.pageTitle ='Product List '+ message;
  }

  performFilter(filterBy: string) : IWomens[] {

      filterBy= filterBy.toLocaleLowerCase();
      return this.childrenproducts.filter((childrenproducts: IWomens) =>
                  childrenproducts.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


toggleImage (): void{
   this.showImage = !this.showImage;

}

ngOnInit(): void{
  this.childrenService.getItems(). subscribe({
    next: childrenproducts => {
      this.childrenproducts = childrenproducts,
      this.filteredChildren = this.childrenproducts;
    },
    error: err => {this.errorMessage = err}
  });
  
}
}
