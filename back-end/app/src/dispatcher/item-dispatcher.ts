import express = require("express");
import {BOType, getBO} from "../business/business-factory";
import {ItemBO} from "../business/custom/item-bo";
import cors=require("cors");


const itemDispatcher=express.Router();
  itemDispatcher.route("")
    .get((req,res)=>{
       const itemBO=<ItemBO>getBO(BOType.ITEM);
        const promise=itemBO.findAllItem();
        promise.then(items=>{
            res.status(200).json(items);
        }).catch(error=>{
            res.status(500).send(error);
        })
    })

    .post((req,res)=>{
        if(!("code" in req.body &&"description" in req.body && "unitPrice" in req.body  && "qtyOnHand" in req.body)){
            res.status(400).send("invalid Request Body");
            return;
        }

        const itemBO=<ItemBO>getBO(BOType.ITEM);
        const promise=itemBO.saveItem(req.body);
        promise.then(status=>res.status(201).json(status)).
        catch(err=>res.status(500).send(err))
    })
  .head(cors({exposedHeaders:['x-count']}),(req,res)=>{
      const itemBO=<ItemBO>getBO(BOType.ITEM);
      const promise=itemBO.getItemCount();
      promise.then(count=>{
          res.append("x-count",count+"");
          res.sendStatus(200)
      }).catch(err=>{
          res.sendStatus(500);
      })
   });


itemDispatcher.route("/:id")

    .get((req,res)=>{
        const itemBO=<ItemBO>getBO(BOType.ITEM);
        const promise=itemBO.findItem(req.params.id);
        promise.then(item=>{
            if(item.length>0){
                res.status(200).send(item[0]);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            res.status(500).send(err);
        })
    })

    .put((req,res)=>{

        if(!("code" in req.body &&"description" in req.body && "unitPrice" in req.body  && "qtyOnHand" in req.body)){
            res.status(400).send("invalid Request Body");
            console.log(req.body.code,req.params.id)
            return;
        }

        if(req.body.code!==req.params.id){
            console.log()
            res.status(400).send("Mismatched Customer ID");
            return;
        }
        const itemBO=<ItemBO>getBO(BOType.ITEM);
        const promise=itemBO.updateItem(req.body);
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
        const itemBO=<ItemBO>getBO(BOType.ITEM);
        const promise=itemBO.deleteItem(req.params.id);
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

export default itemDispatcher ;