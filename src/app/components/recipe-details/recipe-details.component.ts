import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: any;
  constructor(
    public sharedService: SharedService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.autorun();
  }

  autorun(){
    this.initialisers();
  }

  initialisers(){
    this.getRecipeDatas();
  }

  getRecipeDatas(){
    this.recipe = JSON.parse(localStorage.getItem('recipeDataSource') || '{}');
  }

  editRecipe(){
    
  }

  back(){
    this.router.navigateByUrl('/')
  }
}
