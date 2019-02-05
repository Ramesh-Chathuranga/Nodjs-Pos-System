import {PoolConnection} from "mysql";
import {CustomerDAOImpl} from "./custom/impl/customer-dao.impl";
import {OrderDAOImpl} from "./custom/impl/place-order-dao-impl";
import {ItemDaoImpl} from "./custom/impl/item-dao-impl";
import {OrderDetailDaoImpl} from "./custom/impl/order-detail-dao-impl";

export  enum DAOType{
    CUSTOMER,ITEM,ORDER,Order_Detail
}

export function getDAO(daoType:DAOType,connection:PoolConnection){
   switch(daoType){
       case DAOType.CUSTOMER:
           return new CustomerDAOImpl(connection);
       case DAOType.ITEM:
           return new ItemDaoImpl(connection);
       case DAOType.ORDER:
           return new OrderDAOImpl(connection);
       case DAOType.Order_Detail:
           return new OrderDetailDaoImpl(connection);
   }
}
