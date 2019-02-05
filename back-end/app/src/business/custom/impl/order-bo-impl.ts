import Promise=require("promise");

import {OrderBO} from "../order-bo";
import {OrderDTO} from "../../../dto/order-dto";
import {pool} from "../../../db/db-pool";

import {DAOType, getDAO} from "../../../dao/dao-factory";
import {OrderDAO} from "../../../dao/custom/order-dao";


export class OrderBoImpl implements OrderBO{
    deleteOrder(id: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDAO=<OrderDAO>getDAO(DAOType.ORDER, connection);
                    const promise=orderDAO.delete(id);
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

    findAllOrder(): Promise<Array<OrderDTO>> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDAO=<OrderDAO>getDAO(DAOType.ORDER, connection);
                    const promise=orderDAO.findAll();
                    promise.then(orders=>{
                        resolve(orders);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    findOrder(id: string): Promise<Array<OrderDTO>> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDAO=<OrderDAO>getDAO(DAOType.ORDER, connection);
                    const promise=orderDAO.find(id);
                    promise.then(order=>{
                        resolve(order);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    getOrderCount(): Promise<number> {

        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){

                    reject(err)
                }else{

                    const orderDAO=<OrderDAO>getDAO(DAOType.ORDER, connection);
                    const promise=orderDAO.countOfOrders();
                    promise.then(count=>{
                        resolve(count);
                    }).catch(error=>{
                        reject(error)
                    })
                }
            })
        })
    }

    saveOrder(orderDTO: OrderDTO): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const orderDAO = <OrderDAO> getDAO(DAOType.ORDER, connection);
                    const promise = orderDAO.save(orderDTO);
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

    updateOrder(orderDTO: OrderDTO): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDAO = <OrderDAO> getDAO(DAOType.ORDER, connection);

                    const promise = orderDAO.update(orderDTO);
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