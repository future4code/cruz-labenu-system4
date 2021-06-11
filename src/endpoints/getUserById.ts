import {Request, Response} from 'express';
import {connection} from '../connection'

export default async function getUserById(req:Request,res:Response){
    if(!req.params.id){
        throw new Error('Student id is required!Please, insert the id you wish to search!')}
    try{
        const idParams = req.params.id
        const result = await connection('STUDENT').select('Id_Student','Student_Name').where({Id_Student:idParams})
        res.send(result)
    }catch(error){
        res.status(400).send({message:error.message})
        console.log({message:error.message})
    }
}