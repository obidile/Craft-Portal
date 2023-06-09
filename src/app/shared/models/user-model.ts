import { AccountTypeEnum } from "../enums/acountTypeEnum";
import { BaseModel } from "./base-model";
import { BusinessModel } from "./business-model";
import { OrderModel } from "./order-model";
import { ProductModel } from "./product-model";
import { RatingModel } from "./rating-model";

export class UserModel extends BaseModel {
  firstName: string;
  lastName: string;
  mailAddress: string;
  phoneNumber: string;
  accountType: AccountTypeEnum;
  imageUrl: string;
  isActive: boolean;
  verificationCode: string;
  isVerified: boolean;
  deactivated: boolean;
  passwordHush: string;
  businesses: BusinessModel[];
  products: ProductModel[];
  orders: OrderModel[];
  ratings: RatingModel[];
}