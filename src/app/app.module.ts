import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  MatButtonModule, 
  MatCardModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,  
  MatSnackBar,
  DateAdapter}
  from '@angular/material';
import { AppComponent } from './app.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaintingCreateComponent } from './components/painting/painting-create/painting-create.component';
import { PaintingDeleteComponent } from './components/painting/painting-delete/painting-delete.component';
import { PaintingDetailComponent } from './components/painting/painting-detail/painting-detail.component';
import { PaintingEditComponent } from './components/painting-edit/painting-edit.component';
import { PaintingIndexComponent } from './components/painting/painting-index/painting-index.component';
import { ProductsComponent, ProductsDialog } from './components/products/products.component';
import { PurchaseDeleteComponent } from './components/purchase/purchase-delete/purchase-delete.component';
import { PurchaseDetailComponent } from './components/purchase/purchase-detail/purchase-detail.component';
import { PurchaseIndexComponent } from './components/purchase/purchase-index/purchase-index.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { PaintingService } from './services/painting.service';
import { ProductsService } from './services/products.service';
import { PurchaseService } from './services/purchase.service';
import { getLocaleDateTimeFormat } from '@angular/common';

const routes = [
  { path: 'admin', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'painting', canActivate: [AuthGuard], children: [
    { path: '', component: PaintingIndexComponent},
    { path: 'create', component: PaintingCreateComponent},
    { path: 'delete/:id', component: PaintingDeleteComponent},
    { path: 'detail/:id', component: PaintingDetailComponent},
    { path: 'edit/:id', component: PaintingEditComponent}
  ]},

  { path: 'purchase', canActivate: [AuthGuard], children: [
    { path: '', component: PurchaseIndexComponent},
    { path: 'delete/:id', component: PurchaseDeleteComponent},
    { path: 'detail/:id', component: PurchaseDetailComponent}
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
    PurchaseDeleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    //MatSnackBar
  ],
  
  providers: [
    AuthGuard,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    AuthService,
    PaintingService,
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
 