import { Recipe } from './../../interfaces/recipe';
import { RecipeServiceService } from './../../services/recipe-service/recipe-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  cartData:Recipe[]=[];
  constructor(private RecipeService : RecipeServiceService) { }

  ngOnInit() {
  this.cartData = this.RecipeService.getDatafrmShoppingList();
  }

}
