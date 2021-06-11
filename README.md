
![Capas Github](https://user-images.githubusercontent.com/52434685/120907410-7dbd7000-c637-11eb-83cf-dd7ac8812e02.png)

# LabenuSystem




<img src="https://user-images.githubusercontent.com/52434685/120907235-44d0cb80-c636-11eb-94f4-37fc890a2ceb.gif" width="100">


**Bem-vindo a escola de programação onde a educação se reinventa!** 

Na Labenu você aprende a **programar** do zero! São 6 meses de experiência focadas em

**empregabilidade** para ingressar no mercado de tecnologia. **Aulas ao vivo e de onde você estiver**

### 🟠 Quem Faz

[Fayra Miranda](https://github.com/MirandaFayra) 

[Nathalia Mesquita](https://github.com/nathaliacardoso)

[Paula Vitória](https://github.com/paula-lopes)

### 🟠 Objetivo do Projeto

Este é um projeto de Back-end, cujo o principal objetivo é realizar um sistema básico de gestão de dados da Labenu  e fixar os conteúdos estudados : **Express, Typescript, Node.js, Postman MySQL e Knex**.

### 🟠  Modelagem do Banco

Para esse projeto são modelados três entidades : **Estudante (STUDENT), Professor (TEACHER)** e **Turma(CLASS)**.  Cada um com as seguintes caracteristicas :

→ Estudante -  id, nome, email, data de nascimento e os principais hobbies;

→ Professor - id, nome, email, data de nascimento e todas as especialidades ;

→ Classe - id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

![Untitled](https://user-images.githubusercontent.com/52434685/120907206-16eb8700-c636-11eb-936f-d5212a4c5a36.png)


### 🟠 Requisitos Executados

✔ Criar estudante;

✔ Criar docente ;

✔  Criar turma;

✔ Adicionar estudante na turma;

✔ Adicionar docente na turma;

✔ Pegar a idade de algum estudante a partir do id;

✔ Exibir estudantes de uma turma;

✔ Exibir docentes de uma turma;

 ✔ Remover estudante;

✔  Mudar turma de módulo.

✔ Exibir estudantes que possuam o mesmo hobby;

✔Remover estudante de uma turma;

✔ Remover docente de uma turma;

### 🟠 Acessando o Projeto

1. Após baixar, instale as bibliotecas →  npm  i ;
2. Criar as tabelas com o Script de CreateTable.txt na seguinte  ordem:



[createTable.txt](https://github.com/future4code/cruz-labenu-system4/files/6604839/createTable.txt)


- Criar a Tabela de Classe - CLASS;
- Criar a Tabela de Estudante - STUDENT;
- Criar a Tabela de Professor - TEACHER;
- Criar Tabela de Passatempo - HOBBY;
- Criar a Tabela Estudante-Passatempo - Student_Hobby;
- Criar a Tabela Especialidade - SPECIALITY;
- Criar a Tabela Professor-Especialidade -TEACHER_SPECIALITY;

3. Popular tabela com o Script de PopulateTable.txt

[populateTable.txt](https://github.com/future4code/cruz-labenu-system4/files/6604826/populateTable.txt)




### 🟠 Endpoints

**Arquivo Json Postman** → 




### 1. Criar Estudante

![criarAluno](https://user-images.githubusercontent.com/52434685/120907260-777ac400-c636-11eb-9e13-e01da1b82e84.png)


### 2. Criar Docente

![criarProfessor](https://user-images.githubusercontent.com/52434685/120907263-7f3a6880-c636-11eb-852a-039c4a5a3da6.png)


### 3. Criar Turma

![criarClasse](https://user-images.githubusercontent.com/52434685/120907275-8cefee00-c636-11eb-8129-17719767b133.png)


### 4. Pegar Estudante por Turma

![pegarEstudanteporClasse](https://user-images.githubusercontent.com/52434685/120907280-9bd6a080-c636-11eb-9bc9-75061d9d5aeb.png)


### 5. Pegar Professor por Turma

![PegarProfessorPorClass](https://user-images.githubusercontent.com/52434685/120907289-aabd5300-c636-11eb-92ab-1bb398473574.png)


### 6. Pegar Estudante por Id

![PegarEstudantePorId](https://user-images.githubusercontent.com/52434685/120907304-b90b6f00-c636-11eb-9e27-6133352e7a3a.png)


### 7. Deletar Estudante do Sistema

![DeletarEstudante](https://user-images.githubusercontent.com/52434685/120907315-c0327d00-c636-11eb-9141-0b6dc2f1250a.png)


### 8. Atualizar Módulo

![AtualizarModulo](https://user-images.githubusercontent.com/52434685/120907321-c9234e80-c636-11eb-8e29-90feb5043aa8.png)

### 9. Deletar estudante de uma classe
![deleteStudentFromClass](https://user-images.githubusercontent.com/77751963/120937862-4f4a9e00-c6e6-11eb-9f1d-d4e65d9b48b0.png)

### 10. Deletar Professor de uma classe
![deleteTeacherFromClass](https://user-images.githubusercontent.com/77751963/120937879-6be6d600-c6e6-11eb-8c58-99dea15e066e.png)

### 11. Buscar estudante pelo hobby
![getStudentsByHobby](https://user-images.githubusercontent.com/77751963/120937889-773a0180-c6e6-11eb-9359-daaeff1d10ef.png)



