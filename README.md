# Projeto back-end-Cash-force

## Sobre o projeto

Back-end do CashForce é uma API de simulação de ERP(Enterprise Resource Planning).

Desenvolvido para ser consumido para o front-end onde simula uma tabela ERP [front-end](https://github.com/Fedolfo/front-end-cash-force)

## Tecnologias utilizadas

* NodeJs
* Express
* Programação orientada a objetos
* TypeScript
* Mocha, Chai e Sinon
* Sequelize
* MYSQL
* Docker

## Bibliotecas utilizadas

* express-async-errors
* shelljs
* superagent

## Para ser feito a instalação do projeto em sua máquina dockerizado

É necessário ter [docker](https://docs.docker.com/get-docker/)

1. Clone o repositório
```bash
  git clone `git@github.com:Fedolfo/back-end-cash-force.git`
```
2. Entre no arquivo
```bash
  cd back-end-cash-force
```
3. Suba o containêr(Está com erro de compilação do typescript).
```bash
docker build . -t back-cash
docker run -it -p 3001:3001 --rm --name back-cash-force back-cash
```

Só é possivel instalar o back-end localmente >:(

4. Instale as dependências
```bash
npm install
```
5. Inicie o aplicativo
```bash
npm run nodemon
```

6. Para acessar a aplicação
```bash
  back-end: localhost:3001/orders
```
