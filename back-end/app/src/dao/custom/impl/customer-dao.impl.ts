import {CustomerDAO} from "../customer-dao";
import {Customer} from "../../../entity/customer";
import Promise=require("promise");
import {PoolConnection} from "mysql";
import mysql=require("mysql");



export class CustomerDAOImpl implements CustomerDAO{

    constructor(private connection:PoolConnection){}

    delete(id: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{


              this.connection.query(`Delete from customer Where id='${id}'`,
                  (err,result,field)=>{
                          if(err){
                             reject(err);
                          }else{
                              resolve(result.affectedRows>0);
                          }
              })
        });
    }

    find(id: string): Promise<Array<Customer>> {
        return new Promise((resolve,reject)=>{

           this.connection.query(`select * from customer where id='${id}'`,
               (err,result,field)=>{
                   if(err){
                       reject(err);
                   }else {
                       resolve(result)
                   }
           })
        });
    }

    findAll(): Promise<Array<Customer>> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`Select * from customer`,
                (err,result)=>{
                  if(err){
                      reject(err);
                  }else {
                      resolve(result);
                  }
                })
        });
    }

    save(entity: Customer): Promise<boolean> {
        return new Promise((resolve,reject)=>{
           this.connection.query(`Insert into customer values ('${entity.id}','${entity.name}','${entity.address}')`,
               (err,result,field)=>{
                  if(err){
                      reject(err);
                  }else{
                      resolve(result.affectedRows>0);
                  }
                }
           )
        });
    }

    update(entity: Customer): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            console.log(`UPDATE Customer SET name = '${entity.name}', address ='${entity.address}' WHERE id='${entity.id}'`)
          this.connection.query(`UPDATE Customer SET name = '${entity.name}', address ='${entity.address}' WHERE id='${entity.id}'`,
              (err,result)=>{

                 if(err){
                     console.log(3)
                     reject(err);
                 }else{
                     console.log(4,result.affectedRows>0)
                     resolve(result.affectedRows>0)
                 }
              })
        });
    }

    countCustomer(): Promise<number> {
        return new Promise((resolve,reject)=>{
            this.connection.query("SELECT count(*) as count From customer",
                (err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result[0].count);
                    }
                });

        });
    }

}