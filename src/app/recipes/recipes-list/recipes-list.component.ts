import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modele';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  @Output() selectRecipe = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test', 'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg'),
    new Recipe('A test recipe2', 'Test2', 'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  isOpen(recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }
}
