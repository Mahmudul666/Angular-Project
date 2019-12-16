import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recepi.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Beef','this is a new beef recipe','https://daridapur.com/wp-content/uploads/2017/08/1-600-x-400-2.jpg'),
    new Recipe('Curry','this is a new cutty recipe','https://www.panningtheglobe.com/wp-content/uploads/2015/08/srilanka-curry-seven-web.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
