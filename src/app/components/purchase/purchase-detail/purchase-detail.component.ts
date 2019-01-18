import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/models/Purchase';
import { PurchaseService } from 'src/app/services/purchase.service'

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {
  purchase: Purchase;

  constructor(private _activatedRoute: ActivatedRoute, private _purchaseService: PurchaseService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._purchaseService.getPurchaseById(routeData.get('id')).subscribe((singlePurchase: Purchase) =>{
        this.purchase = singlePurchase;
      });
    });
  }

}






