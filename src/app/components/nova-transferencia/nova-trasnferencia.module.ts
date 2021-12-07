import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { NovaTransferenciaComponent } from './nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NovaTransferenciaComponent
      }
    ])
  ],
  declarations: [NovaTransferenciaComponent],
  exports: [NovaTransferenciaComponent]
})
export class NovaTransferenciaModule { }
