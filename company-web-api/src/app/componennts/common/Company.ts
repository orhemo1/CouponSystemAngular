export class Company{

public  id:number;
public  name:String;
public  password:String;
public  email:String;
constructor( public  jsonid?:number,public  jsonname?:string,public  jsonpassword?:string,
    public jsonemail?:string){
     this.id=jsonid
     this.name=jsonname
     this.password=jsonpassword
     this.email=jsonemail
    }
}
