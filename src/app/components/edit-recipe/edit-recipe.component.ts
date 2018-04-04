import { Recipe } from './../../interfaces/recipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../../services/recipe-service/recipe-service.service';
import { FormGroup ,FormArray , FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
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
      name : new FormControl(this.recipeDetails.name),
      imagePath: new FormControl(this.recipeDetails.imagePath),
      description: new FormControl(this.recipeDetails.description),
      ingredients: new FormArray([
      ])
    });
    this.setIngredients()
  }

  setIngredients(){
    let control = <FormArray>this.editRecipeForm.controls.ingredients;
    this.recipeDetails.ingredients.forEach(x => {
      control.push(new FormGroup({
        name : new FormControl(x.name),
        quantity : new FormControl(x.quantity)
        }))
    })
  }

  initIngredients(){
      return new FormGroup({
        name : new FormControl(''),
        quantity : new FormControl('')
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
}
