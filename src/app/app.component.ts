import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // IMPORTAR RouterModule

import { HeaderComponent } from "./components/header/header.component";
import { CardapioComponent } from "./components/cardapio/cardapio.component";
import { FooterComponent } from "./components/footer/footer.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ApresentacaoComponent } from "./components/apresentacao/apresentacao.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,  // <--- Adicionar aqui
    HeaderComponent, 
    CardapioComponent, 
    FooterComponent, 
    InicioComponent, 
    ApresentacaoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // corrigido para styleUrls
})
export class AppComponent {
  title = 'cardapioDigital';
}
