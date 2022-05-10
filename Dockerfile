FROM node:16-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3001

RUN adduser -D CashForce

USER CashForce

ENTRYPOINT ["npm", "start"]