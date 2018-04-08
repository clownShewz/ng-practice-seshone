import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { FormComponent } from '../form/form/form.component';

const coreRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(coreRoutes,
      { enableTracing: true }
    )
  ],
  declarations: [CoreComponent,
    HomeComponent,
    FormComponent
  ],
  exports: [CoreComponent]
})

export class CoreModule { }
