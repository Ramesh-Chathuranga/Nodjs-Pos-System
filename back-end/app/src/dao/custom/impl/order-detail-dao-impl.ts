import {OrderDetailDAO} from "../order-detail-dao";
import Promise=require("promise");
import {OrderDetail} from "../../../entity/order-detail";
import {PoolConnection} from "mysql";


export class OrderDetailDaoImpl implements OrderDetailDAO{

    constructor(private connection:PoolConnection){}

    orderDetailCount(): Promise<number> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`select  count(*) from orderdetail ;`,
                (err,result)=>{
                    if(err){
                        reject(err);
                    }else {
                        console.log(result[0]["count(*)"]);
                        resolve(result[0]["count(*)"]);
                    }
                })
        })
    }

    delete(id: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Delete from orderdetail Where id='${id}'`,
                (err,result,field)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result.affectedRows>0);
                    }
                })
        })
    }

    find(id: string): Promise<Array<OrderDetail>> {

        return new Promise((resolve,reject)=>{
            this.connection.query(`Select * from orderdetail where orderId='${id}'`,
                (err,result)=>{
                    if(err){

                        reject(err);
                    }else {

                        resolve(result);
                    }
                })
        })
    }

    findAll(): Promise<Array<OrderDetail>> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Select * from orderdetail`,
                (err,result)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(result);
                    }
            })
        })
    }

    save(entity: OrderDetail): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Insert into orderdetail values ('${entity.orderId}','${entity.itemCode}','${entity.qty}','${entity.unitPrice}')`,
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

    update(entity: OrderDetail): Promise<boolean> {
        return new Promise((resolve,reject)=>{

        })
    }

}