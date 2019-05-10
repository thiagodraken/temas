import { Request, Response } from "express";
import { UserSchema } from '../models/userModel';
import config from "../../config/config";
import * as jwt from "jsonwebtoken";
import * as mongoose from 'mongoose';
import * as bcrypt from "bcryptjs";

const User = mongoose.model('User', UserSchema);

class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if email and password are set
    let { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send();
    }
    
    //Get user from database
    let user:any[];
    try {
      user = await (User.find({email: req.body.email}));
    }catch(error){
      res.status(401).send("Email ou sennha incorretos");
    }
    
    //Check if encrypted password match
    if (!bcrypt.compareSync(password, user[0].password)) {
      res.status(401).send("Email ou sennha incorretos");
      return;
    }
    
    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user[0].id, email: user[0].email },
      config.jwtSecret,
      { expiresIn: "1h" }
    );
      
    //Send the jwt in the response
    res.send({id: user[0].id,
      email: user[0].email,
      name: user[0].name,
      admin: user[0].admin,
      token: token});
  };
}
export default AuthController;
    