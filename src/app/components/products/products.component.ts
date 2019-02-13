import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PaintingService } from 'src/app/services/painting.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/Products';
import { MatTableDataSource } from '@angular/material';
import { invokeQuery } from '@angular/animations/browser/src/render/shared';

export interface DialogData {
  cardNumber: number;
  expMonth: number;
  expYear: number;
  cvc: number;
  email: string;
  name: string;
  streetAddress: string;
  aptNumber?: string;
  city: string;
  state: string;
  zip: number;
  price: number;
  title: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataSource: MatTableDataSource<Products>;
 
  products$: Object;
  cardNumber: number;
  expMonth: number;
  expYear: number;
  cvc: number;
  email: string;
  name: string;
  streetAddress: string;
  aptNumber?: string;
  city: string;
  state: string;
  zip: number;

  constructor(private http: HttpClient, private _productService: ProductService, 
    private _paintingService: PaintingService, public dialog: MatDialog) { }

  ngOnInit() {
    this._paintingService.getPaintings().subscribe(
      _paintingService => this.products$ = _paintingService
    )
  }

  openDialog(dollar, title): void {
    const dialogRef = this.dialog.open(ProductsDialog, {
      width: '500px',
      height: '550px',
      data: {
        cardNumber: this.cardNumber,
        expMonth: this.expMonth,
        expYear: this.expYear,
        cvc: this.cvc,
        email: this.email,
        name: this.name,
        streetAddress: this.streetAddress,
        aptNumber: this.aptNumber,
        city: this.city,
        state: this.state,
        zip: this.zip,
        price: dollar,
        title: title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // openDialogPainting() {
  //   const dialogRef = this.dialog.open(ProductsDialogPainting, {
  //     width: '500px',
  //     height: '400px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products.component.dialog.html',
  styleUrls: ['./products.component.dialog.css']
})

export class ProductsDialog { 
  formThing: FormGroup;
  constructor(private _productService: ProductService, 
    public dialogRef: MatDialogRef<ProductsDialog>, private _form:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.createForm()
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  chargeCreditCard(form) {
    const formData = new FormData();
    console.log(form.value);
    (<any>window).Stripe.card.createToken({
      number: form.value.cardNumber,
      exp_month: form.value.expMonth,
      exp_year: form.value.expYear,
      cvc: form.value.cvc,
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        let formThing = {
          Token: token,
          Title: this.data.title,
          Price: this.data.price,
          BuyerEmail: form.value.Email,
          BuyerName: form.value.BuyerName,
          StreetAddress: form.value.streetAddress,
          AptNumber: form.value.aptNumber,
          City: form.value.City,
          State: form.value.State,
          Zip: form.value.Zip
        }
        formData.append("Token", token),
        console.log("Token after charge:", formThing)
        this.chargeCard(formThing);
      } else {
        console.log(response.error.message);
      }
    });
    // this.onNoClick();
  }

  chargeCard(form) {
    console.log(form)
    console.log("Charge card method")
    this._productService.createPurchaseToken(form).subscribe(data => {
      console.log(data)
      //this._router.navigate(['/products']);
    });
  }

  createForm(){
    this.formThing = this._form.group({
      cardNumber: new FormControl,
      expMonth: new FormControl,
      expYear: new FormControl,
      cvc: new FormControl,
      Email: new FormControl,
      BuyerName: new FormControl,
      streetAddress: new FormControl,
      aptNumber: new FormControl,
      City: new FormControl,
      State: new FormControl,
      Zip: new FormControl
    });
  }
  onSubmit(form){
    this.chargeCreditCard(form)
  }
}

// @Component({
//   selector: 'app-products-dialogPainting',
//   templateUrl: './products.component.dialogPainting.html',
//   styleUrls: ['./products.component.dialogPainting.css']
// })

// export class ProductsDialogPainting {}



// @Component({
//   selector: 'app-products-dialog',
//   templateUrl: './products.component.dialog.html',
// })

// export class SnackBar {
//   constructor(public snackBar: MatSnackBar) {}

//   openSnackBar(message: string) {
//     this.snackBar.open(message);
//   }
// }