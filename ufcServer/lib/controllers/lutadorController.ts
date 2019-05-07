import * as mongoose from 'mongoose';
import { LutadorSchema } from '../models/lutadorModel';
import { Request, Response } from 'express';
import { CalculoCategoria } from './calculo-categoria'

const Lutador = mongoose.model('Lutador', LutadorSchema);
const calculoCategoria: CalculoCategoria = new CalculoCategoria() 
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
    
    public getLutadoresAleatorios (req: Request, res: Response){
        let pesoMinMax: Number[] = calculoCategoria.verificaPeso(req.query.categoriaPeso);
        let Min;
        let Max;
        switch (req.query.sexo) {
            case 'F':
            Min = 0;
            Max = 1
            break;
            default:
            Min = 2;
            Max = 3;
            break;
        }
        let query = [  
            { $match:  { sexo : req.query.sexo}},
            { $match: { peso:{$gt:pesoMinMax[Min],$lte:pesoMinMax[Max]}} },
            { $sample: { size: 2 } }
        ];
        
        Lutador.aggregate(query, (err, lutador) => {
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
            let pesoMinMax: Number[] = calculoCategoria.verificaPeso(req.query.categoriaPeso);
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