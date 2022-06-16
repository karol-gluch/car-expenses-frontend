import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ExpenseService} from "../../services/expense.service";
import {CategoryService} from "../../services/category.service";
import {ToastrService} from "ngx-toastr";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  idToDelete: number;

  constructor(private modalService: NgbModal,
              private categoryService: CategoryService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    })
  }

  public deleteCategoryById() {
    this.categoryService.delete(this.idToDelete).subscribe(() => {
      this.getCategories();
      this.toastr.success('Kategoria została usunięta');
    }, () => {
      this.toastr.error('Usunięcie nie powiodło się. Kategoria jest przypisana do wpisu związanego z wydatkiem');
    });
  }

  public onNewCategory() {
    this.getCategories();
  }

  open(content: any, id: number) {
    this.idToDelete = id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
