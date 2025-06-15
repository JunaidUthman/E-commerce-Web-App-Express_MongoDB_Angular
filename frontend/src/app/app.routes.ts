import { Routes } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import { HelpComponent } from './help/help.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : 'SignUp' , component: SignUpComponent},
    {path : 'Login' , component: LoginComponent},
    {path : 'Help' , component : HelpComponent},
    {path : 'Card' , component : CardComponent},
    {path : 'Home' , component : HomeComponent},
    {path : 'Signup' , component: SignUpComponent},
    {path : '*' , redirectTo: 'Home', pathMatch: 'full'},
    {path : '' , redirectTo: 'Home', pathMatch: 'full'}
];
