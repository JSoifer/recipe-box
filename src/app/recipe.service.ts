import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private messageService: MessageService) { }

  getRecipes(title: string): Observable<Recipe[]> {
    this.messageService.add(`RecipeService: fetched recipe title=${title}`);
    return of(RECIPES.find(recipe => recipe.title === title));
  }
}
