import {Request, Response} from 'express';
import {connection} from '../connection'


export default async function deleteStudent(req:Request,res:Response){
   
    const email = req.body.email;

    try{
        await connection.raw(`
           DELETE FROM STUDENT WHERE Student_Email = "${email}" 
        `)
        res.status(200).send('student removed successfully')
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage}) 
    }
}    
