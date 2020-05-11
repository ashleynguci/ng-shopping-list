import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './share/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Banh xeo", "a Vietnamese pancake ",
            "https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg", [new Ingredient('Veggie', 3), new Ingredient('egg', 5), new Ingredient('Rice', 1)]),
        new Recipe("Banh cuon", "a Vietnamese spring roll ", "https://www.hoidaubepaau.com/wp-content/uploads/2019/06/hoc-lam-banh-cuon-mo-quan.jpg", [new Ingredient('Wheat', 4), new Ingredient('Rice', 1), new Ingredient('Rice', 1)]),
        new Recipe('Banh Mi', 'a Vietnamese sandwich',
            'https://embed.widencdn.net/img/beef/azampe1im6/1120x840px/slow-cooked-gochujang-banh-mi-with-whipped-beef-liver-pate-and-pickled-vegetables-horizontal.tif?keep=c&u=7fueml', [new Ingredient('Rice', 1), new Ingredient('Bread', 1), new Ingredient('Meat', 2)])];


    constructor(private shoppingListService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id]
    }

    addIngreToShoppingList(ingres: Ingredient[]) {
        this.shoppingListService.addIngredients(ingres)
    }
}