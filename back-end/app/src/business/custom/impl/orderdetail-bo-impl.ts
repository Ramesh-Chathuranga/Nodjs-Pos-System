import Promise=require("promise");

import {OrderDetailBO} from "../order-detail-bo";
import {OrderDetailDTO} from "../../../dto/order-detail";
import {pool} from "../../../db/db-pool";
import {DAOType, getDAO} from "../../../dao/dao-factory";
import {OrderDetailDAO} from "../../../dao/custom/order-detail-dao";


export class OrderdetailBoImpl implements OrderDetailBO{
    deleteOrderDetail(id: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDetailDAO=<OrderDetailDAO>getDAO(DAOType.Order_Detail, connection);
                    const promise=orderDetailDAO.delete(id);
                    promise.then(result=>{
                        resolve(result);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    findAllOrderDetail(): Promise<Array<OrderDetailDTO>> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDetailDAO=<OrderDetailDAO>getDAO(DAOType.Order_Detail, connection);
                    const promise=orderDetailDAO.findAll();
                    promise.then(orderDetails=>{
                        resolve(orderDetails);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    findOrderDetail(id: string): Promise<Array<OrderDetailDTO>> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDetailDAO=<OrderDetailDAO>getDAO(DAOType.Order_Detail, connection);
                    const promise=orderDetailDAO.find(id);
                    promise.then(orderDetail=>{
                        resolve(orderDetail);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    getOrderDetailCount(): Promise<number> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err)
                }else{
                    const orderDetailDAO=<OrderDetailDAO>getDAO(DAOType.Order_Detail, connection);
                    const promise=orderDetailDAO.orderDetailCount();
                    promise.then(count=>{
                        resolve(count);
                    }).catch(error=>{
                        reject(error)
                    })
                }
            })
        })
    }

    saveOrderDetail(orderDetailDTO: OrderDetailDTO): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDetailDAO = <OrderDetailDAO> getDAO(DAOType.Order_Detail, connection);
                    const promise = orderDetailDAO.save(orderDetailDTO);
                    promise.then(result=>{
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    updateOrderDetail(orderDetailDTO: OrderDetailDTO): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDetailDAO = <OrderDetailDAO> getDAO(DAOType.Order_Detail, connection);

                    const promise = orderDetailDAO.update(orderDetailDTO);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });
        })
    }
    
}