import IOrderAttributes from "../models/ordersModel.interface";

export default interface IOrderServices {
  getAllOrders(): Promise<IOrderAttributes[]>;
}