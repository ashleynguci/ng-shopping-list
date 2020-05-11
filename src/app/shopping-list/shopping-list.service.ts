import { Ingredient } from '../recipes/share/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

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
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingres: Ingredient[]) {
        this.ingredients.push(...ingres);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}