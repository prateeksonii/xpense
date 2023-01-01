import { Component, OnInit } from '@angular/core';
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
  balance = 0;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenseService.getExpenses().then((docs) => {
      this.expenses = docs.docs.map((doc) => doc.data());
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
