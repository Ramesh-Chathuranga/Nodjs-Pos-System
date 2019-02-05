import {OrderDetailDTO} from "../../dto/order-detail";


export interface OrderDetailBO {
    saveOrderDetail(customerDTO:OrderDetailDTO):Promise<boolean>;
    updateOrderDetail(customerDTO:OrderDetailDTO):Promise<boolean>;
    deleteOrderDetail(id:string):Promise<boolean>;
    findOrderDetail(id:string):Promise<Array<OrderDetailDTO>>;
    findAllOrderDetail():Promise<Array<OrderDetailDTO>>;
    getOrderDetailCount():Promise<number>;
}