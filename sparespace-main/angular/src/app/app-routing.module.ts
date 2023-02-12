import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  { path: 'searchResults', component: SearchResultsComponent },
  { path: '', component: SearchResultsComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'payment', component: PaymentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
