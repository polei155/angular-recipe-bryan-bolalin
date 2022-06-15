import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  {  path: '', component: HomeComponent },
  {  path: 'recipe-details', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [HomeComponent, RecipeDetailsComponent, AddRecipeComponent]