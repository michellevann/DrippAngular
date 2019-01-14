import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Painting } from 'src/app/models/Painting';
import { PaintingService } from 'src/app/services/painting.service'

@Component({
  selector: 'app-painting-detail',
  templateUrl: './painting-detail.component.html',
  styleUrls: ['./painting-detail.component.css']
})
export class PaintingDetailComponent implements OnInit {
  
  painting: Painting;

  constructor(private _activatedRoute: ActivatedRoute, private _paintingService: PaintingService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._paintingService.getPaintingById(routeData.get('id')).subscribe((singlePainting: Painting) =>{
        this.painting = singlePainting;
      });
    });
}
}