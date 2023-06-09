import { StateModel } from "./state-model";
export class CountryModel {
    public name: string;
    public flagUrl: string;
    public isActive: boolean;
    public code: string;
    public states: StateModel[];
}
