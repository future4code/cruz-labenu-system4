import {Request, Response} from 'express';
import {Class} from '../types';
import {connection} from '../connection'

export default async function createClass(req:Request,res:Response){
    const reqBody = req.body
    try{

        if(!reqBody.Id_Class || !reqBody.Class_Name || !reqBody.Initial_Date || !reqBody.Final_Date || !reqBody.Module){
            throw new Error ('Please, check your information! You need complete all! of then!')
        }
        const newClass: Class = {
            Id_Class : reqBody.Id_Class,
            Class_Name : reqBody.Class_Name,
            Initial_Date: reqBody.Initial_Date,
            Final_Date : reqBody.Final_Date,
            Module : reqBody.Module
        }
        await connection('CLASS').insert(newClass)
        res.status(200).send('class added successfully')
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage}) 
    }
}    
