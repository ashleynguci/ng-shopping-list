import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Banh xeo", "a Vietnamese pancake ",
            "https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg"),
        new Recipe("Banh cuon", "a Vietnamese spring roll ", "https://www.hoidaubepaau.com/wp-content/uploads/2019/06/hoc-lam-banh-cuon-mo-quan.jpg"),
        new Recipe('Banh Mi', 'a Vietnamese sandwich',
            'https://embed.widencdn.net/img/beef/azampe1im6/1120x840px/slow-cooked-gochujang-banh-mi-with-whipped-beef-liver-pate-and-pickled-vegetables-horizontal.tif?keep=c&u=7fueml')];

    getRecipes() {
        return this.recipes.slice();
    }
}