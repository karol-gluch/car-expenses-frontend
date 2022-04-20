import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/Category';
import { Colors } from 'src/app/models/Colors';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  category: Category = new Category();
  colors = Colors;
  keys = Object.keys;

  @Output() newCategory = new EventEmitter<Category>();


  constructor(private modalService: NgbModal,
              private categoryService: CategoryService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.setEmptyCategoryVariables();
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  public addCategory() {
    this.categoryService.save(this.category).subscribe(() => {
      this.newCategory.emit(this.category);
      this.setEmptyCategoryVariables();
      this.toastr.success('Dodano nową kategorię');
    }, () => {
      this.toastr.error('Dodawanie nowej kategorii nie powiodło się');
    })
  }

  public setEmptyCategoryVariables() {
    this.category.name = '';
    this.category.color = this.colors.Blue;
  }
}
