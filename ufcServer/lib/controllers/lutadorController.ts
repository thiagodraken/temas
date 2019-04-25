import * as mongoose from 'mongoose';
import { LutadorSchema } from '../models/lutadorModel';
import { Request, Response } from 'express';

const Lutador = mongoose.model('Lutador', LutadorSchema);

export class LutadorController{
    
    public addNewLutador (req: Request, res: Response) {                
        let newLutador = new Lutador(req.body);
        
        newLutador.save((err, lutador) => {
            if(err){
                res.send(err);
            }    
            res.json(lutador);
        });
    }
    
    
    
    
    public getLutadores (req: Request, res: Response) {           
        
        var query = null;
        
        if (req.query.nome !== undefined) {
            //regex permite o uso de expressões regulares. i retira a propriedade de case sensitive
            var filtroNome = { nome: { $regex: req.query.nome, $options: 'i' }};
            query = filtroNome;
        }
        
        if (req.query.categoriaPeso !== undefined) {
            let pesoMinMax: Number[] = verificaCategoria(req.query.categoriaPeso);
            var filtroPeso = {$or:[{peso:{$gt:pesoMinMax[0],$lte:pesoMinMax[1]},sexo:"F"},{ peso:{$gt:pesoMinMax[2],$lte:pesoMinMax[3]},sexo:"M"}]};
            query = filtroPeso;
        }
        
        if (req.query.nome && req.query.categoriaPeso){
            query = Object.assign(filtroNome, filtroPeso);
        }
        
        Lutador.find(query, (err, lutador) => {
            if(err){
                res.send(err);
            }
            res.json(lutador);
        });
        
        function verificaCategoria(categoriaPeso): Number[] {
            switch (categoriaPeso) {
                case "peso_palha":
                return [0,52,0,0];
                case "peso_mosca":
                return [52,52.2,52.2,56.7];
                case "peso_galo":
                return [52.2,61.1,56.7,61.2];
                case "peso_pena":
                return [61.1,65.7,61.2,65.7];
                case "peso_leve":
                return [65.7,70.3,65.7,70.3];
                case "peso_meio-medio":
                return [70.3,77.1,70.3,77.1];
                case "peso_medio":
                return [77.1,83.9,77.1,83.9];
                case "peso_meio-pesado":
                return [83.9,92.9,83.9,92.9];
                case "peso_pesado":
                return [92.9,120.2,92.9,120.2];
                
                default:
                break;
            }
        }
    }
    
    public getLutadorComID (req: Request, res: Response) {           
        Lutador.findById(req.params.lutadorId, (err, lutador) => {
            if(err){
                res.send(err);
            }
            res.json(lutador);
        });
    }
    
    public updateLutador (req: Request, res: Response) {           
        Lutador.findOneAndUpdate({ _id: req.params.lutadorId }, req.body, { new: true }, (err, lutador) => {
            if(err){
                res.send(err);
            }
            res.json(lutador);
        });
    }
    
    public deleteLutador (req: Request, res: Response) {           
        Lutador.deleteOne({ _id: req.params.lutadorId }, (err, lutador) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Lutador deletado com sucesso!'});
        });
    }
    
    
}