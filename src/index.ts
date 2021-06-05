import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import createStudent from './endpoints/create_student';
import createTeacher from './endpoints/create_teacher';
import createClass from './endpoints/create_class';
import getUserById from './endpoints/getUserById';
import getStudentByClass from './endpoints/getStudentByClass'

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

app.post('/student', createStudent)
app.post('/teacher', createTeacher)
app.post('/class', createClass)
app.get('/student/:id', getUserById)
app.get('/students/class', getStudentByClass)
