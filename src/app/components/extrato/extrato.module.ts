import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExtratoComponent } from './extrato.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExtratoComponent
      }
    ])
  ],
  declarations: [ExtratoComponent],
  exports: [ExtratoComponent]
})
export class ExtratoModule { }
