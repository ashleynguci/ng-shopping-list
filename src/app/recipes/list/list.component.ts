import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[];

  // Because now pass to parent component

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
