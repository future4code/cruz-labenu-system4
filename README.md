# LabenuSystem

https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5f0ddfa5457382057f17ceb2_gif_quebracabeca.gif

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

### 🟠 Em Construção

→ Exibir estudantes que possuam o mesmo hobby;

→ Remover estudante de uma turma;

→ Remover docente de uma turma;

### 🟠 Acessando o Projeto

1. Após baixar, instale as bibliotecas →  npm  i ;
2. Criar as tabelas com o Script de CreateTable.txt na seguinte  ordem:

[createTable.txt](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/createTable.txt)

- Criar a Tabela de Classe - CLASS;
- Criar a Tabela de Estudante - STUDENT;
- Criar a Tabela de Professor - TEACHER;
- Criar Tabela de Passatempo - HOBBY;
- Criar a Tabela Estudante-Passatempo - Student_Hobby;
- Criar a Tabela Especialidade - SPECIALITY;
- Criar a Tabela Professor-Especialidade -TEACHER_SPECIALITY;

3. Popular tabela com o Script de PopulateTable.txt

[populateTable.txt](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/populateTable.txt)

### 🟠 Endpoints

**Arquivo Json Postman** →

[LabeSystem.postman_collection.json](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/LabeSystem.postman_collection.json)

### 1. Criar Estudante

![LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/criarAluno.png](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/criarAluno.png)

### 2. Criar Docente

![LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/criarProfessor.png](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/criarProfessor.png)

### 3. Criar Turma

![LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/criarClasse.png](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/criarClasse.png)

### 4. Pegar Estudante por Turma

![LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/pegarEstudanteporClasse.png](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/pegarEstudanteporClasse.png)

### 5. Pegar Professor por Turma

![LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/PegarProfessorPorClass.png](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/PegarProfessorPorClass.png)

### 6. Pegar Estudante por Id

![LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/PegarEstudantePorId.png](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/PegarEstudantePorId.png)

### 7. Deletar Estudante do Sistema

![LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/DeletarEstudante.png](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/DeletarEstudante.png)

### 8. Atualizar Módulo

![LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/AtualizarModulo.png](LabenuSystem%20d9c3f6b363684185838d9e3fe0211735/AtualizarModulo.png)
