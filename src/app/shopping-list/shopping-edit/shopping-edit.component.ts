import { Component, OnInit, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/recipes/share/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
@ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;

@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient)
  }
}
