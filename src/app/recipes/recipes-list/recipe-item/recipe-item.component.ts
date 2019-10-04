import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../recipes/recipe.modele';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})

export class RecipeItemComponent implements OnInit {
  isOpen = false;

  @Output() selectRecipe = new EventEmitter<void>();

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.selectRecipe.emit();
  }

}