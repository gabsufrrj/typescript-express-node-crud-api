## Resumo

Nesse projeto foi desenvolvida uma REST API utilizando arquitetura de software MSC através de TypeScript, Node.Js e Express. O objetivo foi praticar a linguagem TS e seus conceitos de tipagem juntamente com a criação de interfaces e classes.

A API gerencia um banco de dados através do modelo CRUD que permite criar,listar, atualizar e deletar as informações ali presentes.


## Tecnologias

TypeScript

Node.js

Express

MySQL

JWT


## Como executar
1. Clone o projeto e acesse a pasta do mesmo.
2. Rode o comando npm install no seu terminal.
3. Rode o comando docker-compose up -d no seu terminal.
4. Abra o terminal através do container node criado.
5. Execute dentro do terminal do container (aquele que acabou de abrir), se necessário, o comando npm install.
6. Configure suas variáveis de ambiente em um arquivo .env e modifique o arquivo connection.ts dentro da pasta src/models para que ele consiga lê-las.
6. Rode o comando npm run restore para criar o banco de dados.
7. Rode o comando npm run dev dentro do terminal do seu container.
8. A partir daí será possível acessar a API, utilize ferramentas como POSTMAN, INSOMNIA e THUNDERCLIENT para executar as querys criadas.


Bom code review!
