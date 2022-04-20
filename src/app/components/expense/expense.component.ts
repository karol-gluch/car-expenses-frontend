import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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
  idToDelete: number;

  @ViewChild(ExpenseFormComponent) expenseFormComponent: ExpenseFormComponent;

  constructor(private expenseService: ExpenseService,
              private toastr: ToastrService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.findAllExpenses();
  }

  public findAllExpenses() {
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

  public deleteExpense() {
    this.expenseService.delete(this.idToDelete).subscribe(() => {
      this.findAllExpenses();
      this.toastr.success('Wpis został usunięty');
    });
  }

  open(content: any, id: number) {
    this.idToDelete = id;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
