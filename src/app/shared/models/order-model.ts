import { OrderStatus } from "../enums/orderStatusEnum";
import { BusinessModel } from "./business-model";
import { OrderItemModel } from "./orderItem-model";
import { UserModel } from "./user-model";

export class OrderModel {
  public anonymousId: string;
  public orderStatus: OrderStatus;
  public deliveryAddress: string;
  public totalPrice: number;
  public paymentDate: Date;
  public userId?: number;
  public user?: UserModel;
  public businessId: number;
  public business: BusinessModel;
  public orderItems: OrderItemModel[];
}

