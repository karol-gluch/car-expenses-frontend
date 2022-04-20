import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/Category';
import { Expense } from 'src/app/models/Expense';
import { ExpenseDto } from 'src/app/models/ExpenseDto';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { formatDate } from '@angular/common';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  expense: ExpenseDto = new ExpenseDto();
  categories: Category[];
  dateHelper: NgbDateStruct;

  @Output() newExpense = new EventEmitter<Expense>();

  constructor(private modalService: NgbModal,
              private expenseService: ExpenseService,
              private categoryService: CategoryService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.setEmptyExpenseVariables();
    this.getCategories();
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  public addExpense() {
    this.expense.actualDate = this.getDate();
    this.expenseService.save(this.expense).subscribe(() => {
      this.newExpense.emit();
      this.setEmptyExpenseVariables();
      this.toastr.success('Dodano nowy wpis');
    }, () => {
      this.toastr.error('Dodawanie nowego wpisu nie powiodło się');
    })
  }

  public getCategories() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    })
  }

  public setEmptyExpenseVariables() {
    this.expense.cost = 0;
    this.expense.name = '';
    this.expense.place = '';
    let now = new Date();
    this.dateHelper = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  public getDate() {
    let month = this.dateHelper.month > 9 ? this.dateHelper.month : '0' + this.dateHelper.month;
    let day = this.dateHelper.day > 9 ? this.dateHelper.day : '0' + this.dateHelper.day;
    return this.dateHelper.year + '-' + month + '-' + day;
  }
}
