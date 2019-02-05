import express = require("express");
import cors = require("cors");
import {BOType, getBO} from "../business/business-factory";
import {CustomerBO} from "../business/custom/customer-bo";


const customerDispatcher=express.Router();
customerDispatcher.route("")
    .get((req,res)=>{

       const customerBO=<CustomerBO>getBO(BOType.CUSTOMER);
       const promise=customerBO.findAllCustomer();
       promise.then(customers=>{
           res.status(200).json(customers);
       }).catch(error=>{
           res.status(500).send(error);
       })
    })

    .post((req,res)=>{
        if(!("id" in req.body &&"name" in req.body && "address" in req.body)){
            res.status(400).send("invalid Request Body");
            return;
        }

        const customerBO=<CustomerBO>getBO(BOType.CUSTOMER);
        const promise=customerBO.saveCustomer(req.body);
        promise.then(status=>res.status(201).json(status)).
        catch(err=>res.status(500).send(err))
    })
    .head(cors({
            exposedHeaders:['x-count']
        }),
        (req,res)=>{
           const customerBO=<CustomerBO>getBO(BOType.CUSTOMER);
           const promise=customerBO.getCount();
           promise.then(count=>{
               res.append("x-count",count+"");
               res.sendStatus(200)
           }).catch(err=>{
               res.sendStatus(500);
           })
    });

customerDispatcher.route("/:id")

    .get((req,res)=>{

        const customerBO=<CustomerBO>getBO(BOType.CUSTOMER);
        const promise=customerBO.findCustomer(req.params.id);
        promise.then(customer=>{
            if(customer.length>0){
                res.status(200).send(customer[0]);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            res.status(500).send(err);
        })
    })

    .put((req,res)=>{

       if(!("id" in req.body && "name" in req.body && "address" in req.body)){
           res.status(400).send("Invalid Request Body");
           return;
       }


       if(req.body.id!==req.params.id){
           res.status(400).send("Mismatched Customer ID");
           return;
       }


        const customerBO=<CustomerBO>getBO(BOType.CUSTOMER);
        const promise=customerBO.updateCustomer(req.body);
        promise.then(status=>{

            if(status){

                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            res.status(500).send(err);
        })
    })

    .delete((req,res)=>{
        const customerBO=<CustomerBO>getBO(BOType.CUSTOMER);
        const promise=customerBO.deleteCustomer(req.params.id);
        promise.then(status=>{
            if(status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            res.status(500).send(err);
        })
    })

export default customerDispatcher ;