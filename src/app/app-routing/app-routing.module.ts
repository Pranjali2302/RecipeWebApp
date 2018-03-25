
import { NewRecipeComponent } from './../components/new-recipe/new-recipe.component';
import { RecipeDetailsComponent } from './../components/recipe-details/recipe-details.component';
import { RecipeComponent } from './../components/recipe/recipe.component';
import { PlaceholderComponent } from './../components/placeholder/placeholder.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { RecipesComponent } from './../components/recipes/recipes.component';
import { ShoppingListComponent } from './../components/shopping-list/shopping-list.component';
import { EditRecipeComponent } from './../components/edit-recipe/edit-recipe.component';

const appRoutes : Routes = [
  { 
    path : 'recipes', 
    component : RecipesComponent,
    children : [
      {path : '', component : PlaceholderComponent},
      {path : 'new', component : NewRecipeComponent},
      {path : ':id', component : RecipeDetailsComponent},
      {path : ':id/edit', component : EditRecipeComponent}
      ]
  },
  { path : 'shoppingList', component : ShoppingListComponent},
  { path :'', redirectTo:'/recipes',pathMatch:'full'},
  { path : '**', redirectTo:'/recipes',pathMatch:'full'},
];

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
