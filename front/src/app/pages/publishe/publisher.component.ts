import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Editora } from '../../models/editora';
import { EditorasService } from '../../services/editoras.services';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-publisher.component',
  imports: [RouterLink],
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.css'
})
export class PublisherComponent {
  private svc = inject(EditorasService);
  private auth = inject(AuthService);   //Ver o token
  editora = signal<Editora[]>([]);
  carregando = signal(true);
  erro = signal<string | null>(null);

  constructor() {
    
    this.svc.listar().subscribe({
      next: (data) => { this.editora.set(data); this.carregando.set(false); },
      error: () => { this.erro.set('Falha ao carregar editora'); this.carregando.set(false); }
    });
  }
}
