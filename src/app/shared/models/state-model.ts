import { Business } from "../services/business-service";
import { Country } from "../services/country-service";


export class StateModel {
  public countryId: number;
  public name: string;
  public isActive: boolean;
  public country: Country;
  public businesses: Business[];
}
