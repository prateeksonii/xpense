import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { AddCategoryComponent } from '../category/add/add.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  fb = new FormGroup({
    title: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.min(0.01)]),
    type: new FormControl('debit'),
    category: new FormControl(''),
  });

  categories: (DocumentData & { id: string })[] = [];

  constructor(
    private expenseService: ExpenseService,
    private categoryService: CategoryService,
    private location: Location,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updateCategories();
  }

  updateCategories(): void {
    this.categoryService.get().then((categories) => {
      this.categories = categories.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCategoryComponent);

    dialogRef.afterClosed().subscribe((res) => {
      if (res.ok) {
        this.updateCategories();
      }
    });
  }

  onSubmit() {
    if (this.fb.valid) {
      this.expenseService
        .addExpense(
          this.fb.get('title')!.value!,
          this.fb.get('amount')!.value!,
          this.fb.get('type')!.value!,
          this.fb.get('category')!.value
        )
        .then((_) => this.location.back());
    }
  }
}
