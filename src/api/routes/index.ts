import OrdersController from '../controllers/ordersController';
import CommonRoutesConfig from './commonRoutesConfig';

class OrderRoute extends CommonRoutesConfig {

  private ordersController: OrdersController;

  constructor() {
    super();
    this.ordersController = new OrdersController();
    this.configureRoutes();
  }

  configureRoutes() {
    this.router.get(
      '/orders',
      this.ordersController.getAll,
    );
  }
}

export default OrderRoute;