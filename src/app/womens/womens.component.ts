import { Component,OnInit } from '@angular/core';
import { IWomens } from './IWomens';
import { WomensService } from './womens.service';


@Component({
 
  templateUrl: './womens.component.html',
    styleUrls:['./womens.component.css']
})


export class WomensComponent implements OnInit{

    pageTitle: string = 'Womens Collection';
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
        this.filteredWomens = this.listFilter ? this.performFilter(this.listFilter) : this.womensproducts;
      }
      
      filteredWomens : IWomens[] =[];

    womensproducts : IWomens[] =[];

    constructor(private womensService:WomensService){
       
        this.listFilter= 'dress';
    }

    onRatingClicked (message: string) :void{
        this.pageTitle ='Product List '+ message;
    }

    performFilter(filterBy: string) : IWomens[] {
 
        filterBy= filterBy.toLocaleLowerCase();
        return this.womensproducts.filter((womensproducts: IWomens) =>
                    womensproducts.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }


 toggleImage (): void{
     this.showImage = !this.showImage;

 }
  
 ngOnInit(): void{
    this.womensService.getItems(). subscribe({
      next: womensproducts => {
        this.womensproducts = womensproducts,
        this.filteredWomens = this.womensproducts;
      },
      error: err => {this.errorMessage = err}
    });
    
  }
}
