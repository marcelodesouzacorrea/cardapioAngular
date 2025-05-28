import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  produtos = [
    { id: '1', nome: 'X-Burguer', categoria: 'Lanche', preco: 15 },
    { id: '2', nome: 'Refrigerante', categoria: 'Bebida', preco: 5 },
  ];

  pedidos = [
    { nome: 'João', endereco: 'Rua A', itens: [1, 2] },
    { nome: 'Maria', endereco: 'Rua B', itens: [1] },
  ];

  novoProduto() {
    alert('Funcionalidade de adicionar produto (em construção)');
  }

  editarProduto(produto: any) {
    alert('Editar produto: ' + produto.nome);
  }

  excluirProduto(id: string) {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
