import { State } from "@popperjs/core";
import { Business } from "../services/business-service";

export class SchoolModel {
  public name: string;
  public isActive: boolean;
  public state: State;
  public businesses: Business[];
}
