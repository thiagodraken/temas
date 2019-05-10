import {Request, Response, NextFunction} from "express";
import { LutadorController } from "../controllers/lutadorController";
import  AuthController  from "../controllers/authController"

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
            if(req.query.key !== '4ccc9336b467b9cf58051ea123493ef114eae029'){
                res.status(401).send('You shall not pass!');
            } else {
                next();
            }                        
        }, this.lutadorController.getLutadores)        
        
        
        // POST endpoint
        .post(this.lutadorController.addNewLutador);
        
        app.route('/lutador/versus')
        .get(this.lutadorController.getLutadoresAleatorios);
        
        // Lutador detail
        app.route('/lutador/:lutadorId')
        // get specific lutador
        .get(this.lutadorController.getLutadorComID)
        .put(this.lutadorController.updateLutador)
        .delete(this.lutadorController.deleteLutador);
        
        app.route('/users/authenticate')
        .post(AuthController.login)
    }
}