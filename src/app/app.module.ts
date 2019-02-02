import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

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
  MatCardModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatSnackBar,
  DateAdapter}
  from '@angular/material';

import { PaintingService } from './services/painting.service';
import { ProductsService } from './services/products.service';
import { PaintingIndexComponent } from './components/painting/painting-index/painting-index.component';
import { PaintingCreateComponent } from './components/painting/painting-create/painting-create.component';
import { PaintingDetailComponent } from './components/painting/painting-detail/painting-detail.component';
import { HomeComponent } from './components/home/home.component';
import { PaintingEditComponent } from './components/painting-edit/painting-edit.component';
import { PaintingDeleteComponent } from './components/painting/painting-delete/painting-delete.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent, ProductsDialog } from './components/products/products.component';
import { PurchaseService } from './services/purchase.service';
import { PurchaseIndexComponent } from './components/purchase/purchase-index/purchase-index.component';
import { PurchaseDetailComponent } from './components/purchase/purchase-detail/purchase-detail.component';
import { PurchaseDeleteComponent } from './components/purchase/purchase-delete/purchase-delete.component';
import { ContactComponent } from './components/contact/contact.component';
import { getLocaleDateTimeFormat } from '@angular/common';


const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'purchase', canActivate: [AuthGuard], children: [
    { path: '', component: PurchaseIndexComponent },
    { path: 'detail/:id', component: PurchaseDetailComponent },
    { path: 'delete/:id', component: PurchaseDeleteComponent }
  ]},
  { path: 'painting', canActivate: [AuthGuard], children: [
     { path: '', component: PaintingIndexComponent },
     { path: 'create', component: PaintingCreateComponent },
     { path: 'edit/:id', component: PaintingEditComponent },
     { path: 'detail/:id', component: PaintingDetailComponent },
     { path: 'delete/:id', component: PaintingDeleteComponent }
    ]},
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PaintingIndexComponent,
    PaintingCreateComponent,
    PaintingDetailComponent,
    PaintingEditComponent,
    PaintingDeleteComponent,
    ProductsComponent,
    ProductsDialog,
    PurchaseIndexComponent,
    PurchaseDetailComponent,
    PurchaseDeleteComponent,
    ContactComponent
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
    MatCardModule,
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
 
    //MatSnackBar
  ],
  
  providers: [
    AuthService,
    PaintingService,
    AuthGuard,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    ProductsService,
    PurchaseService
  ],

  entryComponents: [
    ProductsDialog
  ],

  bootstrap: [AppComponent]
 
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem('token');
 }
 