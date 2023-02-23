export class BaseEntity {
    constructor(
      public creationDate:Date,
      public editDate:Date,
      public creationUser:number,
      public editUser:number

    ){}
}