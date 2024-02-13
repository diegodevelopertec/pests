import { TypeMap } from './../../node_modules/@types/mime/index.d';
import sequelize, { DataTypes } from 'sequelize';
import { Model } from 'sequelize';
import { sequelizeConnection } from '../configs/sequelize.config';


export interface IPets extends Model {
    id:number,
    nome:string,
    peso:string,
    idade:number,
    raca:string,
    cor:string,
    especie:string
}

export const petsDB=sequelizeConnection.define<IPets>('petsDB',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
      
    },
    nome:{
        type:DataTypes.TEXT,
        
    },
    peso:{
        type:DataTypes.TEXT,
     
    },
    idade:{
        type:DataTypes.TEXT,
      
    },
    raca:{
        type:DataTypes.TEXT,
        
    },
    cor:{
        type:DataTypes.TEXT,
       
    },
    especie:{
        type:DataTypes.TEXT,
        
    },



},{
    tableName:'pets',timestamps:false
})