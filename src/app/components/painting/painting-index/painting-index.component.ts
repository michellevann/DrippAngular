import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../../../services/painting.service';
import { Painting } from '../../../models/Painting';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-painting-index',
  templateUrl: './painting-index.component.html',
  styleUrls: ['./painting-index.component.css']
})
export class PaintingIndexComponent implements OnInit {

  constructor(private _paintingService: PaintingService) { }

  ngOnInit() {
    this._paintingService.getPaintings().subscribe((painting: Painting[]) => {
      this.dataSource = new MatTableDataSource<Painting>(painting);
    });
  }
columnNames = ['details', 'Title', 'Size', 'Color', 'Price', 'DateAdded', 'buttons'];
dataSource: MatTableDataSource<Painting>
}