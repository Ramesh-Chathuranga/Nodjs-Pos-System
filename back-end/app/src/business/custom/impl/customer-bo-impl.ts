import {CustomerBO} from "../customer-bo";
import {pool} from "../../../db/db-pool";
import {CustomerDAO} from "../../../dao/custom/customer-dao";
import {DAOType, getDAO} from "../../../dao/dao-factory";
import {CustomerDTO} from "../../../dto/customer-dto";
import Promise = require("promise");


export class CustomerBoImpl implements CustomerBO{
    deleteCustomer(id: string): Promise<boolean> {
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,connection)=>{
              if(err){
                  reject(err);
              }else{
                  const customerDAO=<CustomerDAO>getDAO(DAOType.CUSTOMER, connection);
                  const promise=customerDAO.delete(id);
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

    findAllCustomer(): Promise<Array<CustomerDTO>> {
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,connection)=>{
               if(err){
                   reject(err);
               }else{
                   const customerDAO=<CustomerDAO>getDAO(DAOType.CUSTOMER, connection);
                   const promise=customerDAO.findAll();
                   promise.then(customers=>{
                       resolve(customers);
                       pool.releaseConnection(connection);
                   }).catch(error=>{
                       reject(error);
                       pool.releaseConnection(connection);
                   })
               }
           })
        })
    }

    findCustomer(id: string): Promise<Array<CustomerDTO>> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const customerDAO=<CustomerDAO>getDAO(DAOType.CUSTOMER, connection);
                    const promise=customerDAO.find(id);
                    promise.then(customer=>{
                        resolve(customer);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    })
                }
            })
        })
    }

    getCount(): Promise<number> {
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,connection)=>{
               if(err){
                   reject(err)
               }else{
                   const customerDAO=<CustomerDAO>getDAO(DAOType.CUSTOMER, connection);
                   const promise=customerDAO.countCustomer();
                   promise.then(count=>{
                       resolve(count);
                   }).catch(error=>{
                       reject(error)
                   })
               }
           })
        })
    }

    saveCustomer(customerDTO:CustomerDTO): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err);
                }else{
                    const customerDAO = <CustomerDAO> getDAO(DAOType.CUSTOMER, connection);
                    const promise = customerDAO.save(customerDTO);
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

    updateCustomer(customerDTO:CustomerDTO): Promise<boolean> {

        return new Promise((resolve,reject)=>{
            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const customerDAO = <CustomerDAO> getDAO(DAOType.CUSTOMER, connection);

                    const promise = customerDAO.update(customerDTO);
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