import { Recipe } from './../../interfaces/recipe';
import { RecipeServiceService } from './../../services/recipe-service/recipe-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes :Recipe[]=[];
  constructor(private recipeService :RecipeServiceService) { }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(
      (recipes)=>{
        this.recipes = recipes;
        localStorage.setItem('recipes',JSON.stringify(this.recipes));
      });
  }

}
