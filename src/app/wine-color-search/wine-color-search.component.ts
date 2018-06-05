import { CategoryStoreService } from './../shared/category-store.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../shared/category';

@Component({
  selector: 'winedb-wine-color-search',
  templateUrl: './wine-color-search.component.html',
})
export class WineColorSearchComponent implements OnInit {
  colorMap = new Map<string, Array<Category>>();
  colorsChecked = new Map<string, boolean>();
  colors: string[] = [];
  @Output() selectedCategories = new EventEmitter<Category[]>();

  constructor(private categoryStore: CategoryStoreService) { }

  ngOnInit() {
    this.categoryStore.getAll().subscribe(categories => {
      categories.forEach(category => {
        let categoriesOfColor = this.colorMap.get(category.color);
        if (!categoriesOfColor) {
          categoriesOfColor = [];
          this.colorMap.set(category.color, categoriesOfColor);
          this.colors.push(category.color);
          this.colorsChecked.set(category.color, false);
        }
        categoriesOfColor.push(category);
      });
    });
  }

  onColorSelected(event: any): void {
    const color = event.target.value;
    this.colorsChecked.set(color, event.target.checked);

    const selectedCategories = [];
    this.colorsChecked.forEach((checked: boolean, key: string) => {
      if (checked) {
        selectedCategories.push(...this.colorMap.get(key));
      }
    });
    this.selectedCategories.emit(selectedCategories);
  }
}
