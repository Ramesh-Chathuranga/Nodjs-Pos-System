import {CustomerBoImpl} from "./custom/impl/customer-bo-impl";
import {ItemBoImpl} from "./custom/impl/item-bo-impl";
import {OrderBoImpl} from "./custom/impl/order-bo-impl";
import {OrderdetailBoImpl} from "./custom/impl/orderdetail-bo-impl";

export  enum BOType{
    CUSTOMER,ITEM,ORDER,ORDER_DETAIL
}

export function getBO(botype:BOType) {
    switch (botype) {
        case BOType.CUSTOMER:
            return new CustomerBoImpl();
        case BOType.ITEM:
            return new ItemBoImpl();
        case BOType.ORDER:
            return new OrderBoImpl();
        case BOType.ORDER_DETAIL:
            return new OrderdetailBoImpl();
    }
}