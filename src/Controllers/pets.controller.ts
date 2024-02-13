import { Request,Response} from "express";
import { petsDB } from "../Models/pets.model";
import j from 'joi'
import { where } from "sequelize";

const schema=j.object({
    nome:j.string().min(3).required(),
    peso:j.string().min(3).required(),
    idade:j.number().min(1).required(),
    raca:j.string().min(3).required(),
    cor:j.string().min(3).required(),
    especie:j.string().min(3).required(),
})



export const PetsController={
    GetAllPets:async(req:Request,res:Response)=>{
        try{
            const pets=await petsDB.findAll()
            res.json(pets)

        }catch(e){
            res.json(e)
        }
    },
    GetPetId:async(req:Request,res:Response)=>{
        try{
            const {id}=req.params
            const pet=await petsDB.findByPk(id)
            if(pet){
                res.json(pet)
            }else{
                res.json('pet não existe')
            }

        }catch(e){

        }
    },
    AddPet:async(req:Request,res:Response)=>{
        try{
            const data=req.body
            const result=schema.validate(data)
            if(result.error){
                res.json(result.error.message)
            }else{
                const newPet=await petsDB.create(data)
                res.json(newPet)
            }
        }catch(e){
            res.json(e)
        }
    },
    UpdatePetId:async(req:Request,res:Response)=>{
        try{
            const data=req.body
            const {id}=req.params
            const result=schema.validate(data)
            if(result.error){
                res.json(result.error.message)
            }else{
                await petsDB.update(data,{where:{id}})
                res.json('pet atualizado')
            }
        }catch(e){
            res.json(e)
        }
    },
    DeletePetId:async(req:Request,res:Response)=>{
        try{
            const {id}=req.params
            await petsDB.destroy({where:{id}})
            res.json('pet deletado')
        }catch(e){
            res.json(e)
        }
    },
    

}