import {Request, Response} from 'express';
import {Class, ClassName, Modules} from '../types';
import {connection} from '../connection'

export default async function updateModule(req:Request,res:Response){
    const reqBody = req.body

    const newModule = reqBody.Module
    const Class = reqBody.Class_Name

    try{

        if(!Object.values(ClassName).includes(Class)) {
            throw new Error ('Please, check your information! You need to complete with one of then: EPPS, CRUZ, DUMMONT, MOLINA, JACKSON')
        }

        if(!Object.values(Modules).includes(newModule)) {
            throw new Error ('Please, check your information! You need to complete with one of then: 1, 2, 3, 4, 5, 6, 7')
        }
        
        await connection.raw(`
            UPDATE CLASS SET Module = ${newModule} WHERE Class_Name = '${Class}';
        `)
        res.status(200).send('module updated successfully')
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage}) 
    }
}    
