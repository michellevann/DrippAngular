import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { PaintingService } from 'src/app/services/painting.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  cardNumber: number;
  expMonth: number;
  expYear: number;
  cvc: number;
  email: string;
  streetAddress: string;
  aptNumber?: string;
  city: string;
  state: string;
  zip: number;
}
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/Products';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataSource: MatTableDataSource<Products>;

  productForm: FormGroup;
  products$: Object;
  cardNumber: number;
  expMonth: number;
  expYear: number;
  cvc: number;
  email: string;
  streetAddress: string;
  aptNumber?: string;
  city: string;
  state: string;
  zip: number;


  constructor(private http: HttpClient, private _productService: ProductService, private _router: Router, private _paintingService: PaintingService, public dialog: MatDialog) { }


  

  ngOnInit() {
    this._paintingService.getPaintings().subscribe(
      _paintingService => this.products$ = _paintingService
    )
  }

  chargeCreditCard() {
    const formData = new FormData();
    let form = document.getElementsByTagName("form")[0];
    (<any>window).Stripe.card.createToken({
      number: 4242424242424242,
      // exp_month: form.expMonth.value,
      exp_month: 12,
      exp_year: 2019,
      cvc: 123,
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        formData.append("Token", token)
        console.log("Token after charge:", token)
        this.chargeCard(formData);
      } else {
        console.log(response.error.message);
      }
    });
  }

  chargeCard(token: FormData) {
    console.log(token)
    console.log("Charge card method")
    this._productService.createPurchaseToken(token).subscribe(data => {
        console.log(data)
      // this._router.navigate(['/products']);
    });

  }  
  // constructor(private _productsService : ProductsService) { }

  openDialog( dollar, title ): void {
    const dialogRef = this.dialog.open(ProductsDialog, {
      width: '250px',
      data: {
        cardNumber: this.cardNumber,
        expMonth: this.expMonth,
        expYear: this.expYear,
        cvc: this.cvc,
        email: this.email,
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
      console.log('the dialog was closed');
    });
  }

}

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products.component.dialog.html',
})
export class ProductsDialog {
  constructor(
    public dialogRef: MatDialogRef<ProductsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void{
      this.dialogRef.close();
    }
    

  }
