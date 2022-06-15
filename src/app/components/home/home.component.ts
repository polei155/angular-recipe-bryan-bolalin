import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import {MatDialog} from '@angular/material/dialog';
import { RecipeDialogComponent } from 'src/app/shared/recipe-dialog/recipe-dialog.component';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipes: any;
  specials: any;
  constructor(
    private recipeService: RecipeService,
    public dialog: MatDialog,
    public router: Router,
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.autorun();
  }

  autorun(){
    this.initialisers();
    this.listeners();
  }

  listeners(){ }

  initialisers(){
    this.getRecipes();
    this.getSpecials();
  }

  getRecipes(){
    this.recipeService.getRecipe().subscribe((res) => {
      this.recipes = res;

    })
  }

  getSpecials(){
    this.recipeService.getSpecials().subscribe((res) => {
      this.specials = res;
    })
  }

  seeRecipe(recipe: any, isSuccess: boolean){
    let ingredientMatchedID = this.specials.find((element: any) => {
      return recipe.ingredients[0].uuid === element.ingredientId 

    })
    recipe["specials"] = ingredientMatchedID;

    let compiledData = {recipeDatas: recipe, isSuccess: isSuccess}

    this.router.navigateByUrl('/recipe-details')
    localStorage.setItem('recipeDataSource', JSON.stringify(compiledData));
  }

  addRecipe(){
    const dialog = this.dialog.open(AddRecipeComponent);

    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
