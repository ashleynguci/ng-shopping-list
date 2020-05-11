import { Ingredient } from '../recipes/share/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("egg", 5),
        new Ingredient("white powder", 2),
        new Ingredient("milk", 3)];

    getIngredients() {
        return this.ingredients.slice();
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
}