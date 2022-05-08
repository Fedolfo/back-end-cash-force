import OrdersService from '../services/ordersService';
import { Request, Response } from 'express'

class OrdersController {

  private ordersService = new OrdersService();

  getAll = async (req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    return res.status(200).json(orders);
  }
}

export default OrdersController;