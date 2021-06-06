import { Request, Response } from "express";
import { connection } from "../connection";

export default async function deleteStudentFromClass(
  req: Request,
  res: Response
) {
  try {
    const classId = req.query.classId;
    const teacherId = req.params.teacherId;

    if (!classId && !teacherId) {
      throw new Error("Type valids values: classId and studentId required!");
    }

    await connection.raw(`
        UPDATE TEACHER
        SET Id_Class = NULL
        WHERE Id_Teacher = ${teacherId} AND Id_Class = ${classId};
        
        `);

    const result = await connection.raw(`
        SELECT * FROM TEACHER WHERE Id_Teacher = ${teacherId}
       `);
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
