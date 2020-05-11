import { Ingredient } from '../recipes/share/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    startedEditing = new Subject<number>();
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("egg", 5),
        new Ingredient("white powder", 2),
        new Ingredient("milk", 3)];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingre: Ingredient) {
        this.ingredients.push(ingre);
        // Just add into the copy of ingredients array
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingres: Ingredient[]) {
        this.ingredients.push(...ingres);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    updateIngredients(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}