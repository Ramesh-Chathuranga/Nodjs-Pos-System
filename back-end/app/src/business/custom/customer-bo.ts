import {CustomerDTO} from "../../dto/customer-dto";


export interface CustomerBO {
    saveCustomer(customerDTO:CustomerDTO):Promise<boolean>;
    updateCustomer(customerDTO:CustomerDTO):Promise<boolean>;
    deleteCustomer(id:string):Promise<boolean>;
    findCustomer(id:string):Promise<Array<CustomerDTO>>;
    findAllCustomer():Promise<Array<CustomerDTO>>;
    getCount():Promise<number>;
}