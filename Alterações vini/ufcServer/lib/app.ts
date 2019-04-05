import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/ufcRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes(); 
    public mongoUrl: string = 'mongodb+srv://vifanti:280695@crud-nodejs-vf8hk.mongodb.net/test?retryWrites=true';

    constructor() {
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);     
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true});        
    }

}

export default new App().app;
