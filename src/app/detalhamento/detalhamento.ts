import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalhamento',
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhamento.html',
  styleUrl: './detalhamento.css',
})
export class Detalhamento implements OnInit {
  id: number | null = null;
  nome: string = '';
  descricao: string = '';
  imagem: string = '';
  preco: number | null = null;
  estoque: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'] ? Number(params['id']) : null;
    });

    this.route.queryParams.subscribe((query) => {
      this.nome = query['nome'] || 'Nome não disponível';
      this.descricao = query['descricao'] || 'Descrição não disponível';
      this.imagem = query['imagem'] || '';
      this.preco = this.parseNumber(query['preco']);
      this.estoque = this.parseNumber(query['estoque']);
    });
  }

  private parseNumber(value: string | null | undefined): number | null {
    if (value === undefined || value === null || value === '') {
      return null;
    }

    const parsedValue = Number(value);
    return Number.isNaN(parsedValue) ? null : parsedValue;
  }
}
