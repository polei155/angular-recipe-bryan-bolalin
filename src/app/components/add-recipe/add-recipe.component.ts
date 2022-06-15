import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  public recipeForm: FormGroup;
  measurements = ['Cup', 'Spoon']
  constructor(
    private formBuilder: FormBuilder,
    public recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.autorun();
  }

  autorun(){
    this.initialisers();
  }

  initialisers(){
    this.initForm()
  }

  initForm(){
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      cookTime: ['', Validators.required],
      description: ['', Validators.required],
      prepTime: ['', Validators.required],
      servings: ['', Validators.required],
      postDate: [new Date().toLocaleString()],
      editDate: [new Date().toLocaleString()],
      directions: this.formBuilder.array([]),
      ingredients: this.formBuilder.array([
        this.formBuilder.group({
          'name': ['', Validators.required],
          'measurement': ['', Validators.required],
          'amount': new FormControl('', Validators.required),
        })
      ])
    });
  }

  createIngredientArray() {
    const ingredientArr = new FormGroup({
      name: new FormControl('', Validators.required),
      measurement: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });

    this.ingredientControl.push(ingredientArr)
  }

  createDirectionsArray() {
    const directionsArr = this.formBuilder.group({
      'instructions': ['', Validators.required],
      'optional': [''],
    });

    this.directionsControl.push(directionsArr)
  }

  remove(i: number, type: string){
    if(i !== 0){
      if(type === 'ingredient'){
        this.ingredientControl.removeAt(i)
      } else {
        this.directionsControl.removeAt(i)
      }
    }
  }

  onsubmit(formValues: any){
    let payload = formValues;
    console.error('formValues',formValues)
    // this.recipeService.postRecipe(payload).subscribe((res) => {
    //   this.resetForm();
    // })
  }

  resetForm(){
    this.recipeForm.reset();
    const ingredientsArr = <FormArray>this.recipeForm.controls.ingredients; 
    const directionsArr = <FormArray>this.recipeForm.controls.directions; 

    ingredientsArr.controls = [];
    directionsArr.controls = [];
  }

  get ingredientControl(){
    return this.recipeForm.controls["ingredients"] as FormArray
  }
  get directionsControl(){
    return this.recipeForm.controls["directions"] as FormArray
  }

}
