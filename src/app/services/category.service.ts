import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }


  public findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseURL + 'api/v1/categories');
  }

  public save(category: Category) {
    return this.http.post<Category>(environment.baseURL + 'api/v1/categories/save', category);
  }

  public delete(expenseId: number) {
    return this.http.delete(environment.baseURL + 'api/v1/categories/delete/' + expenseId);
  }
}
