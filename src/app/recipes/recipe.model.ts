import { Ingredient } from './share/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imageUrl: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imageUrl: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients
    }
}