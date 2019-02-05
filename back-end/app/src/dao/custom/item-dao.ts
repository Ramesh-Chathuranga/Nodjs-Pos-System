import {Item} from "../../entity/item";

export interface ItemDAO extends CrudDAO<Item, string>{
   countOfItems():Promise<number>;
}