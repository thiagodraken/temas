
export class CalculoCategoria{
    
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