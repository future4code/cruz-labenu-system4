import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());


type Student ={
    Id_Student : number,
    Student_Name: string,
    Student_Email: string,
    birth_Date: string,
    Id_Class:number,
}

type Teacher ={
    Id_Teacher:number,
    Id_Class:number ,
    Teacher_Name:string,
    Teacher_Email:string,
    Birth_Date:string
}

type Class ={
    Id_Class:number,
    Class_Name:string,
    Initial_Date:string,
    Final_Date:string,
    Module:number
}

enum Module {
    mod1 = 1,
    mod2 = 2,
    mod3 = 3,
    mod4 = 4,
    mod5 = 5,
    mod6 = 6,
    mod7 = 7
} 


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});