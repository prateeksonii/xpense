import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  fb = new FormGroup({
    title: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.min(0.01)]),
    type: new FormControl('spent'),
  });

  constructor(private expenseService: ExpenseService, private router: Router) {}

  onSubmit() {
    if (this.fb.valid) {
      this.expenseService
        .addExpense(
          this.fb.get('title')!.value!,
          this.fb.get('amount')!.value!,
          this.fb.get('type')!.value!
        )
        .then((_) => this.router.navigate(['..']));
    }
  }
}
