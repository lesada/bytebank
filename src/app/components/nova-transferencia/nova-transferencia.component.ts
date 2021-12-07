import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  constructor(
    private router: Router
  ) { }

  @Output() transferirEvent = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  transferir() {
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.transferirEvent.emit(valorEmitir);
    this.limparCampos()
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  navigateTo() {
    this.router.navigateByUrl('extrato');
  }

}
