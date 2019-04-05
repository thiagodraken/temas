import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LutadorSchema = new Schema({
    nome: {
        type: String,
        required: 'Enter a first name'
    },
    idade: {
        type: Number,
    },
    sexo: {
        type: String,
        required: true         
    },
    peso: {
        type: Number,
        required: true   
    },
    paisOrigem: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});