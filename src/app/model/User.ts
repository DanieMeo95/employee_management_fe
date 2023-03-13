import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity{
    constructor(
        public baseEntity:BaseEntity,
        public id:number,
        public name:string,
        public username:string,
        public surname:string, 
        public password:string
        
    ){
        super(baseEntity.creationDate,baseEntity.editDate,baseEntity.creationUser,baseEntity.editUser);
    }
}