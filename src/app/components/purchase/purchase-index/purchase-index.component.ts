import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { MatTableDataSource } from '@angular/material';
import { Purchase } from 'src/app/models/Purchase'
import { Painting } from 'src/app/models/Painting';
import { PaintingService } from 'src/app/services/painting.service'
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-purchase-index',
  templateUrl: './purchase-index.component.html',
  styleUrls: ['./purchase-index.component.css']
})
export class PurchaseIndexComponent implements OnInit {
  constructor(private _purchaseService: PurchaseService, private _paintingService: PaintingService) { }
  

  columnNames = ['details', 'Title', 'Size', 'Color', 'Price', 'DateAdded', 'buttons'];
  dataSource: MatTableDataSource<Purchase>

  
  ngOnInit() {
    this._purchaseService.getPurchases().subscribe((purchase: Purchase[]) => {
      this.dataSource = new MatTableDataSource<Purchase>(purchase);
    });
  }
}

