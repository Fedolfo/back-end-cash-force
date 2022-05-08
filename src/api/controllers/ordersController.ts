import OrdersService from '../services/ordersService';
import { Request, Response } from 'express'
import IOrdersController from 'api/typescript/interfaces/controllers/ordersControllers.interface';

class OrdersController implements IOrdersController {

  private ordersService = new OrdersService();

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAllOrders();
    return res.status(200).json(orders);
  }
}

export default OrdersController;