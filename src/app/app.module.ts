import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdicionarJogoComponent } from './components/adicionar-jogo/adicionar-jogo.component';
import { AtualizarJogoComponent } from './components/atualizar-jogo/atualizar-jogo.component';
import { VisualizarJogoComponent } from './components/visualizar-jogo/visualizar-jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AdicionarJogoComponent,
    AtualizarJogoComponent,
    VisualizarJogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
