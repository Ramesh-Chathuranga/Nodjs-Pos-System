
export class OrderDetailDTO{
    constructor(
        public orderId:string,
        public itemCode:string,
        public qty:number,
        public unitPrice:number
    ){}
}
