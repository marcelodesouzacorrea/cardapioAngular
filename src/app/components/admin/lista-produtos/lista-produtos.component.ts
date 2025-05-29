import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent implements OnInit {
  produtos = [
    {
      id: '1',
      nome: 'X-Burguer',
      preco: 18.5,
      categoria: 'Lanche',
      imagem: 'https://via.placeholder.com/60'
    },
    {
      id: '2',
      nome: 'Pizza Calabresa',
      preco: 35,
      categoria: 'Pizza',
      imagem: 'https://via.placeholder.com/60'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  excluirProduto(id: string) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtos = this.produtos.filter(p => p.id !== id);
    }
  }
}
