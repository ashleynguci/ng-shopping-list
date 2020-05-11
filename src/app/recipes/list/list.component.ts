import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[];

  @Output() recipeChoosen = new EventEmitter<Recipe>();
  // Because now pass to parent component

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeChoosen.emit(recipe);
  }
}
