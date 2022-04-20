import { Component, OnInit, ViewChild } from '@angular/core';
import { Expense } from 'src/app/models/Expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[];

  @ViewChild(ExpenseFormComponent) expenseFormComponent: ExpenseFormComponent;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.findAll().subscribe(data => {
      this.expenses = data;
    })
  }

  public onNewExpense() {
    this.expenseService.findAll().subscribe(data => {
      this.expenses = data;
    })
  }

  public onNewCategory() {
    this.expenseFormComponent.getCategories();
  }
}
