import {ItemBO} from "../item-bo";
 import Promise=require("promise");
import {ItemDTO} from "../../../dto/item-dto";
import {pool} from "../../../db/db-pool";
import {DAOType, getDAO} from "../../../dao/dao-factory";
import {ItemDAO} from "../../../dao/custom/item-dao";




export class ItemBoImpl implements ItemBO{
    deleteItem(id: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const itemDAO=<ItemDAO>getDAO(DAOType.ITEM, connection);
                    const promise=itemDAO.delete(id);
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

    findAllItem(): Promise<Array<ItemDTO>> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const itemDAO=<ItemDAO>getDAO(DAOType.ITEM, connection);
                    const promise=itemDAO.findAll();
                    promise.then(items=>{
                        resolve(items);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    findItem(id: string): Promise<Array<ItemDTO>> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const itemDAO=<ItemDAO>getDAO(DAOType.ITEM, connection);
                    const promise=itemDAO.find(id);
                    promise.then(item=>{
                        resolve(item);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    getItemCount(): Promise<number> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err)
                }else{
                    const itemDAO=<ItemDAO>getDAO(DAOType.ITEM, connection);
                    const promise=itemDAO.countOfItems();
                    promise.then(count=>{
                        resolve(count);
                    }).catch(error=>{
                        reject(error)
                    })
                }
            })
        })
    }

    saveItem(itemDTO: ItemDTO): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const itemDAO = <ItemDAO> getDAO(DAOType.ITEM, connection);
                    const promise = itemDAO.save(itemDTO);
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

    updateItem(itemDTO: ItemDTO): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const itemDAO = <ItemDAO> getDAO(DAOType.ITEM, connection);

                    const promise = itemDAO.update(itemDTO);
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