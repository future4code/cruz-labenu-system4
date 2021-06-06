import { Request, Response } from "express";
import { connection } from "../connection";

export default async function deleteStudentFromClass(
  req: Request,
  res: Response
) {
  try {
    const classId = req.query.classId;
    const studentId = req.params.studentId;

    if ((!classId && !studentId) || classId === "" || studentId === "") {
      throw new Error("Class id  and student id required!");
    }

    await connection.raw(`
        UPDATE STUDENT
        SET Id_Class = NULL
        WHERE Id_Student = ${studentId} AND Id_Class = "${classId}";
        
        `);

    const result = await connection.raw(`
        SELECT * FROM STUDENT WHERE Id_student = ${studentId}
       `);
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
