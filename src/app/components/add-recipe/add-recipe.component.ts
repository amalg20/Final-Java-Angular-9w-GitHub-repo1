import { RecipeService } from './../../services/recipe.service';
import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent {
  recipe: Recipe = {
    title: '',
    instructions: '',

  };
  submitted = false;

  constructor(private recipeService: RecipeService) { }

  saveRecipe(): void {
    const data = {
      title: this.recipe.title,
      instructions: this.recipe.instructions
    };

    this.recipeService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = {
      title: '',
      instructions: '',
    };
  }
}

