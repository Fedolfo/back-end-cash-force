# Projeto Front-end-Cash-force

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

## Bibliotecas utilizadas

* Axios

## Para ser feito a instalação do projeto em sua máquina dockerizado

É necessário ter [docker](https://docs.docker.com/get-docker/) e [docker-compose](https://docs.docker.com/compose/install/)

1. Clone o repositório
```bash
  git clone `git@github.com:Fedolfo/back-end-cash-force.git`
```
2. Entre no arquivo
```bash
  cd back-end-cash-force
```
3. Suba os containêrs
```bash
  npm run compose:up ou docker-compose up -d --build
```
4. No momento que subir os contain{er retornará essa messagem no terminal
```bash
  Creating db ... done
  Creating cash_force           ... done
  Creating cash_force_migration ... done
```
5. Para acessar as aplicação
```bash
  back-end: localhost:3001/orders
```
1. Para rodar os testes de integração
```bash
  docker-compose exec backend npm test
```
7. Para remover a API
```bash
  docker-compose down --rmi local --volumes --remove-orphans