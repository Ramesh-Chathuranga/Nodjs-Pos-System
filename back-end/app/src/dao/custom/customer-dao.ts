import {Customer} from "../../entity/customer";

export interface CustomerDAO extends CrudDAO<Customer,string>{
    countCustomer():Promise<number>
}