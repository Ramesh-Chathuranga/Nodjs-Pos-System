

interface CrudDAO<T,ID> extends SuperDAO{
    save(entity:T):Promise<boolean>;
    update(entity:T):Promise<boolean>;
    find(id:ID):Promise<Array<T>>;
    delete(id:ID):Promise<boolean>;
    findAll():Promise<Array<T>>;

}