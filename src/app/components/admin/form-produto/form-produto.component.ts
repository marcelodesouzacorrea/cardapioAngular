import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-form-produto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-produto.component.html',
})
export class FormProdutoComponent {
  form: FormGroup;
  produtoId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      preco: [0, [Validators.required, Validators.min(0.01)]],
      categoria: ['', Validators.required],
      imagem: ['']
    });

    this.produtoId = this.route.snapshot.paramMap.get('id');

    if (this.produtoId) {
      this.produtoService.getProdutoById(this.produtoId).subscribe((produto: Produto | undefined) => {
        if (produto) {
          this.form.patchValue(produto);
        }
      });
    }
  }

  salvar() {
    if (this.form.invalid) return;

    const produto: Produto = this.form.value;

    if (this.produtoId) {
      // Atualizar produto existente
      this.produtoService.updateProduto(this.produtoId, produto).then(() => {
        alert('Produto atualizado com sucesso!');
        this.router.navigate(['/admin/produtos']);
      });
    } else {
      // Criar novo produto
      this.produtoService.addProduto(produto).then(() => {
        alert('Produto salvo com sucesso!');
        this.router.navigate(['/admin/produtos']);
      });
    }
  }

  voltar() {
  this.router.navigate(['/admin/produtos']);
}

}
