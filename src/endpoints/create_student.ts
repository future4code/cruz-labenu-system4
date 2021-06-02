import {Request, Response} from 'express';
import {Student} from '../types';
import {connection} from '../connection'


export default async function createStudent(req:Request,res:Response){
    const reqBody = req.body
    try{

        if(!reqBody.Id_Student || !reqBody.Student_Name || !reqBody.Student_Email || !reqBody.Birth_Date || !reqBody.Id_Class){
            throw new Error ('Please, check your information! You need complete all! of then!')
        }
        const newStudent: Student = {
            Id_Student : reqBody.Id_Student,
            Student_Name : reqBody.Student_Name,
            Birth_Date: reqBody.Birth_Date,
            Student_Email : reqBody.Student_Email,
            Id_Class : reqBody.Id_Class
        }
        await connection('STUDENT').insert(newStudent)
        res.status(200).send('student added successfully')
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage}) 
    }
}    
