import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'Test Description', 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg'),
    new Recipe('Another Test', 'Another Test Description', 'http://www.centreisland.ca/images/Attachment5-resize.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
