import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ImageModule } from 'primeng/image';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgChartsModule } from 'ng2-charts';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NgImageSliderService } from 'ng-image-slider';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatIconModule } from '@angular/material/icon';
import { LogInComponent } from '../auth/log-in/log-in.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LogInComponent
  },
  {
    path:'sm-dashboard',
    loadChildren: () => import('./sm-dashboard/sm-dashboard.module').then(m=>m.SmDashboardModule)
  },
  {
    path:'schools',
    loadChildren: () => import('./schools/schools.module').then(m=>m.SchoolsModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'expense',
    loadChildren: () => import('./expense/expense.module').then(m=>m.ExpenseModule)
  },
  {
    path:'admin-user',
    loadChildren: () => import('./admin-user/admin-user.module').then(m=>m.AdminUserModule)
  },
  {
    path:'role',
    loadChildren: () => import('./role-permissions/role-permissions.module').then(m=>m.RolePermissionsModule)
  },
  { path: '**', pathMatch:'full',redirectTo:'sm-dashboard' },
];

@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    DropdownModule,
    FormsModule,
    InputSwitchModule,
    MatSortModule,
    ReactiveFormsModule,
    InputTextareaModule ,
    InputTextModule,
    PaginatorModule,
    ColorPickerModule,
    ImageModule,
    RadioButtonModule ,
    NgChartsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    NgImageSliderModule,
    MatIconModule
  ],
  providers:[NgImageSliderService]
})
export class ContentModule { }
