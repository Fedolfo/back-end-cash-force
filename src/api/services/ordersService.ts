import Orders from '../../database/models/orders';

class OrdersService {

  private orders = Orders;

  async getAll() {
    return await this.orders.findAll();
  }
}

export default OrdersService;
