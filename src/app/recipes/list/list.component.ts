import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[];

  // Because now pass to parent component

  constructor(private recipeService: RecipeService,
    private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      console.log(recipes);
    })
    this.recipes = this.recipeService.getRecipes();

  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
