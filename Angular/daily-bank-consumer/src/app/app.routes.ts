import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { RegisterForInternetBankingComponent } from './components/register-for-internet-banking/register-for-internet-banking.component';
import { LoginComponent } from './components/login/login.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CreditComponent } from './components/credit/credit.component';
import { DebitComponent } from './components/debit/debit.component';
import { NeftTransactionComponent } from './components/neft-transaction/neft-transaction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPayeeComponent } from './components/add-payee/add-payee.component';
import { GetPayeesComponent } from './components/get-payees/get-payees.component';

export const routes: Routes = [
    
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'open',component:OpenAccountComponent},
    {path:'about',component:AboutusComponent},
    {path:'register',component:RegisterForInternetBankingComponent},
    {path: 'login', component: LoginComponent },
    {path:'set-new-password',component:SetNewPasswordComponent},
    {path:'logout',component:LogoutComponent},
    {path:'credit',component:CreditComponent},
    {path:'debit',component:DebitComponent},
    {path:'neft',component:NeftTransactionComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'add-payee',component:AddPayeeComponent},
    {path:'get-payees',component:GetPayeesComponent}
];
