export type Student ={
    Id_Student : number,
    Student_Name: string,
    Student_Email: string,
    Birth_Date: string,
    Id_Class:number,
}

export type Teacher ={
    Id_Teacher:number,
    Id_Class:number ,
    Teacher_Name:string,
    Teacher_Email:string,
    Birth_Date:string
}

export type Class ={
    Id_Class:number,
    Class_Name:string,
    Initial_Date:string,
    Final_Date:string,
    Module:number
}

export enum Modules {
    mod0 = 0, 
    mod1 = 1,
    mod2 = 2,
    mod3 = 3,
    mod4 = 4,
    mod5 = 5,
    mod6 = 6,
    mod7 = 7
} 

export enum ClassName {
    EPPS = 'EPPS',
    CRUZ = 'CRUZ',
    DUMMONT = 'DUMMONT',
    MOLINA = 'MOLINA',
    JACKSON = 'JACKSON'
} 

export enum TeacherSkills {
    REACT = 'REACT',
    REDUX = 'REDUX',
    CSS = 'CSS',
    TESTES = 'TESTES',
    TYPESCRIPT = 'TYPESCRIPT',
    POO = 'POO',
    BACKEND = 'BACKEND'
}