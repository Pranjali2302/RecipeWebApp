import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormArray, FormControl,FormBuilder } from '@angular/forms';

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
            name:new FormControl(),
            imagePath: new FormControl(),
            description: new FormControl(),
            ingredients: new FormArray([])
        });
    }

    initIngredients() {
        return new FormGroup({
            name:new FormControl(''),
            quantity:new FormControl('')
        });
    }

    addIngredients() {
        const control = <FormArray>this.newRecipeForm.controls['ingredients'];
        control.push(this.initIngredients());
    }

    removeIngredients(i: number) {
        const control = <FormArray>this.newRecipeForm.controls['ingredients'];
        control.removeAt(i);
    }
    submit(){
        
      console.log(' this.newRecipeForm',  this.newRecipeForm.value);
    }

    delete(ingredient){
      console.log("ingredient",ingredient)
    }
}