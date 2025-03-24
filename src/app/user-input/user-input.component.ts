import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 
  enteredInitialInvestment = signal('0');
  enteredAnnualInterest = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) { }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredAnnualInterest(), 
      annualInvestment: +this.enteredAnnualInterest(), 
      expectedReturn: +this.enteredExpectedReturn(), 
      duration: +this.enteredDuration()
    });
    
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInterest.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
