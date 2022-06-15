import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss']
})
export class RecipeDialogComponent implements OnInit {

  recipe: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
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
    this.initDataFromModal();
  }

  initDataFromModal(){
    this.recipe = this.data;
  }


}
