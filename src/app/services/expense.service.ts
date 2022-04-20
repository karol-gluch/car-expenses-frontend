import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/Expense';
import { environment } from 'src/environments/environment';
import { ExpenseDto } from '../models/ExpenseDto';

@Injectable()
export class ExpenseService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(environment.baseURL + 'api/v1/expenses');
  }

  public save(expense: ExpenseDto) {
    return this.http.post<ExpenseDto>(environment.baseURL + 'api/v1/expenses/save', expense);
  }

  public delete(expenseId: number) {
    return this.http.delete(environment.baseURL + 'api/v1/expenses/delete/' + expenseId);
  }
}
