import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/app/models/Painting';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PaintingService } from 'src/app/services/painting.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-painting-edit',
  templateUrl: './painting-edit.component.html',
  styleUrls: ['./painting-edit.component.css']
})
export class PaintingEditComponent implements OnInit {

  painting: Painting;
  editPaintingForm: FormGroup;
  constructor(private _form: FormBuilder,
    private _paintingService: PaintingService,
    private _ar: ActivatedRoute,
    private _router: Router) {

      this._ar.paramMap.subscribe(p => {
        this._paintingService.getPaintingById(p.get('id')).subscribe((singlePainting: Painting) => {
          this.painting= singlePainting;
          this.createForm();
        });
      });
     }

  ngOnInit() {
  }

createForm() {
  this.editPaintingForm = this._form.group({
    PaintingEntityId: new FormControl(this.painting.PaintingEntityId),
    IsSold: new FormControl(this.painting.IsSold),
    Title: new FormControl(this.painting.Title),
    Size: new FormControl(this.painting.Size),
    Price: new FormControl(this.painting.Price),
    Color: new FormControl(this.painting.Color)
  });
}

onSubmit(form) {
  const updatePainting: Painting = {
    PaintingEntityId: form.value.PaintingEntityId,
    Title: form.value.Title,
    Artist: form.value.Artist,
    OwnerId: form.value.OwnerId,
    IsSold: form.value.IsSold,
    ImageUrl: form.value.ImageUrl,
    Size: form.value.Size,
    Price: form.value.Price,
    Color: form.value.Color
  };
  this._paintingService.updatePainting(updatePainting).subscribe(d => {
    this._router.navigate(['/painting']);
  });
}
}
