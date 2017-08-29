import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CartlistComponent } from './cartlist';

@NgModule({
  declarations: [
    CartlistComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CartlistComponent
  ]
})
export class CartlistComponentModule {}
