import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './product/show/show.component';
import { CreateComponent } from './product/create/create.component';
import {ProductService} from "./service/product.service";
import {FormsModule} from "@angular/forms";
import { EditComponent } from './product/edit/edit.component';
import { DeleteComponent } from './product/delete/delete.component';
import { DetailComponent } from './product/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
