import { BaseModel } from "./base-model";
import { BusinessModel } from "./business-model";
import { ProductModel } from "./product-model";
import { UserModel } from "./user-model";

export class RatingModel extends BaseModel {
  public starValue: number;
  public comment: string;
  public user: UserModel;
  public business: BusinessModel;
  public product: ProductModel;
}
