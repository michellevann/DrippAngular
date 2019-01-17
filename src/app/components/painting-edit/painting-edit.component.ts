import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/app/models/Painting';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PaintingService } from 'src/app/services/painting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Edit } from 'src/app/models/Edit';


@Component({
  selector: 'app-painting-edit',
  templateUrl: './painting-edit.component.html',
  styleUrls: ['./painting-edit.component.css']
})
export class PaintingEditComponent implements OnInit {

  painting: Painting;
  paintingId: number;
  
  editPaintingForm: FormGroup;
  constructor(private _form: FormBuilder,
    private _paintingService: PaintingService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this.paintingId = +p.get('id')
      this._paintingService.getPaintingById(p.get('id')).subscribe((singlePainting: Painting) => {
        this.painting = singlePainting;
        this.createForm(this.painting);
      });
    });
  }

  ngOnInit() {
  }

  createForm(painting: any) {
    console.log(painting)
    this.editPaintingForm = this._form.group({
      PaintingEntityId: new FormControl(this.painting.PaintingEntityId),
      // IsSold: new FormControl(this.painting.IsSold),
      Title: new FormControl(this.painting.Title),
      Size: new FormControl(this.painting.Size),
      Price: new FormControl(this.painting.Price),
      Color: new FormControl(this.painting.Color)
    });
    
  }

  onSubmit(form) {
    if (form.value.Title == null || form.value.Title === null){ 
      form.value.Title = this.painting.Title
    }
    if (form.value.Size == null){ 
      form.value.Size = this.painting.Size
    }
    if (form.value.Price == null){ 
      form.value.Price = this.painting.Price
    }
    if (form.value.Color == null){ 
      form.value.Color = this.painting.Color
    }
    const updatePainting: Edit = {
      PaintingEntityId: this.paintingId,
      Title: form.value.Title,
      // IsSold: form.value.IsSold,
      Size: form.value.Size,
      Price: form.value.Price,
      Color: form.value.Color
    };
    this._paintingService.updatePainting(updatePainting).subscribe(d => {
      this._router.navigate(['/painting/index']);
    });
  }
}
