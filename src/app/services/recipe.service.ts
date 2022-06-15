import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RecipeModel } from '../models/recipe-model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  getRecipe(){
    return this.http.get(environment.apiBaseUrl+'/recipes')
  }
  getSpecials(){
    let res = this.http.get(environment.apiBaseUrl+'/specials');
    return res;
  }

  postRecipe(data: RecipeModel){
    // let datas = {
    //   'uuid': String,
    //   'title': String,
    //   'description': String,
    //   'servings': Number,
    //   'prepTime': Number,
    //   'cookTime': Number,
    //   'postDate': Date,
    //   'editDate': Date,
    //   'ingredients': {
    //     'Ingredient': {
    //       'uuid': String,
    //       'amount': Number,
    //       'measurement': String,
    //       'name': String,
    //     }
    //   },
    //   'directions': {
    //     'Direction': {
    //       'instructions': String,
    //       'optional': Boolean,
    //     }
    //   }
    // }

    return this.http.post(environment.apiBaseUrl+'/recipes', data)
  }
}
