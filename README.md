# Projeto back-end-Cash-force

## Sobre o projeto

Back-end do CashForce é uma API de simulação de ERP(Enterprise Resource Planning).

Desenvolvido para ser consumido para o front-end, onde simula uma tabela ERP [front-end](https://github.com/Fedolfo/front-end-cash-force)

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

É necessário ter [docker](https://docs.docker.com/get-docker/) e [docker-compose](https://docs.docker.com/compose/install/)

1. Clone o repositório
```bash
  git clone git@github.com:Fedolfo/back-end-cash-force.git
```
2. Entre no arquivo
```bash
  cd back-end-cash-force
```
⚠️ Caso ocorra algum erro de versão, troque no docker-compose o version para '2.1'

3. Suba os containêrs
```bash
  npm run compose:up ou docker-compose up -d --build
```
4. No momento que subir os containêr retornará essa messagem no terminal
```bash
  Creating db ... done
  Creating cash_force           ... done
  Creating cash_force_migration ... done
```
5. Para acessar a aplicação
```bash
  back-end: localhost:3001/orders
```
6. Para rodar os testes de integração
```bash
  docker-compose exec backend npm test
```
7. Para remover a API
```bash
  docker-compose down --rmi local --volumes --remove-orphans
