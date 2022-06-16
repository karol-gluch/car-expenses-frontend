import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ExpenseComponent} from "./components/expense/expense.component";
import {CategoryComponent} from "./components/category/category.component";

const routes: Routes = [
  {path: '', component: ExpenseComponent},
  {path: 'expense', component: ExpenseComponent},
  {path: 'category', component: CategoryComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
