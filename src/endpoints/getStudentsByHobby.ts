import {Request, Response} from 'express';
import {connection} from '../connection'


export default async function getStudentsByHobby (req:Request, res:Response) {
    
    try {
        const Hobby_Id = req.params.hobbyId;

       
        const result = await connection.raw(`
        SELECT STUDENT.Student_Name, HOBBY.Hobby_Name 
        FROM STUDENT INNER JOIN STUDENT_HOBBY 
        ON STUDENT.Id_Student = STUDENT_HOBBY.Student_Id
        INNER JOIN HOBBY ON STUDENT_HOBBY.Hobby_Id = HOBBY.Id_Hobby
        WHERE Hobby_Id = ${Hobby_Id};
        `)
        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send({message:error.message || error.sqlMessage}) 
    }

}