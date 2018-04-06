import { Observable } from 'rxjs/observable';
import { ComponentCanDeactivate } from './../../interfaces/component-can-deactivate';
import { Recipe } from './../../interfaces/recipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../../services/recipe-service/recipe-service.service';
import { FormGroup ,FormArray , FormControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit,ComponentCanDeactivate {
  recipes : Recipe[] = [];
  recipeDetails : Recipe ;
  editRecipeForm:FormGroup;
  constructor(private RecipeService : RecipeServiceService,
              private routeParam : ActivatedRoute) { }
  
  ngOnInit() {
    this.recipes = JSON.parse(localStorage.getItem('recipes'));
    this.routeParam.params.subscribe((param)=>{
      this.recipeDetails = this.RecipeService.getRecipeById(+param.id,this.recipes)
      console.log("edit recipe data",this.recipeDetails)
    })

    this.editRecipeForm = new FormGroup({
      name : new FormControl(this.recipeDetails.name,[Validators.required , Validators.minLength(4)]),
      imagePath: new FormControl(this.recipeDetails.imagePath,[Validators.required ]),
      description: new FormControl(this.recipeDetails.description,[Validators.required ]),
      ingredients: new FormArray([
      ])
    });
    this.setIngredients()
  }

  setIngredients(){
    let control = <FormArray>this.editRecipeForm.controls.ingredients;
    this.recipeDetails.ingredients.forEach(x => {
      control.push(new FormGroup({
        name : new FormControl(x.name,[Validators.required ]),
        quantity : new FormControl(x.quantity,[Validators.required ])
        }))
    })
  }

  initIngredients(){
      return new FormGroup({
        name : new FormControl('',[Validators.required ]),
        quantity : new FormControl('',[Validators.required ])
      })
  }
  
  addIngredients(){
    const control =<FormArray>(this.editRecipeForm.controls['ingredients']);
    control.push(this.initIngredients());
  }
  
  removeIngredients(i){
    const control =<FormArray>(this.editRecipeForm.controls['ingredients']);
    control.removeAt(i);
  }

  saveRecipe(){
      console.log(' this.newRecipeForm',  this.editRecipeForm.value);
  }
  
  cancle(){
    this.editRecipeForm.reset();
  }

  canDeactivate(): boolean {
    return this.editRecipeForm.invalid;
  }

}
