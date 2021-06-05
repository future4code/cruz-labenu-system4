import {Request, Response} from 'express';
import {connection} from '../connection'


export default async function getStudentByClass (req:Request, res:Response) {
    
    try {
        const result = await connection.raw(`
            SELECT STUDENT.Student_Name, CLASS.Class_Name FROM 
            STUDENT INNER JOIN CLASS ON
            STUDENT.Id_Class = CLASS.Id_Class;
        `)
        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage}) 
    }

}