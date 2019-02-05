import express=require("express");
import cors = require("cors");
import {BOType, getBO} from "../business/business-factory";
import {OrderBO} from "../business/custom/order-bo";




const placeOrderDispatcher=express.Router();
placeOrderDispatcher.route("")
    .get((req,res)=>{
        const orderBO=<OrderBO>getBO(BOType.ORDER);
        const promise=orderBO.findAllOrder();
        promise.then(orders=>{
            res.status(200).json(orders);
        }).catch(error=>{
            res.status(500).send(error);
        })
    })

    .post((req,res)=>{
        console.log(req.body.id)
        if(!("id" in req.body &&"date" in req.body && "customerId" in req.body)){
            res.status(400).send("invalid Request Body");
            return;
        }

        const orderBO=<OrderBO>getBO(BOType.ORDER);
        const promise=orderBO.saveOrder(req.body);
        promise.then(status=>res.status(201).json(status)).
        catch(err=>res.status(500).send(err))
    })

    .head(cors({exposedHeaders:['x-count']}),(req,res)=>{
        console.log(1)
        const orderBO=<OrderBO>getBO(BOType.ORDER);
        const promise=orderBO.getOrderCount();
        promise.then(count=>{
            console.log(2)
            res.append("x-count",count+"");
            res.sendStatus(200);
        }).catch(err=>{
            res.sendStatus(500);
        })
    })


placeOrderDispatcher.route("/:id")

    .get((req,res)=>{
        const orderBO=<OrderBO>getBO(BOType.ORDER);
        const promise=orderBO.findOrder(req.params.id);
        promise.then(order=>{
            if(order.length>0){
                res.status(200).send(order[0]);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            res.status(500).send(err);
        })
    })

    .put((req,res)=>{
        if(!("id" in req.body &&"name" in req.body && "address" in req.body)){
            res.status(400).send("invalid Request Body");
            return;
        }

        if(req.body.id!==req.params.id){
            res.status(400).send("Mismatched Customer ID");
            return;
        }

        const orderBO=<OrderBO>getBO(BOType.ORDER);
        const promise=orderBO.updateOrder(req.body);
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
        const orderBO=<OrderBO>getBO(BOType.ORDER);
        const promise=orderBO.deleteOrder(req.params.id);
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
export default placeOrderDispatcher ;





