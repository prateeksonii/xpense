import { Component, OnInit } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { forkJoin } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  expenses: any[] = [];
  debits: any[] = [];
  credits: any[] = [];
  categories: any[] = [];
  balance = 0;

  constructor(
    private expenseService: ExpenseService,
    private categoryService: CategoryService
  ) {}

  handleChange(event: MatChipListboxChange) {
    this.getData(event.value);
  }

  async ngOnInit() {
    this.categoryService.get().then(
      (categories) =>
        (this.categories = categories.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })))
    );
    this.getData();
  }

  getData(categories?: string[]) {
    this.expenseService.getExpenses(categories).then((expenses) => {
      this.expenses = expenses.docs.map((doc) => doc.data());
      this.debits = this.expenses.filter((expense) => expense.type === 'debit');
      this.credits = this.expenses.filter(
        (expense) => expense.type === 'credit'
      );
      this.balance = this.expenses.reduce((sum, curr) => {
        if (curr.type === 'debit') return sum - curr.amount;
        return sum + curr.amount;
      }, 0);
    });
  }
}
