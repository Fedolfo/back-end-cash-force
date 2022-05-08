import Buyers from '../../database/models/buyers';
import Cnpjs from '../../database/models/cnpjs';
import Providers from '../../database/models/users';
import Orders from '../../database/models/orders';
import Users from '../../database/models/users';

class OrdersService {

  private orders = Orders;

  private buyers = Buyers;

  private providers = Providers;

  private cnpjs = Cnpjs;

  private users = Users;

  async getAll() {
    return await this.orders.findAll({
      include: [
        {
          model: this.buyers,
          as: 'buyer',
        },
        {
          model: this.providers,
          as: 'provider',
          all: true,
        },
        {
          model: this.cnpjs,
          as: 'cnpj',
        },
        {
          model: this.users,
          as: 'user',
          all: true,
        }
      ],
    });
  }
}

export default OrdersService;
