import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/Http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipies() {
        const token = this.authService.getToken();
        return this.http.put("https://recipe-book-ece7f.firebaseio.com/recipes.json?auth=" + token, this.recipeService.getRecipes());
    }

    getRecipies() {
        const token = this.authService.getToken();
        this.http.get("https://recipe-book-ece7f.firebaseio.com/recipes.json?auth=" + token)
            .pipe(map(
                (response: Response) => {
                    const recipies: Recipe[] = response.json();
                    for (let recipe of recipies) {
                        if (!recipies['ingredients']) {
                            console.log(recipe);
                            recipies['ingredients'] = []
                        }
                    }
                    return recipies;
                }
            ))
            .subscribe(
                (recipies: Recipe[]) => {
                    this.recipeService.setRecipes(recipies);
                }
            );
    }
}