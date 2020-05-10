import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe("Banh xeo", "a Vietnamese pancake ", "https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg"), new Recipe("Banh cuon", "a Vietnamese spring roll ", "https://www.hoidaubepaau.com/wp-content/uploads/2019/06/hoc-lam-banh-cuon-mo-quan.jpg")];

  @Output() recipeChoosen = new EventEmitter<Recipe>();
  // Because now pass to parent component
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeChoosen.emit(recipe);
  }
}
