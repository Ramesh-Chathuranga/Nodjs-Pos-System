import {ItemDAO} from "../item-dao";
import {Item} from "../../../entity/item";
import Promise=require("promise");
import {PoolConnection} from "mysql";



export class ItemDaoImpl implements ItemDAO{
    constructor(private connection:PoolConnection){}

    countOfItems(): Promise<number> {
        return new Promise((resolve,reject)=>{
            this.connection.query("SELECT count(*)  From item",
                (err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result[0]['count(*)']);
                    }
                });
        })
    }

    delete(code: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Delete from item Where code='${code}'`,
                (err,result,field)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result.affectedRows>0);
                    }
                })
        })
    }

    find(code: string): Promise<Array<Item>> {

        return new Promise((resolve,reject)=>{
            this.connection.query(`select * from item where code='${code}'`,
                (err,result,field)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(result)
                    }
                })
        })
    }

    findAll(): Promise<Array<Item>> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Select * from item`,
                (err,result)=>{
                    if(err){
                        reject(err);
                    }else {
                        resolve(result);
                    }
                })
        })
    }

    save(entity: Item): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Insert into item values ('${entity.code}','${entity.description}','${entity.unitPrice}','${entity.qtyOnHand}')`,
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

    update(entity: Item): Promise<boolean> {
        return new Promise((resolve,reject)=>{

            this.connection.query(`UPDATE item SET description = '${entity.description}', unitPrice ='${entity.unitPrice}', qtyOnHand ='${entity.qtyOnHand}' WHERE code='${entity.code}'`,
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