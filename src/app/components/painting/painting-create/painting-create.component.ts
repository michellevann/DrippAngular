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
  file: any;

  constructor(private _paintingService: PaintingService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
    this.file = [];
   }

  ngOnInit() {
  }

  createForm() {
    this.paintingForm = this._form.group({
      Artist: new FormControl,
      Title: new FormControl,
      Size: new FormControl,
      Color: new FormControl,
      Price: new FormControl
    });
  }

  onFileChanged(event: any) {
    this.file = event.target.files;
    console.log(this.file)
  }

  onSubmit(form){

    const formData = new FormData();
    formData.append("Image", this.file[0], this.file.name);
    formData.append("Artist", this.paintingForm.value["Artist"]);
    formData.append("Title", this.paintingForm.value["Title"]);
    formData.append("Size", this.paintingForm.value["Size"]);
    formData.append("Color", this.paintingForm.value["Color"]);
    formData.append("Price", this.paintingForm.value["Price"]);

    console.log(formData.get("Image"))
    this._paintingService.createPainting(formData).subscribe(data => {

      this._router.navigate(['/painting/index']);
    });
  }
}
