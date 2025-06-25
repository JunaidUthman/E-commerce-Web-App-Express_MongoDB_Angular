import { Routes } from '@angular/router';
import {SignUpComponent} from './layouts/client/sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import { HelpComponent } from './layouts/client/help/help.component';
import { CardComponent } from './layouts/client/card/card.component';
import { HomeComponent } from './layouts/client/home/home.component';
import { ClientLayoutComponent } from './layouts/client/client-layout/client-layout.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout/admin-layout.component';
import {DashboardComponent} from './layouts/admin/dashboard/dashboard.component';

import { ProductsComponent } from './layouts/admin/products/products.component';
import { ClientsComponent } from './layouts/admin/clients/clients.component';
import { OrdersComponent } from './layouts/admin/orders/orders.component';

export const routes: Routes = [
    
    {
        path: '',
        component: ClientLayoutComponent,
        children: [
            { path: 'SignUp', component: SignUpComponent },
            { path: 'Login', component: LoginComponent },
            { path: 'Help', component: HelpComponent },
            { path: 'Card', component: CardComponent },
            { path: 'Home', component: HomeComponent },
            { path: 'Signup', component: SignUpComponent },
            { path: '', redirectTo: 'Home', pathMatch: 'full' }
        ]
    },
    {
        path: 'Admin',
        component: AdminLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'clients', component: ClientsComponent },
            { path: 'orders', component: OrdersComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            
        ]
    },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    
];
