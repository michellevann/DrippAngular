import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../../services/purchase.service';
import { Purchase } from '../../../models/Purchase';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-purchase-index',
  templateUrl: './purchase-index.component.html',
  styleUrls: ['./purchase-index.component.css']
})
export class PurchaseIndexComponent implements OnInit {

  constructor(private _purchaseService: PurchaseService) { }
  
  ngOnInit() {
    this._purchaseService.getPurchases().subscribe((purchase: Purchase[]) => {
      this.dataSource = new MatTableDataSource<Purchase>(purchase);
    });
  }
  columnNames = ['details', 'BuyerName', 'StreetAddress', 'AptNumber', 'City', 'State', 'Zip', 'BuyerEmail'];
  dataSource: MatTableDataSource<Purchase>
}


