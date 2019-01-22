import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from 'src/app/models/Purchase';


@Component({
  selector: 'app-purchase-delete',
  templateUrl: './purchase-delete.component.html',
  styleUrls: ['./purchase-delete.component.css']
})
export class PurchaseDeleteComponent implements OnInit {
  purchase: Purchase;
  purchaseId: number;


  constructor(private _purchaseService: PurchaseService, private _ar: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._ar.paramMap.subscribe(p => {
      this.purchaseId = +p.get('id');
      this._purchaseService.getPurchaseById(p.get('id')).subscribe((singlePurchase: Purchase) => {
        this.purchase = singlePurchase;
      });
    });
  }
    onDelete() {
      console.log(this.purchaseId)
      this._purchaseService.deletePurchase(this.purchaseId).subscribe(() => {
        this._router.navigate(['/purchase/index']);
      });
    };
  }
