import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/share/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient("egg", 5), new Ingredient("white powder", 2)];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
