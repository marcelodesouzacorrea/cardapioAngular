import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  quantidade: number;
  categoria: string;
  descricao?: string; // nova linha
}


@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule,NgSelectModule,FormsModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {
  categorias: string[] = ['Todos', 'Lanche', 'Bebida'];
  categoriaSelecionada: string = 'Todos';

produtos: Produto[] = [
  { id: 1, nome: 'Hambúrguer Artesanal', preco: 24.90, imagem: 'hamburguer1.jpg', quantidade: 0, categoria: 'Lanche',  descricao: 'Pão brioche, hambúrguer 180g, queijo cheddar, alface e molho especial' },
  { id: 2, nome: 'Pizza Calabresa', preco: 39.90, imagem: 'hamburguer1.jpg', quantidade: 0, categoria: 'Lanche',  descricao: 'Pão brioche, hambúrguer 180g, queijo cheddar, alface e molho especial' },
  { id: 3, nome: 'Pizza Calabresa', preco: 39.90, imagem: 'hamburguer1.jpg', quantidade: 0, categoria: 'Lanche',  descricao: 'Pão brioche, hambúrguer 180g, queijo cheddar, alface e molho especial' },
  { id: 4, nome: 'Suco Natural', preco: 8.50, imagem: 'hamburguer1.jpg', quantidade: 0, categoria: 'Bebida',  descricao: 'Pão brioche, hambúrguer 180g, queijo cheddar, alface e molho especial' },
  { id: 5, nome: 'Água Mineral', preco: 4.00, imagem: 'hamburguer1.jpg', quantidade: 0, categoria: 'Bebida', descricao: 'Pão brioche, hambúrguer 180g, queijo cheddar, alface e molho especial' }
];

  
  get produtosFiltrados(): Produto[] {
  if (this.categoriaSelecionada === 'Todos') {
    return this.produtos;
  }
    return this.produtos.filter(p => p.categoria === this.categoriaSelecionada);
  }

  get total(): number {
    return this.produtos.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  }

  adicionar(produto: Produto) {
    produto.quantidade++;
  }

  remover(produto: Produto) {
    if (produto.quantidade > 0) {
      produto.quantidade--;
    }
  }

cliente = {
  nome: '',
  tipoEntrega: '',
  rua: '',
  numero: '',
  bairro: '',
  proximidade: '',
  mesa: ''
};

enviarPedido() {
  if (!this.cliente.nome || !this.cliente.tipoEntrega) return;

  let local = '';
  if (this.cliente.tipoEntrega === 'Entrega') {
    local = `Rua ${this.cliente.rua}, Nº ${this.cliente.numero}, Bairro ${this.cliente.bairro}`;
    if (this.cliente.proximidade) {
      local += ` (Ponto de referência: ${this.cliente.proximidade})`;
    }
  } else if (this.cliente.tipoEntrega === 'Mesa') {
    local = `Mesa ${this.cliente.mesa}`;
  }

  const itens = this.produtos
    .filter(p => p.quantidade > 0)
    .map(p => `• ${p.nome} x${p.quantidade} - R$ ${(p.preco * p.quantidade).toFixed(2)}`)
    .join('%0A');

  const texto = `*Novo Pedido de ${this.cliente.nome}*%0A` +
                `📍 Local: ${local}%0A%0A` +
                `${itens}%0A%0A` +
                `*Total:* R$ ${this.total.toFixed(2)}`;

  const numeroWhatsApp = '5592984951556';
  const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
  window.open(url, '_blank');
}



}
