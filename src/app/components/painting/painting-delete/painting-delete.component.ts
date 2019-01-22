import { Component, OnInit } from '@angular/core';
import { PaintingService } from 'src/app/services/painting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Painting } from 'src/app/models/Painting';

@Component({
  selector: 'app-painting-delete',
  templateUrl: './painting-delete.component.html',
  styleUrls: ['./painting-delete.component.css']
})
export class PaintingDeleteComponent implements OnInit {

painting: Painting;
paintingId:number;

  constructor(private _paintingService: PaintingService, private _ar: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
  this._ar.paramMap.subscribe(p => {
    this.paintingId=+p.get('id');
    this._paintingService.getPaintingById(p.get('id')).subscribe((singlePainting: Painting) => {
      this.painting= singlePainting;
      });
    });
  }
  onDelete(){
    console.log(this.paintingId)
      this._paintingService.deletePainting(this.paintingId).subscribe(() => {
      this._router.navigate(['/painting']);
  });
}
  
}