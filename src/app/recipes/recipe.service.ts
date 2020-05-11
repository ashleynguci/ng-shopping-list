import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [new Recipe("Banh xeo", "a Vietnamese pancake ", "https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg"), new Recipe("Banh cuon", "a Vietnamese spring roll ", "https://www.hoidaubepaau.com/wp-content/uploads/2019/06/hoc-lam-banh-cuon-mo-quan.jpg"), new Recipe('Banh Mi', 'a Vietnamese sandwich', 'https://media-cdn.tripadvisor.com/media/photo-s/19/66/94/c1/banh-mi-362.jpg')];

    getRecipes() {
        return this.recipes.slice();
    }
}