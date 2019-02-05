
export class OrderDetail{
    constructor(
        public orderId:string,
        public itemCode:string,
        public qty:number,
        public unitPrice:number
    ){}
}
