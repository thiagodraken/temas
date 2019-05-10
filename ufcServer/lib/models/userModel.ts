import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true         
    },
    admin: {
        type: Boolean,
    },
    dataAtualizacao: {
        type: Date,
        default: Date.now
    },
    
});
UserSchema.index({'$**': 'text'});
