import { Router } from "express";
import { PetsController } from "../Controllers/pets.controller";


const Routes=Router()
Routes.get('/pets',PetsController.GetAllPets)
Routes.get('/pets/:id',PetsController.GetPetId)
Routes.post('/pets',PetsController.AddPet)
Routes.put('/pets/:id',PetsController.UpdatePetId)
Routes.delete('/pets/:id',PetsController.DeletePetId)

export default Routes
