import { BaseEntity } from "./BaseEntity";
import { Customer } from "./Customer";

export class Task extends BaseEntity {
    constructor(
        public baseEntity:BaseEntity,
        public id:number,
        public description:string,
        public factory:Boolean,
        public customerDto:Customer
    ){
        super(baseEntity.creationDate,baseEntity.editDate,baseEntity.creationUser,baseEntity.editUser);
    }
  
    }