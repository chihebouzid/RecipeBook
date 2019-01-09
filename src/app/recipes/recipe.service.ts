import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Italien Pasta",
      "This is the first recipe that i made",
      "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      [new Ingredient("Pasta", 2), new Ingredient("Tomatos", 5)]
    ),
    new Recipe(
      "Chicken Wings",
      "im just testing if the ngFor is working",
      "https://www.gleesonbutchers.ie/wp-content/uploads/2017/08/Chicken-Pieces-BBQ.jpg",
      [new Ingredient("Chicken", 2), new Ingredient("Potatos", 3)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
