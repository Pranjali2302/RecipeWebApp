import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
newRecipeForm:FormGroup;
  constructor() { }
  
  ngOnInit() {

    this.newRecipeForm = new FormGroup({
      name : new FormControl(),
      imagePath: new FormControl(),
      description: new FormControl(),
      ingredients: new FormArray([])
    })
  }
submit(){
  console.log(' this.newRecipeForm',  this.newRecipeForm);
}
addIngredients(){
  (<FormArray>this.newRecipeForm.get('ingredients')).push(new FormControl(''));
}
delete(ingredient){
  console.log("ingredient",ingredient)
}
}