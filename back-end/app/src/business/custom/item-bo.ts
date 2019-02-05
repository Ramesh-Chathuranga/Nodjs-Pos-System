import {ItemDTO} from "../../dto/item-dto";


export interface ItemBO {
    saveItem(customerDTO:ItemDTO):Promise<boolean>;
    updateItem(customerDTO:ItemDTO):Promise<boolean>;
    deleteItem(id:string):Promise<boolean>;
    findItem(id:string):Promise<Array<ItemDTO>>;
    findAllItem():Promise<Array<ItemDTO>>;
    getItemCount():Promise<number>;
}