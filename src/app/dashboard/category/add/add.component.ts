import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddCategoryComponent {
  fb = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private categoryService: CategoryService,
    private location: Location
  ) {}

  onSubmit() {
    if (this.fb.valid) {
      this.categoryService
        .create(this.fb.get('name')!.value!)
        .then((_) => this.location.back());
    }
  }
}
