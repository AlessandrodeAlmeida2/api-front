import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from "./principal/principal.component";
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrincipalComponent, HttpClientModule], // Adicionar HttpClientModule aos imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-front';
}
