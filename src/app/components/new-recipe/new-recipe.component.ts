import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormArray, FormControl,FormBuilder ,Validators} from '@angular/forms';

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
            name:new FormControl('',[Validators.required,Validators.minLength(4)]),
            imagePath: new FormControl('',[Validators.required]),
            description: new FormControl('',[Validators.required]),
            ingredients: new FormArray([])
        });
    }

    initIngredients() {
        return new FormGroup({
            name:new FormControl('',[Validators.required]),
            quantity:new FormControl('',[Validators.required])
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
    cancle(){
        this.newRecipeForm.reset();
    }

    delete(ingredient){
      console.log("ingredient",ingredient)
    }
}