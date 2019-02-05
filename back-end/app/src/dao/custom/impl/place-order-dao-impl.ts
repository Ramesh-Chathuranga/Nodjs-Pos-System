import {OrderDAO} from "../order-dao";
import Promise=require("promise");
import {Order} from "../../../entity/place-order";
import {PoolConnection} from "mysql";



export class OrderDAOImpl implements OrderDAO{
    constructor(private connection:PoolConnection){}

    countOfOrders(): Promise<number> {
        return new Promise((resolve,reject)=>{
            this.connection.query("SELECT count(*)  From orders ",
                (err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        console.log(result[0]['count(*)'])
                        resolve(result[0]['count(*)']);
                    }
            });
        })
    }

    delete(id: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Delete from orders Where id='${id}'`,
                (err,result,field)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result.affectedRows>0);
                    }
                })
        })
    }

    find(id: string): Promise<Array<Order>> {
        return new Promise((resolve,reject)=>{

            this.connection.query(`select * from orders where id='${id}'`,
                (err,result,field)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(result)
                    }
                })
        })
    }

    findAll(): Promise<Array<Order>> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Select * from orders`,
                (err,result)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(result);
                    }
            })
        })
    }

    save(entity: Order): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Insert into orders values ('${entity.orderId}','${entity.date}','${entity.customerId}')`,
                (err,result,field)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result.affectedRows>0);
                    }
                }
            )
        })
    }

    update(entity: Order): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`UPDATE orders SET customerId = '${entity.customerId}', date ='${entity.date}' WHERE id='${entity.orderId}'`,
                (err,result)=>{

                    if(err){
                        console.log(3)
                        reject(err);
                    }else{
                        console.log(4,result.affectedRows>0)
                        resolve(result.affectedRows>0)
                    }
                })
        })
    }

}