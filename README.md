![](cover_banner.svg)

# Programação Web 1
Prof. José Roberto Bezerra

### Introdução
Arquivo fonte utilizado na Aula 11. Demonstra como utilizar o MongoDB em um projeto Node.js com Express através da criação de um *Data Access Object* (DAO) separando a lógica de acesso aos dados da lógica da aplicação.

### Objetivo
Utilizar como modelo/exemplo de classe DAO para acesso a um banco de dados em uma aplicação Node.js com Express

### Instruções 

1. Clonar o projeto no seu ambiente de trabalho `git clone LINK_DO_GIT`
2. Verificar as permissões de acesso ao *cluster* do Atlas
    - Nome do usuário: Security -> Database Access
    - Verificar ou cadastrar senha para o usuário: Edit -> Password -> Edit Password -> Update User
    - Verifique a partir de qual endereço IP o *cluster* pode ser acessado: Security -> Network Access (0.0.0.0/0 permite acesso de qualquer IP)
3. Copiar a *connection string* (ou *connection* URI)
    - DATABASE -> Clusters -> Connect -> MongoDB for VS Code
    - Copie o *link* que começa com `mongodb+srv`
4. Criar um arquivo com o nome `.env` na raiz do projeto e adicione as linhas: 
    - `URI = {SUA_CONNNECTION_STRING}`
    - `DB = {NOME_DO_BD}`
    - `COLL = {NOME_DA_COLLECTION}`
5. Colar a CS na atribuição da variável de nome `URI` e demais variáveis 
6. Fazer as devidas alterações em cada arquivo que utiliza a CS em `app.js`
    - `require('dotenv').config()`
    - `URI = process.env.URI`, etc
7. Outras variáveis podem ser acrescentadas ao `.env`
8. Acrescente `.env` no arquivo `.gitignore`

### Referências
- [O que é Data Access Object](https://lbodev.com.br/glossario/o-que-e-data-access-object-dao/)
- [dotenv](https://www.npmjs.com/package/dotenv)