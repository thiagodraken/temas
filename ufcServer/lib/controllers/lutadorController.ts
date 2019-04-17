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
        Lutador.find({}, (err, lutador) => {
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