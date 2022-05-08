import interfaceByOrders from "api/typescript/interfaces/models/ordersModel.interface";
import IOrderServices from "api/typescript/interfaces/services/ordersServices.interface";
import Buyers from "../../database/models/buyers";
import Cnpjs from "../../database/models/cnpjs";
import Orders from "../../database/models/orders";
import Providers from "../../database/models/providers";
import Users from "../../database/models/users";

class OrdersService implements IOrderServices {

  private orders = Orders;

  private buyers = Buyers;

  private providers = Providers;

  private cnpjs = Cnpjs;

  private users = Users;

  public async getAllOrders(): Promise<interfaceByOrders[]> {
    return (await this.orders.findAll({
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
    })).map((order) => {
      return order.get({ plain: true });
    });
  }
}

export default OrdersService;
