import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ExpenseService } from './services/expense.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { CategoryService } from './services/category.service';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoryComponent } from './components/category/category.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    ExpenseFormComponent,
    CategoryFormComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ExpenseService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
