import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private firestore = inject(Firestore);
  private produtosRef = collection(this.firestore, 'produtos');

  getProdutos(): Observable<Produto[]> {
    return collectionData(this.produtosRef, { idField: 'id' }) as Observable<Produto[]>;
  }

  getProdutoById(id: string): Observable<Produto> {
    const produtoDoc = doc(this.firestore, `produtos/${id}`);
    return docData(produtoDoc, { idField: 'id' }) as Observable<Produto>;
  }

  addProduto(produto: Produto) {
    const produtoDoc = doc(this.produtosRef); // cria ID automático
    return setDoc(produtoDoc, produto);
  }

  updateProduto(id: string, produto: Partial<Produto>) {
    const produtoDoc = doc(this.firestore, `produtos/${id}`);
    return updateDoc(produtoDoc, produto);
  }

  deleteProduto(id: string) {
    const produtoDoc = doc(this.firestore, `produtos/${id}`);
    return deleteDoc(produtoDoc);
  }
}
