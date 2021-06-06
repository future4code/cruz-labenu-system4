import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createStudent from "./endpoints/create_student";
import createTeacher from "./endpoints/create_teacher";
import createClass from "./endpoints/create_class";
import getUserById from "./endpoints/getUserById";
import getStudentByClass from "./endpoints/getStudentByClass";
import getTeacherByClass from "./endpoints/getTeacherByClass";
import deleteStudent from "./endpoints/delete_Student";
import updateModule from "./endpoints/update_Module";
import deleteStudentFromClass from "./endpoints/deleteStudentFromClass";
import deleteTeacherFromClass from "./endpoints/deleteTeacherFromClass";
import getStudentsByHobby from "./endpoints/getStudentsByHobby";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/student", createStudent);
app.post("/teacher", createTeacher);
app.post("/class", createClass);
app.get("/students/class", getStudentByClass);
app.get("/teachers/class", getTeacherByClass);
app.get("/student/:id", getUserById);
app.get("/students/:hobbyId", getStudentsByHobby);
app.delete("/student", deleteStudent);
app.put("/class", updateModule);
app.put("/students/:studentId", deleteStudentFromClass);
app.put("/teachers/:teacherId", deleteTeacherFromClass);
