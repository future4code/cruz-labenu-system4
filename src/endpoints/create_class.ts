import {Request, Response} from 'express';
import {Class, ClassName, Modules} from '../types';
import {connection} from '../connection'

export default async function createClass(req:Request,res:Response){
    const reqBody = req.body

    try{

        const Id_Class : number = reqBody.Id_Class;
        const Class_Name : ClassName = reqBody.Class_Name;
        const Initial_Date : string = reqBody.Initial_Date;
        const Final_Date : string = reqBody.Final_Date;
        const Module : Modules = reqBody.Module;

        if(!Id_Class || !Class_Name || !Initial_Date || !Final_Date || !Module){
            throw new Error ('Please, check your information! You need complete all! of then!')
        }

        if (!Object.values(ClassName).includes(Class_Name)) {
            throw new Error ('Please, check your information! You need to complete with one of then: EPPS, CRUZ, DUMMONT, MOLINA, JACKSON')
        }

        if(!Object.values(Modules).includes(Module)) {
            throw new Error ('Please, check your information! You need to complete with one of then: 1, 2, 3, 4, 5, 6, 7')
        }

        if(reqBody.night === true){
            reqBody.Class_Name = reqBody.Class_Name + ' na-night'          
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
