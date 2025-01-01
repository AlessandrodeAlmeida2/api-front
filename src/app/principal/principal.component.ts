import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  //Objeto de cliente
  cliente = new Cliente();

  // Variável para visibilidade dos botões
  btnCadastro: boolean = true;

  // JSON de clientes
  clientes: Cliente[] = [];

  // Construtor
  constructor(private servico: ClienteService) { }

  // Método para selecionar todos os clientes
  selecionar(): void {
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  // Método de inicialização
  ngOnInit() {
    this.selecionar();
  }
}
