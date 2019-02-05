export interface QueryDAO extends SuperDAO{
    nextOrderNumber():Promise<string>;
}