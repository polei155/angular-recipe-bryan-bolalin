import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private recipeDataSource: BehaviorSubject<[]> = new BehaviorSubject([]);
  currentRecipeDatas = this.recipeDataSource.asObservable();

  constructor() { }

  updateCurrentRecipes(dataObj: any){
    this.recipeDataSource.next(dataObj);
  }
}
