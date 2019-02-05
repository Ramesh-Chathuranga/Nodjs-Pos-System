import {OrderDTO} from "../../dto/order-dto";


export interface OrderBO {
    saveOrder(customerDTO:OrderDTO):Promise<boolean>;
    updateOrder(customerDTO:OrderDTO):Promise<boolean>;
    deleteOrder(id:string):Promise<boolean>;
    findOrder(id:string):Promise<Array<OrderDTO>>;
    findAllOrder():Promise<Array<OrderDTO>>;
    getOrderCount():Promise<number>;
}