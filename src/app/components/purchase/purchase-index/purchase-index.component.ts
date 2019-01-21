import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../../services/purchase.service';
import { Purchase } from '../../../models/Purchase';
import { MatTableDataSource } from '@angular/material';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-purchase-index',
  templateUrl: './purchase-index.component.html',
  styleUrls: ['./purchase-index.component.css']
})
export class PurchaseIndexComponent implements OnInit {
  _paintingService: any;
  products$: any;

  constructor(private _purchaseService: PurchaseService, private _productsService: ProductsService) { }
  
  ngOnInit() {
    this._purchaseService.getPurchases().subscribe((purchase: Purchase[]) => {
      this.dataSource = new MatTableDataSource<Purchase>(purchase);
      console.log(this.dataSource)
    });
  }
  columnNames = ['details', 'PurchaseDate', 'Title', 'Price', 'BuyerName', 'StreetAddress', 'City', 'State', 'Zip', 'BuyerEmail', 'buttons'];
  dataSource: MatTableDataSource<Purchase>
}


