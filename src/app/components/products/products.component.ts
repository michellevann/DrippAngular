import { Component, OnInit } from '@angular/core';
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

  constructor(private _productsService : ProductsService) { }

  ngOnInit() {
      this._productsService.getProducts().subscribe((products: Products[]) => {
        this.dataSource = new MatTableDataSource<Products>(products);
      });
    
  }
  columnNames = ['details', 'Title', 'Size', 'Color', 'Price', 'DateAdded', 'buttons'];
}
