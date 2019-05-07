import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoCategoriaService {

  pesoCategoriaAnterior(categoria: String, peso: number, sexo: String): number {
    let dif;
    if (sexo === 'F') {
      switch (categoria) {
        case 'Peso Palha':
        return 0;
        case 'Peso Mosca':
        dif = peso - 52;
        return dif.toFixed(2);
        case 'Peso Galo':
        dif = peso - 52.2;
        return dif.toFixed(2);
        case 'Peso Pena':
        dif = peso - 61.1;
        return dif.toFixed(2);
        default:
        return null;
      }
    } else {
      switch (categoria) {
        case 'Peso Mosca':
        return 0;
        case 'Peso Galo':
        dif = peso - 56.7;
        return dif.toFixed(2);
        case 'Peso Pena':
        dif = peso - 61.2;
        return dif.toFixed(2);
        case 'Peso Leve':
        dif = peso - 65.7;
        return dif.toFixed(2);
        case 'Peso Meio-Médio':
        dif = peso - 70.3;
        return dif.toFixed(2);
        case 'Peso Médio':
        dif = peso - 77.1;
        return dif.toFixed(2);
        case 'Peso Meio-Pesado':
        dif = peso - 83.9;
        return dif.toFixed(2);
        case 'Peso Pesado':
        dif = peso - 92.9;
        return dif.toFixed(2);
        default:
        return null;
      }
    }
  }

  pesoProximaCategoria(categoria: String, peso: number, sexo: String): number {
    let dif;
    if (sexo === 'F') {
      switch (categoria) {
        case 'Peso Palha':
        dif = 52.01 - peso;
        return dif.toFixed(2);
        case 'Peso Mosca':
        dif = 52.21 - peso;
        return dif.toFixed(2);
        case 'Peso Galo':
        dif = 61.11 - peso;
        return dif.toFixed(2);
        case 'Peso Pena':
        return 0;
        default:
        return null;
      }
    } else {
      switch (categoria) {
        case 'Peso Mosca':
        dif = 56.71 - peso;
        return dif.toFixed(2);
        case 'Peso Galo':
        dif = 61.21 - peso;
        return dif.toFixed(2);
        case 'Peso Pena':
        dif = 65.71 - peso;
        return dif.toFixed(2);
        case 'Peso Leve':
        dif = 70.31 - peso;
        return dif.toFixed(2);
        case 'Peso Meio-Médio':
        dif = 77.11 - peso;
        return dif.toFixed(2);
        case 'Peso Médio':
        dif = 83.91 - peso;
        return dif.toFixed(2);
        case 'Peso Meio-Pesado':
        dif = 92.91 - peso;
        return dif.toFixed(2);
        case 'Peso Pesado':
        return 0;
        default:
        return null;
      }
    }
  }

  verificaCategoria(peso, sexo: String): String {
    if (sexo === 'F' && peso !== '') {
      if (peso <= 52) {
        return 'Peso Palha';
      } else if (peso > 52 && peso <= 52.2) {
        return 'Peso Mosca';
      } else if (peso > 52.2 && peso <= 61.1) {
        return 'Peso Galo';
      } else if (peso > 61.1 && peso <= 65.7) {
        return 'Peso Pena';
      } else {
        return null;
      }
    } else {
      if (peso <= 56.7 && peso !== '') {
        return 'Peso Mosca';
      } else if (peso > 56.7 && peso <= 61.2) {
        return 'Peso Galo';
      } else if (peso > 61.2 && peso <= 65.7) {
        return 'Peso Pena';
      } else if (peso > 65.7 && peso <= 70.3) {
        return 'Peso Leve';
      } else if (peso > 70.3 && peso <= 77.1) {
        return 'Peso Meio-Médio';
      } else if (peso > 77.1 && peso <= 83.9) {
        return 'Peso Médio';
      } else if (peso > 83.9 && peso <= 92.9) {
        return 'Peso Meio-Pesado';
      } else if (peso > 92.9 && peso <= 120.2) {
        return 'Peso Pesado';
      } else {
        return null;
      }
    }
  }

  public verificaPeso(categoriaPeso): Number[] {
    switch (categoriaPeso) {
      case 'peso_palha':
      // Dois primeiros intervalo de peso Feminino, depois intervalo de peso Masculino
      return [0, 52, 0, 0];
      case 'peso_mosca':
      return [52, 52.2, 52.2, 56.7];
      case 'peso_galo':
      return [52.2, 61.1, 56.7, 61.2];
      case 'peso_pena':
      return [61.1, 65.7, 61.2, 65.7];
      case 'peso_leve':
      return [65.7, 70.3, 65.7, 70.3];
      case 'peso_meio-medio':
      return [70.3, 77.1, 70.3, 77.1];
      case 'peso_medio':
      return [77.1, 83.9, 77.1, 83.9];
      case 'peso_meio-pesado':
      return [83.9, 92.9, 83.9, 92.9];
      case 'peso_pesado':
      return [92.9, 120.2, 92.9, 120.2];
      default:
      break;
    }
  }
}
