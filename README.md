# API com Node.js, Prisma e Docker

Este projeto é um estudo para a criação de uma API que gerencia informações de pessoas e itens perdidos/encontrados. Utiliza Node.js como servidor, Prisma como ORM e Docker para gerenciamento de contêineres.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criação de servidores HTTP e APIs.
- **Prisma**: ORM para comunicação com o banco de dados PostgreSQL.
- **Docker**: Para criação e gerenciamento de contêineres, facilitando o desenvolvimento e a produção.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar dados.
- **Yup**: Biblioteca de validação de dados para garantir a integridade das informações.


## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/en/) (v14 ou superior)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)
- [Docker](https://www.docker.com/) e Docker Compose

## Configuração e Inicialização do Projeto

### Passo 1: Clonar o Repositório

Clone este repositório para sua máquina local:

git clone https://github.com/NatanaelSz/Estudos-API-JS.git

### Passo 2: Configuração do Banco de Dados com Docker

Utilize o Docker Compose para configurar e iniciar o banco de dados.

No arquivo **docker-compose.yml**, você encontrará as configurações do banco de dados.

Execute o comando para iniciar o banco de dados: **docker-compose up -d**

### Passo 3: Configuração do Prisma

1. Crie um arquivo .env na raiz do projeto com a URL de conexão do banco de dados:
**DATABASE_URL="postgresql://pguser:pgpassword@localhost:5435/nome_do_banco"**

2. Inicialize o Prisma e aplique as migrações:
**yarn prisma migrate dev --name init**  
**yarn prisma generate**

## Passo 4: Executar a API

1. Instale as dependências do projeto:
**yarn install** 

2. Inicie o servidor:
**yarn start** 

Agora a API estará disponível em **http://localhost:3001** 

## Observações
Este projeto é um estudo e pode ser aprimorado com autenticação, validações adicionais e testes automatizados.  

Se o banco de dados for reiniciado, será necessário executar novamente **yarn prisma migrate dev** para aplicar as migrações.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

Sinta-se à vontade para ajustar qualquer parte conforme necessário! Se precisar de mais alguma coisa ou alterações específicas, é só avisar.

