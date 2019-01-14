import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../../../services/painting.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-painting-create',
  templateUrl: './painting-create.component.html',
  styleUrls: ['./painting-create.component.css']
})
export class PaintingCreateComponent implements OnInit {

  paintingForm: FormGroup;

  constructor(private _paintingService: PaintingService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.paintingForm = this._form.group({
      Title: new FormControl,
      Size: new FormControl,
      Color: new FormControl,
      Price: new FormControl,
    });
  }

  onSubmit(){
    this._paintingService.createPainting(this.paintingForm.value).subscribe(data => {
      this._router.navigate(['/painting']);
    });
  }
}
