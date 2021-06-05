import {Request, Response} from 'express';
import {connection} from '../connection'


export default async function getTeacherByClass (req:Request, res:Response) {
    
    try {
        const result = await connection.raw(`
        SELECT TEACHER.Teacher_Name, CLASS.Class_Name FROM 
        TEACHER INNER JOIN CLASS ON 
        TEACHER.Id_Class = CLASS.Id_Class;
        `)
        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage}) 
    }

}