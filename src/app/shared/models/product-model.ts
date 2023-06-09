import { BaseModel } from "./base-model";
import { BusinessModel } from "./business-model";
import { OrderModel } from "./order-model";
import { RatingModel } from "./rating-model";

export class ProductModel extends BaseModel {
  public name: string;
  public description: string;
  public price: number;
  public quantity: number;
  public imageUrl: string;
  public business: BusinessModel;
//   public category: CategoryModel;
  public orders: OrderModel[];
  public ratings: RatingModel[];
}
