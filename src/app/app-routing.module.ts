import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./product/create/create.component";
import {ShowComponent} from "./product/show/show.component";
import {EditComponent} from "./product/edit/edit.component";
import {DeleteComponent} from "./product/delete/delete.component";

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'show', component: ShowComponent},
  { path: '', component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
