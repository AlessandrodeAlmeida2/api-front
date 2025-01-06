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

  // Variável para visibilidade da tabela
  tabela: boolean = true;

  // JSON de clientes
  clientes: Cliente[] = [];

  // Construtor
  constructor(private servico: ClienteService) { }

  // Método para selecionar todos os clientes
  selecionar(): void {
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  // Método de cadastro
  cadastrar(): void {
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {
      // Cadastrar o cliente no vetor
      this.clientes.push(retorno);

      // Limpar formulário
      this.cliente = new Cliente();

      // Mensagem de sucesso
      alert('Cliente cadastrado com sucesso!');
    })
  }

  //Método para selecionar um cliente específico
  selecionarCliente(posicao: number) :void {

    // selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    // Visibilidade dos botões
    this.btnCadastro = false;

    // Visibilidade da tabela
    this.tabela = false;
  }

  //Método para editar um cliente
  editar(): void {
    this.servico.editar(this.cliente)
    .subscribe(retorno => {

      // Obter a posição do cliente no vetor
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });

      //Alterar os dados do cliente no vetor
      this.clientes[posicao] = retorno;

      // Visibilidade dos botões
      this.btnCadastro = true;

      // Visibilidade da tabela
      this.tabela = true;

      //Mensagem de sucesso
      alert('Cliente editado com sucesso!');
    })
  }

  // Método para excluir um cliente
  excluir(): void {
    this.servico.excluir(this.cliente.codigo)
    .subscribe(retorno => {

      // Obter a posição do cliente no vetor
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo;
      });

      // Remover o cliente do vetor
      this.clientes.splice(posicao, 1);

      // Visibilidade dos botões
      this.btnCadastro = true;

      // Visibilidade da tabela
      this.tabela = true;

      //Mensagem de sucesso
      alert('Cliente Removido com sucesso!');
    })
  }

  // Método para cancelar a edição
  cancelar(): void {
      
    // Limpar formulário
    this.cliente = new Cliente();

    // Visibilidade dos botões
    this.btnCadastro = true;

    // Visibilidade da tabela
    this.tabela = true;

    // Mensagem de sucesso
    alert('Edição cancelada com sucesso!');

  }

  // Método de inicialização
  ngOnInit() {
    this.selecionar();
  }
}
