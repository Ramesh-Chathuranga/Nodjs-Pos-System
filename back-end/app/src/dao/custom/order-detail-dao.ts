import {OrderDetail} from "../../entity/order-detail";

export interface OrderDetailDAO extends CrudDAO<OrderDetail,string>{
   orderDetailCount():Promise<number>;
}