import {Request, Response} from 'express';
import {Teacher, TeacherSkills} from '../types';
import {connection} from '../connection'


export default async function createTeacher(req:Request,res:Response){
const reqBody = req.body
try{

  

    if(!reqBody.Id_Teacher || !reqBody.Id_Class|| !reqBody.Teacher_Name || !reqBody.Teacher_Email || !reqBody.Birth_Date){
        throw new Error ('Please, check your information! You need complete all! of then!')
    }
    const newTeacher: Teacher  = {
        Id_Teacher : reqBody.Id_Teacher,
        Id_Class : reqBody.Id_Class,
        Teacher_Name : reqBody.Teacher_Name,
        Birth_Date: reqBody.Birth_Date,
        Teacher_Email : reqBody.Teacher_Email
    }
    await connection('TEACHER').insert(newTeacher)
        res.status(200).send('teacher added successfully')
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage}) 
    }
}    
