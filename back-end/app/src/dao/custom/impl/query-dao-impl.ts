import {QueryDAO} from "../query-dao";
import Promise=require("promise");
import {PoolConnection} from "mysql";


export class Class implements QueryDAO{
    constructor(private connection:PoolConnection){}
    nextOrderNumber(): Promise<string> {
        return new Promise((resolve,reject)=>{
            this.connection.query(`select  id from customer  ORDER BY id DESC LIMIT 1;`,
                (err,result)=>{
                    if(err){
                        reject(err);
                    }else {
                        console.log(result);
                        resolve(result);
                    }
                })
        });
    }

}