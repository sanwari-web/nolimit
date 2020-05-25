import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WomensComponent } from './womens/womens.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { WomensproductDetailComponent } from './womens/womensproduct-detail.component';
import { ChildrenComponent } from './children/children.component';
import { MensComponent } from './mens/mens.component';
import { AboutComponent } from './about/about.component';
import { MensDetailComponent } from './mens/mens-detail.component';
import { ChildrenDetailComponent } from './children/children-detail.component';
import { AccComponent } from './acc/acc.component';
import { AccDetailsComponent } from './acc/acc-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WomensComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WomensproductDetailComponent,
    ChildrenComponent,
    MensComponent,
    AboutComponent,
    MensDetailComponent,
    ChildrenDetailComponent,
    AccComponent,
    AccDetailsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'womens', component: WomensComponent},
      {path:'womens/:id', component: WomensproductDetailComponent},
      {path: 'mens', component: MensComponent},
      {path:'mens/:id',component:MensDetailComponent},
      {path:'children', component:ChildrenComponent},
      {path:'children/:id', component:ChildrenDetailComponent},
      {path:'acc', component:AccComponent},
      {path:'acc/:id' , component:AccDetailsComponent},
      {path:'about', component:AboutComponent},
      
      {path: 'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', redirectTo:'home', pathMatch:'full'}
    ]),
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
