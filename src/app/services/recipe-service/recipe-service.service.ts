import { Recipe } from './../../interfaces/recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class RecipeServiceService {
 recipeList : Recipe[]= [];
 cartData : Recipe[]=[];
 private recipeUrl = 'http://localhost:4200/assets/recipes.json';
  constructor(private _http : HttpClient) { 
  
  }
  getAllRecipes(): Observable<Recipe[]>{
    return this._http.get<Recipe[]>(this.recipeUrl);
  }
  getRecipeById(id,data){
    return data.filter(recipe =>{
      return recipe.id === id
    })[0];
  }
  
  addNewRecipe(data){
    this.recipeList = JSON.parse(localStorage.getItem('recipes'));
    return this.recipeList.push(data);
  }

  getDatafrmShoppingList(){
    return this.cartData;
  }

  setDataTOShoppingList(data){
    this.cartData=data;
  }
}