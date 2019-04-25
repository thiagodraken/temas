import {Request, Response, NextFunction} from "express";
import { LutadorController } from "../controllers/lutadorController";

export class Routes { 
    
    public lutadorController: LutadorController = new LutadorController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // Lutador
        app.route('/lutador')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);   
            console.log(`Name: ${req.query.nome}`);         
            console.log(`Categoria: ${req.query.categoriaPeso}`);   
            if(req.query.key !== '4ccc9336b467b9cf58051ea123493ef114eae029'){
                res.status(401).send('You shall not pass!');
            } else {
                next();
            }                        
        }, this.lutadorController.getLutadores)        

        // POST endpoint
        .post(this.lutadorController.addNewLutador);

        // Lutador detail
        app.route('/lutador/:lutadorId')
        // get specific lutador
        .get(this.lutadorController.getLutadorComID)
        .put(this.lutadorController.updateLutador)
        .delete(this.lutadorController.deleteLutador)

    }
}