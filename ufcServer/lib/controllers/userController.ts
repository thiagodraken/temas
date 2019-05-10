
import { Request, Response } from "express";
import { UserSchema } from '../models/userModel';
import * as mongoose from 'mongoose';

const User = mongoose.model('User', UserSchema);

class UserController{
  
  static listAll = (req: Request, res: Response) => {
    //Get users from database
    User.find({},{projection:{password: 0}}, (err, users) => {
      if(err){
        res.send(err);
      }
      res.json(users);
    });  
  };
  
  static getUserComID = (req: Request, res: Response) => {
    User.findById(req.params.userId,{projection:{password:0}}, (err, user) => {
      if(err){
        res.send(err);
      }
      res.json(user);
    });
  };
};

export default UserController;
