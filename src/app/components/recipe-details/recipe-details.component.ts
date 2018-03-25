import { Recipe } from './../../interfaces/recipe';
import { RecipeServiceService } from './../../services/recipe-service/recipe-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails:Recipe;
  recipes:Recipe[]=[];
  constructor(
    private RecipeServiceService:RecipeServiceService,
    private routeParam:ActivatedRoute,
    private router : Router) { 

  }

  ngOnInit() {
    this.recipes = JSON.parse(localStorage.getItem('recipes'));
    this.routeParam.params.subscribe((param)=>{
      this.recipeDetails = this.RecipeServiceService.getRecipeById(+param.id,this.recipes)
      console.log(this.recipeDetails)
        
    })
    
  }
  toShoppingList(){
    this.router.navigate(['/shoppingList']);
    this.RecipeServiceService.setDataTOShoppingList(this.recipeDetails);
  }
  deleteRecipe(){

  }

}
