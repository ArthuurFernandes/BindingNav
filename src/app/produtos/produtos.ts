import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
  estoque: number;
}

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Thinkpad T14',
      descricao: 'Thinkpad T14 Gen 3 com processador Intel Core i7, 16GB RAM, 512GB SSD e tela de 14 polegadas Full HD',
      imagem: 'assets/imagens/thinkpad.jpg',
      preco: 3500.00,
      estoque: 15
    },
    {
      id: 2,
      nome: 'Mouse',
      descricao: 'Mouse sem fio com bateria de longa duração',
      imagem: 'assets/imagens/mouse.jpg',
      preco: 150.00,
      estoque: 50
    },
    {
      id: 3,
      nome: 'Kit teclado e mouse',
      descricao: 'Teclado de membrana e mouse',
      imagem: 'assets/imagens/teclado.jpg',
      preco: 450.00,
      estoque: 30
    },
    {
      id: 4,
      nome: 'Monitor Thinkvision',
      descricao: 'Monitor 27 polegadas 144Hz com resolução 4K e tecnologia IPS para cores vibrantes e amplos ângulos de visão',
      imagem: 'assets/imagens/thinkvision.jpg',
      preco: 1200.00,
      estoque: 20
    },
    {
      id: 5,
      nome: 'Webcam',
      descricao: 'Webcam 4K com autofocus e microfone embutido',
      imagem: 'assets/imagens/webcam.jpg',
      preco: 350.00,
      estoque: 25
    },

    {
      id: 6,
      nome: 'Dockstation',
      descricao: 'Dockstation para notebooks com múltiplas portas USB, HDMI e Ethernet',
      imagem: 'assets/imagens/dockstation.jpg',
      preco: 500.00,
      estoque: 10,
    }
  ];
}
