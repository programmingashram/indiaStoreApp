import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-bottom-shop-list',
  templateUrl: './bottom-shop-list.component.html',
  styleUrls: ['./bottom-shop-list.component.scss']
})
export class BottomShopListComponent {
constructor(private _bottomSheetRef: MatBottomSheetRef<BottomShopListComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
