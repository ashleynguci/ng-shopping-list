import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {

    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://ng-recipe-list-8c403.firebaseio.com/recipes.json', recipes)
            .subscribe(res => console.log(res))
    }

    fetchRecipes() {
        this.http.get<Recipe[]>('https://ng-recipe-list-8c403.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }))
            .subscribe(res => this.recipeService.setRecipes(res))
            ;
    }
}