import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  ingredient:Ingredient[] = [
    new Ingredient('Beef',5),
    new Ingredient('Vegetable',10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
