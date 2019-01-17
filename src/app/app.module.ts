import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatToolbarModule,  
  MatButtonModule, 
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatCardModule}
  from '@angular/material';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { PaintingService } from './services/painting.service';
import { PaintingIndexComponent } from './components/painting/painting-index/painting-index.component';
import { PaintingCreateComponent } from './components/painting/painting-create/painting-create.component';
import { PaintingDetailComponent } from './components/painting/painting-detail/painting-detail.component';
import { HomeComponent } from './components/home/home.component';
import { PaintingEditComponent } from './components/painting-edit/painting-edit.component';
import { PaintingDeleteComponent } from './components/painting/painting-delete/painting-delete.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './components/products/products.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'painting', canActivate: [AuthGuard], children: [
     { path: 'create', component: PaintingCreateComponent},
     { path: 'index', component: PaintingIndexComponent},
     { path: 'edit', component: PaintingEditComponent},
     { path: 'detail/:id', component: PaintingDetailComponent},
     { path: 'delete/:id', component: PaintingDeleteComponent}
    ]},
  { path: '**', component: HomeComponent },
];
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    PaintingIndexComponent,
    PaintingCreateComponent,
    PaintingDetailComponent,
    PaintingEditComponent,
    PaintingDeleteComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule
  ],
  
  providers: [
    AuthService,
    PaintingService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
