import chai from 'chai'
import { exec } from 'shelljs'
import chaiHttp from 'chai-http'

import { app } from '../api/app'

import { Response } from 'superagent'

import ordersList from './mock/ordersList'

chai.use(chaiHttp)

const { expect } = chai;

describe('orders endpoint', () => {
  let chaiHttpResponse: Response;

  beforeEach(() => {
    exec('npm run db:reset')
  });

  it('deve devolver todos os pedidos', async () => {
    chaiHttpResponse = await chai.request(app).get('/orders');
    expect(chaiHttpResponse.status).to.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(ordersList);
  });
})