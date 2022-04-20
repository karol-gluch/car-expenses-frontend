import { Category } from "./Category";

export class Expense {
    public id: number;
    public name: string;
    public cost: number;
    public place: string;
    public actualDate: string;
    public category: Category;
}