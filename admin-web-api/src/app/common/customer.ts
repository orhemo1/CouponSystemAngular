
export class Customer{
    id : number;
    name : string;
    password : string;

    constructor(public userid? : number,public username? : string,
        public userpassword? : string){
            this.id= userid;
            this.name=username;
            this.password=userpassword;
    }
}