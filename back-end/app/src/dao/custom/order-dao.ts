import {Order} from "../../entity/place-order";

export interface OrderDAO extends CrudDAO<Order,string>{
    countOfOrders():Promise<number>;
}