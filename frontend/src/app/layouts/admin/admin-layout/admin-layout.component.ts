import { Component } from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {HeaderComponent} from '../../client/header/header.component';
import { FooterComponent } from '../../client/footer/footer.component';




@Component({
  selector: 'app-admin-layout',
  imports: [DashboardComponent , RouterOutlet , SidebarComponent , HeaderComponent , FooterComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
